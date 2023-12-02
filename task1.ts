import inquirer from 'inquirer';

const products: Record<string, number> = {
  "apple": 2,
  "banana": 1,
  "broccoli": 1.5,
  "carrot": 1,
  "bread": 3,
  "milk": 2.5,
};

interface GroceryInput {
  groceryName: string;
  quantity: number;
}

async function simulateShopping() {
  let totalCost = 0;

  console.log("Welcome to the supermarket!");

  while (true) {
    console.log("\nAvailable products:");
    for (const product in products) {
      console.log(`${product}: $${products[product]}`);
    }

    const { itemName } = await inquirer.prompt<{ itemName: string }>([
      {
        type: 'input',
        name: 'itemName',
        message: "Enter the name of the item you want to buy (or type 'exit' to finish shopping):",
      },
    ]);

    if (itemName.toLowerCase() === 'exit') {
      break;
    }

    if (itemName.toLowerCase() === 'fruits' || itemName.toLowerCase() === 'vegetables') {
      // Scenario 1: Buying Groceries
      const groceryType = itemName.toLowerCase();
      console.log(`Available ${groceryType}: ${Object.keys(products).filter(product => product.includes(groceryType)).join(', ')}`);

      const { groceryName, quantity } = await inquirer.prompt<GroceryInput>([
        {
          type: 'input',
          name: 'groceryName',
          message: `Enter the name of the ${groceryType}:`,
        },
        {
          type: 'number',
          name: 'quantity',
          message: `Enter the quantity of ${groceryType}:`,
        },
      ]);

      if (products[groceryName] !== undefined && !isNaN(quantity) && quantity > 0) {
        const itemCost = products[groceryName] * quantity;
        console.log(`Added ${quantity} ${groceryName}(s) to your cart. Cost: $${itemCost.toFixed(2)}`);
        totalCost += itemCost;
      } else {
        console.log("Invalid input. Please enter valid values.");
      }
    } else {
      // Regular shopping scenario
      const { quantity } = await inquirer.prompt<{ quantity: number }>([
        {
          type: 'number',
          name: 'quantity',
          message: `Enter the quantity of ${itemName}:`,
        },
      ]);

      if (products[itemName] !== undefined && !isNaN(quantity) && quantity > 0) {
        const itemCost = products[itemName] * quantity;
        console.log(`Added ${quantity} ${itemName}(s) to your cart. Cost: $${itemCost.toFixed(2)}`);
        totalCost += itemCost;
      } else {
        console.log("Invalid input. Please enter valid values.");
      }
    }
  }

  // Scenario 2: Checking Discounts
  let discountedTotal = totalCost;

  if (totalCost > 10) {
    const discountPercentage = 10; // You can adjust the discount percentage as needed
    const discountAmount = (totalCost * discountPercentage) / 100;
    discountedTotal = totalCost - discountAmount;
    console.log(`Congratulations! You get a ${discountPercentage}% discount. Discounted total: $${discountedTotal.toFixed(2)}`);
  }

  // Scenario 3: Checkout Process
  console.log(`\nThank you for shopping! Your total cost is: $${totalCost.toFixed(2)}`);

  // Nested loops for the checkout process
  while (true) {
    const { paymentMethod } = await inquirer.prompt<{ paymentMethod: string }>([
      {
        type: 'list',
        name: 'paymentMethod',
        message: 'Choose a payment method:',
        choices: ['cash', 'card', 'exit'],
      },
    ]);

    if (paymentMethod.toLowerCase() === 'exit') {
      console.log("Thank you for shopping with us! Have a great day!");
      break;
    }

    switch (paymentMethod.toLowerCase()) {
      case 'cash':
        console.log("Please pay with cash at the counter.");
        break;
      case 'card':
        console.log("Please insert or swipe your card at the card reader.");
        break;
      default:
        console.log("Invalid payment method. Please choose a valid payment method or type 'exit' to leave.");
    }
  }
}

// Run the simulation
simulateShopping();
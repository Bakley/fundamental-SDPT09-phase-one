// Import modules
import readline from "readline" // read the input from the user
import chalk from "chalk" // color the terminal text
import fs  from "fs" //perform CRUD operations to files

// interface
const rl = readline.createInterface({
    input: process.stdin, // what the user will type on the terminal
    output: process.stdout // what the program will show as text on the terminal screen
});

// fn decalation
// function user(age, last_name){}

// fn expression
// const user = function (age, first name) {}

// Arrow function
// () => {}

// A function to ask question
const askQuestion = (query) => {
    return new Promise((resolve) => rl.question(query, resolve))
}

// A  function to validate numbers
const validateNumber = async (query) => {
    let input;
    do {
        input = await askQuestion(query) // input = 2ilo
        if(!isNaN(input) && Number(input) > 0){
            return parseFloat(input)
        }
        console.log(chalk.red("Kindly enter a positive number"))
    } while (true);
}

// Progress bar
const progressBar = (label, duration) => {
    // [=====]
    let progress = 0;
    const interval = setInterval();
}

// save to data to a json file
const saveOrder = (order) => {
    const data = fs.existsSync("orders.json") ? 
        JSON.parse(fs.readFileSync("orders.json", 'utf-8')) :
        [];
    data.push(order)
    fs.writeFileSync("orders.json", JSON.stringify(data, null, 2))
    console.log(
        chalk.green("Order saved successfully")
    )
}

const main = async () => {
    try {
        console.log(chalk.blueBright(`
            =========================================
                ☕ Einstein-Tesla Coffee Shop ☕
            "Fueling Great Minds Since Eternity"
            =========================================
        `));
        console.log(chalk.yellow(`
            ⚡⚙️            ☕        🌟
            RELATIVITY + ENERGY = BRILLIANCE
        `));

        // Ask for inputs
        const customerName = await askQuestion(
            chalk.cyan("What is your name?")
        )
        const coffeeType = await askQuestion(
            chalk.cyan("What type of coffee would you like? (e.g., Relativity Roast, Quantum Espresso): ")
          );
        const cupsOrdered = await validateNumber(chalk.cyan("How many cups would you like? "));
        const weight = await validateNumber(chalk.cyan("Enter your weight (kg): "));
        const wantsSugarInput = await askQuestion(
            chalk.cyan("Would you like sugar? (yes/no): ")
        );
        const wantsSugar = wantsSugarInput.trim().toLowerCase() === "yes";

            // Simulate brewing process
    console.log("\n🛠️ Processing your order...");
    progressBar("Brewing", 3000);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(wantsSugar ? chalk.green("🍬 Adding sugar for sweetness.") : chalk.yellow("⚙️ Keeping it sugar-free!"));

    // Energy calculations
    const caffeinePerCup = 95; // mg of caffeine per cup
    const caffeineFactor = weight > 70 ? 1.2 : 1; // Adjust caffeine effect based on weight
    const brainEfficiency = 0.1; // Static for simplicity, can be made adjustable
    const totalCaffeine = cupsOrdered * caffeinePerCup;
    const energyBoost = totalCaffeine * 4184 * caffeineFactor; // Energy in joules
    const thinkingEnergy = energyBoost * brainEfficiency;
        
        // Save order
        saveOrder({
            customerName,
            coffeeType,
            cupsOrdered,
            wantsSugar,
            weight,
            energyBoost,
            thinkingEnergy,
        })
            // Display results
        console.log(chalk.blueBright(`
        =========================================
              🚀 Energy Boost Report 🚀
        =========================================
        Customer: ${customerName}
        Coffee Type: ${coffeeType}
        Cups Ordered: ${cupsOrdered}
        Weight: ${weight} kg
        Caffeine Intake: ${totalCaffeine} mg
        Estimated Energy Boost: ${energyBoost.toLocaleString()} joules
        Thinking Energy (Brain Efficiency at 10%): ${thinkingEnergy.toLocaleString()} joules
        =========================================
          "Unleashing energy for brilliant ideas!"
        =========================================
        `));
        
            // Motivational quotes based on energy level
            console.log(chalk.magenta("\n--- Wisdom from the Great Minds ---"));
            if (thinkingEnergy > 50000) {
              console.log(
                chalk.green(`"Creativity is intelligence having fun." — Albert Einstein`)
              );
            } else {
              console.log(
                chalk.yellow(
                  `"If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration." — Nikola Tesla`
                )
              );
            }
        
            // Closing message
            console.log(chalk.blueBright(`
        =========================================
           Thank you for fueling your brain with us!
                  ☕⚡ See you next time! ⚡☕
        =========================================
        `));
            rl.close();
    } catch (error) {
        console.log(chalk.red("Something went wrong:", error))  
    }
}

main() 




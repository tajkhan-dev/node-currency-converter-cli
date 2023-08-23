import inquirer from "inquirer";

interface Currency {
  curr1: string;
  curr2: string;
  amount: number;
}

interface Currencies {
  [key: string]: {
    [key: string]: number;
  };
}
const converter = async () => {
  const rates: Currencies = {
    SAR: {
      PKR: 79,
      USD: 0.27,
    },
    USD: {
      PKR: 300,
      SAR: 3.75,
    },
    PKR: {
      SAR: 0.013,
      USD: 0.0033,
    },
  };
  const { curr1, curr2, amount }: Currency = await inquirer.prompt([
    {
      name: "curr1",
      type: "list",
      choices: ["SAR", "PKR", "USD"],
      message: "Select First Currency",
    },
    {
      name: "curr2",
      type: "list",
      choices: ["USD", "PKR", "SAR"],
    },
    {
      name: "amount",
      type: "number",
      message: "enter the amount to convert",
    },
  ]);
  if (curr1 === curr2) {
    console.log("choose different currencies");
  } else {
    const Conversionrate = rates[curr1][curr2];
    const result = Conversionrate * amount;

    console.log("🚀 ~ file: app.ts:54 ~ converter ~ result:", result, curr2);
  }
};
converter();

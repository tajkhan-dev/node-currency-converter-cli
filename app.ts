import inquirer from 'inquirer'

interface Currency{
    curr1:string,
    curr2:string
}
const converter=async()=>{
    const rates={
        "SAR":{
            pkr:79,
            usd:0.27
        }
    }
const {curr1,curr2}:Currency=await inquirer.prompt([
    {
        name:'curr1',
        type:'list',
        choices:["SAR","PKR","USD"],
        message:'Select First Currency'
    },
    {
        name:'curr2',
        type:'list',
        choices:["USD","PKR","SAR"]
    }

])


}

converter()
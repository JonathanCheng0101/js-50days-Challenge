//Description:
//Write a function formatCurrency(amount: number):
//string that converts a number into a U.S. currency string, 
//formatted with a dollar sign, commas, and exactly two decimal places.

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

console.log(formatCurrency(1234.56)); // "$1,234.56"
console.log(formatCurrency(9));       // "$9.00"
const readline = require('readline-sync');
// program to generate fibonacci series up to n terms

// take input from the user
const number = parseInt(readline.question('Enter the number of terms: '));

if (isNaN(number))
{
    console.log("Please enter a valid number");
    return false;
}
else
{
    let n1 = 0, n2 = 1, nextTerm;

    console.log('Fibonacci Series:');

    for (let i = 1; i <= number; i++)
    {
        console.log(n1);
        
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
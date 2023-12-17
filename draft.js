

//? Problem 1
const sum = sumArray([1, 2, 3, 4, 5]);
function sumArray(array) {
    let s = 0;
    for (let i = 0; i < array.length; i++)
        s += array[i];
    return s;
}
console.log(sum); //* Output: 15



//? Problem 2
const maxNumber = findMaxNumber([10, 5, 8, 20, 3]);
function findMaxNumber(array)
{
    let max=array[0];
    for(let i=1;i<array.length;i++)
    {
        if(array[i]>max)
        max=array[i];
    }
    return max;
}
console.log(maxNumber); //* Output: 20



//? Problem 3
const oddNumbers = filterOddNumbers([1, 2, 3, 4, 5]);
function filterOddNumbers(array)
{
    let newArray=[];
    for(let i=0;i<array.length;i++)
    {
        if(array[i]%2 != 0)
        newArray.push(array[i]);
    }
    return newArray;
}
console.log(oddNumbers); //* [1, 3, 5]



//? Problem 4
const isPalindromeResult = isPalindrome('radar');
const isNonPalindromeResult = isPalindrome('hello');

function isPalindrome(word)
{
    let reverse_word=word.split('').reverse().join('');
    if(word==reverse_word)
    return true;
    else
    return false;
}
console.log(isPalindromeResult); //*true
console.log(isNonPalindromeResult); //*false




//? Problem 5
const missingNumber = findMissingNumber([1, 2, 3, 5, 6]);
function findMissingNumber(array)
{
    for(let i=0;i<array.length-1;i++)
    {
        if(array[i+1]==array[i]+1)
        continue;
        else
        return array[i]+1;
    }
    return array[array.length-1]-1;
}
console.log(missingNumber); //* Output: 4


//? Problem 6
const duplicateNumbers = findDuplicates([1, 2, 3, 2, 4, 5, 4, 6]);
function findDuplicates(array)
{
    array.sort(); 
    let newArray=[];
    for(let i=0;i<array.length-1;i++)
    {
        if(array[i]==array[i+1] && newArray.indexOf(array[i])==-1)
        newArray.push(array[i]);
    }
    return newArray;
}
console.log(duplicateNumbers); //* Output: [2, 4]

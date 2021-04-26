# Part 1a

## var 
1. What is printed by line 9? If the code returns an error, explain why. ^^^^^
   - values added:  20 

2. What is printed by line 13? If the code returns an error, explain why. 
   - final results: 20

## let
3. What is printed by line 9? If the code returns an error, explain why. ^^^^^
   - values added:  20 

4. What is printed by line 13? If the code returns an error, explain why. 
   - ReferenceError: result is not defined
   - Explain: because the scope of the 'let' is the block it belongs to. Line 13 is out of the block from line 3 to line 11. So it cannot recognize it.

5. What is printed by line 9? If the code returns an error, explain why. ^^^^^
    - TypeError: Assignment to constant variable.
    - Explain: because the 'result' is const and cannot change its value.

## const
6. What is printed by line 13? If the code returns an error, explain why. 
   - The code didn't run to this line. It stopped at line 7 "result = num1 + num2;".


# Part 1b

## var
1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
   - Line 12 will print the value of variable "i" after the last iteration of the for loop.
   - It printed "3".

2. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
   - Line 13 will print the value of variable "discountedPrice" in the last iteration of the for loop.
   - It printed "150".
  
3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
   - Line 14 will print the value of variable "finalPrice" in the last iteration of the for loop.
   - It printed "150".

4. ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^
   - This function will return the value of variable "discounted" which is an array. It keeps the values of variable "finalPrice" in each iteration of the for loop.
   - It returned "[50, 100, 150]".


## let

5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
   - ReferenceError: i is not defined
   - Explain: because the "i" is defined using "let" in the for loop block. But the line  12 is outside of the for loop block. It is  outside of the "i"'s scope. So it cannot recognize it.
  
6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
   - ReferenceError: discountedPrice is not defined
   - Explain: because the "discountedPrice" is defined using "let" in the for loop block. But the line  13 is outside of the for loop block. It is  outside of the "discountedPrice"'s scope. So it cannot recognize it.
  
7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
   - Line 14 will print the value of variable "finalPrice" in the last iteration of the for loop.
   - It printed "150".
  
8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
   - This function will return the value of variable "discounted" which is an array. It keeps the values of variable "finalPrice" in each iteration of the for loop.
   - It returned "[50, 100, 150]".

## const

9. ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^
   - ReferenceError: i is not defined
   - Explain: because the "i" is defined using "let" in the for loop block. But the line 11 is outside of the for loop block. It is  outside of the "i"'s scope. So it cannot recognize it.
  
10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
    - Line 12 will print the value of const "length" which is the length of array "prices". It is a const and its value doesn't change.
    - It printed "3".
  
11.  ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
     - This function will return the value of "discounted" which is an array. It keeps the values of  "discountedPrice" in each iteration of the for loop.
     - It returned "[50, 100, 150]".

## Data Types

12. Given the above Object, write the notation for:  (These should be in your part1.md)
    
- A. Accessing the value of the name property in the student object
  - student.name
- B. Accessing the value of the Grad Year property in the student object
  - student['Grad Year']
- C. Calling the function for the greeting property in the student object
  - student.greeting()  
- D. Accessing the name property of the object in the Favorite Teacher property in student
  - student['Favorite Teacher'].name
- E. Access the first index in the array of the courseLoad property of the student object
  - student.courseLoad[0] 

## Basic Operators & Type Conversion

13. Arithmetic

- A. ‘3’ + 2
  - Output: 32 
  - Explain: because it converts Number 2 to String '2'
- B. ‘3’ - 2
  - Output: 1
  - Explain: becuase it converts String '3' to Number 3
- C. 3 + null
  - Output: 3
  - Explain: becuase it converts Symbol null to Number 0
- D. ‘3’ + null
  - Output: 3null
  - Explain: becuase it converts Symbol null to String
- E. true + 3
  - Output: 4
  - Explain: becuase it converts Boolean true to Number 1
- F. false + null
  - Output: 0
  - Explain: becuase it converts the Boolean false to Number 0 and converts the Symbol null to Number 0 and add them  
- G. '3' + undefined
  - Output: 3undefined
  - Explain: becuase it converts undefined to String
- H. '3' - undefined
  - Output: NaN
  - Explain: becuase it converts undefined to NaN

14. Comparison
- A. ‘2’ > 1
  - Output: true
  - Explain: because when compare a number and a string, the string '2' is converted to number to compare with  number 1
- B. ‘2’ < ‘12’
  - Output: false
  - Explain: because they are two strings. Strings are compared letter-by-letter in the “dictionary” order
- C. 2 == ‘2’
  - Output: true
  - Explain: because when compare a number and a string, the string '2' is converted to number to compare with  number 2
- D. 2 === ‘2’
  - Output: false
  - Explain: A strict equality operator === checks the equality without type conversion. They are two types so they are not equal. 
- E. true == 2
  - Output: false
  - Explain: because when compare a boolean and a number, the boolean will be converted to number. 'true' is converted to 1.
- F. true === Boolean(2)
  - Output: true
  - Explain: Boolean() converts the number 2 to boolean type. It will be true. Only number 0 is converted to false. Then "true === true" is true.


15. Explain the difference between the == and === operators.
    - A strict equality operator === checks the equality without type conversion.
    - A regular equality operator == checks the equality with type conversion when compare two different types. When values of different types are compared, they get converted to numbers.

17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part1.md).
    - The result will be [2, 4, 6].   
    - Line 13 called the function modifyArray() and passed [1, 2, 3]  as its first argument, function doSomething as its second argument. The line 3 - 5 iterated the array [1, 2, 3]. Line 4 called the function 'callback' (which actually is function doSomething) and got the result from it. Then line 4 pushed the result into array newArr. Line 6 return the value of newArr.  


18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - part1b-question18.js)

19. What is the output of the above code? (This should be in your part1.md)
    - Output: 1 
    - 4
    - 3
    - 2




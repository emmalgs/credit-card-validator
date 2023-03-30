TDD

Describe: validate()

Test: "It should return true if input is 0"
Code: validate(0)
Expected Output: true;

Test: "It should return true if a number ends in 0"
Code: validate(20);
Expected Output: true;

Test: "It should return false if a number does not end in zero"
Code: validate(21);
Expected Output: false;

Test: "It should return true if a sum of the input number ends in 0"
Code: validate(55);
Expected Output: true;

Test: "It should return true if input number is 16 digits in length"
Code: validate(5555555555555555);
Expected Output: true;

Test: "It should double every other digit and return new array"
Code: validate(1234123412341234);
Expected Output: [1,4,3,8,1,4,3,8,1,4,3,8,1,4,3,8];

Test: "It should sum a doubled digit if it is a double digit and return updated array"
Code: validate(1238123812381238);
Expected Output: [1,4,3,7,1,4,3,7,1,4,3,7,1,4,3,7];

Test: "It should return true if a 16 digit number, after doubling every other digit AND doubled the double digits, whose sum is equal to a number that ends in 0"
Code: validate(4102080860435620);
Expected Output: true;
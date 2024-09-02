# Refactoring methods, Composing Methods
 
 This is a document about refactoring methods with a focus on Composing Methods.
 **The refactoring techniques in this group streamline methods, remove code duplication, and pave the way for future improvements.**
 [Composing Methods](https://refactoring.guru/refactoring/techniques/composing-methods)

 ## Table of contacts
 1. Extract Method
 2. Inline Method
 3. Extract Variable
 4. Inline Temp
 5. Replace Temp with Query
 6. Split Temporary Variable
 7. Remove Assignments to Parameters
 8. Replace Method with Method Object
 9. Substitute Algorithm

 ## 1. Extract Method
 If you have a code fragment that can be grouped together, you must move this code to a separate new method (or function) and replace the old code with a call to the method.

 ## 2. Inline Method
 When a method body is more obvious than the method itself, use this technique.
 Replace calls to the method with the method’s content and delete the method itself.

 ## 3. Extract Variable
 You have an expression that’s hard to understand.
 Place the result of the expression or its parts in separate variables that are self-explanatory.

## 4. Inline Temp
You have a temporary variable that’s assigned the result of a simple expression and nothing more.
Replace the references to the variable with the expression itself.

## 5. Replace Temp with Query
You place the result of an expression in a local variable for later use in your code.
Move the entire expression to a separate method and return the result from it. Query the method instead of using a variable. Incorporate the new method in other methods, if necessary.

## 6. Split Temporary Variable
You have a local variable that’s used to store various intermediate values inside a method (except for cycle variables).
Use different variables for different values. Each variable should be responsible for only one particular thing.

## 7. Remove Assignments to Parameters
Some value is assigned to a parameter inside method’s body.
Use a local variable instead of a parameter.

## 8. Replace Method with Method Object
You have a long method in which the local variables are so intertwined that you can’t apply Extract Method.
Transform the method into a separate class so that the local variables become fields of the class. Then you can split the method into several methods within the same class.

## 9. Substitute Algorithm
So you want to replace an existing algorithm with a new one?
Replace the body of the method that implements the algorithm with a new algorithm.



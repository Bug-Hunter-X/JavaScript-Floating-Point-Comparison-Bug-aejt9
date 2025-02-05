This repository demonstrates a common bug in JavaScript related to comparing floating-point numbers using the strict equality operator (===).  The bug arises because floating-point numbers are often represented imprecisely in binary format, leading to unexpected results when comparing for equality. This example shows a simple function that demonstrates this problem and provides a corrected version.

## Bug
The `foo` function incorrectly determines if two floating-point numbers are equal using the strict equality operator (===).  Due to floating-point precision limitations, direct equality checks can fail even for numbers that are conceptually the same. 

## Solution
The solution involves comparing the absolute difference between the two numbers against a small tolerance value (epsilon) to account for floating-point precision errors. This approach is more robust for comparing floating-point numbers. 
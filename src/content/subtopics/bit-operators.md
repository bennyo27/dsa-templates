---
author: Benny Oseguera
pubDatetime: 2024-02-27
modDatetime: 2024-02-27
title: Bitwise Operators
slug: bitwise-operators
featured: false
draft: false
topics:
  - bit-manipulation
description: Quick guide to bitwise operators.
---

## Bitwise Operators

Bitwise operators are used for performing operations on binary numbers, each with its own set of unique behaviors and _laws_.

1. **Bitwise AND (&)**: Returns a one in each bit position if bits of both operands are ones.

```javascript
5 & 3;
// Outputs: 1
// Explanation: 0101 & 0011 = 0001
```

_Identity Law_ : For any number a & a = a.

```javascript
5 & 5;
// Outputs: 5
// Explanation: 0101 & 0101 = 0101
```

<br><br>

2. **Bitwise OR (|)**: Returns a one in each bit position if bits of either operand is one.

```javascript
5 | 3;
// Outputs: 7
// Explanation: 0101 | 0011 = 0111
```

_Identity Law_ : For any number a | a, it is left unchanged.

```javascript
5 | 5;
// Outputs: 5
// Explanation: 0101 | 0101 = 0101
```

<br><br>

3. **Bitwise XOR (^)**: Returns a one in each bit position if bits of one operand is one and the other operand is zero. If they are opposite, they will turn to 1. If they are equal operands then the output will be 0.

```javascript
5 ^ 3;
// Outputs: 6
// Explanation: 0101 ^ 0011 = 0110
```

_Identity Law_ : For any number a ^ a, it is set to 0.

```javascript
5 ^ 5;
// Outputs: 0
// Explanation: 0101 ^ 0101 = 0000
```

<br><br>

4. **Bitwise NOT (~)**: Inverts the bits of its operand. In binary, there is a way to represent negative numbers called the two's complement system.
   <br><br>
   To find the two's complement of a binary number (which represents its negative value):
   1. Invert all the bits of the number (change 0s to 1s and 1s to 0s).
   2. Add 1 to the resulting number.

```javascript
~5;
// Outputs: -6
// Explanation: ~0101 = 1010
// (in 32-bit, this is the two's complement representation of -6)
```

_Inversion Law_ : For any number ~(~a), you get back a.

```javascript
~0;
// Outputs: -1
// Explanation: ~0000 = 1111
// (in 32-bit, this is the two's complement representation of -1)
```

<br><br>

5. **Left shift (<<)**: Shifts its first operand in binary representation the number of bits to the left specified in the second operand, shifting in zeros from the right.

```javascript
5 << 1;
// Outputs: 10
// Explanation: 0101 << 1 = 1010
```

<br><br>

6. **Sign-propagating right shift (>>)**: Shifts the first operand in binary representation the number of bits to the right specified in the second operand, discarding bits shifted off.

```javascript
5 >> 1;
// Outputs: 2
// Explanation: 0101 >> 1 = 0010
```

<br><br>

7. **Zero-fill right shift (>>>)**: Shifts the first operand in binary representation the number of bits to the right specified in the second operand, discarding bits shifted off, and shifting in zeros from the left.

```javascript
-5 >>> 1;
// Outputs: 2147483645
// Explanation: Represents shifting of the two's complement
// binary representation of -5
```

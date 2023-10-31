//* OPERATOR PRECEDENCE
( )
// Expression Grouping	(100 + 50) * 3
.
// Member Of	car.name
[]
// Member Of	car["name"]
?.
// Optional Chaining ES2020	x ?. y
()
// Function Call	myFunction()
new
// New with Arguments	new Date("June 5,2022")
new
// New without Arguments	new Date()

//* Increment Operators
++
// Postfix Increment	i++
--
// Postfix Decrement	i--
++
// Prefix Increment	++i
--
// Prefix Decrement	--i

//* NOT Operators
!
// Logical NOT	!(x==y)
~
// Bitwise NOT	~x

//* Unary Operators
+
// Unary Plus	+x
-
// Unary Minus	-x
typeof
// Data Type	typeof x
void
// Evaluate Void	void(0)
delete
// Property Delete	delete myCar.color

//* Shift Operators
<<
// Shift Left	x << 2
>>
// Shift Right (signed)	x >> 2
>>>
// Shift Right (unsigned)	x >>> 2

//* Relational Operators
in
// Property in Object	"PI" in Math
instanceof
// Instance of Object	x instanceof Array

//* Assignment Operators
**=
// Exponentiation Assignment	x **= y
<<=
// Left Shift Assignment	x <<= y
>>=
// Right Shift Assignment	x >>= y
>>>=
// Unsigned Right Shift	x >>>= y
&=
// Bitwise AND Assignment	x &= y
|=
// Bitwise OR Assignment	x |= y
^=
// Bitwise XOR Assignment	x ^= y
&&=
// Logical AND Assignment	x &= y
||=
// Logical OR Assignment	x ||= y
=>
// Arrow	x => y
yield
// Pause / Resume	yield x
yield*
// Delegate	yield* x
...
// Spread	...x
,
// Comma	x , y
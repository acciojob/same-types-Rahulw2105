function isSameType(value1, value2) {
  //your js code here
	if(Number.isNan(a) && Number.isNan(b)) {
		return true
	}

	return typeof a === typeof b;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

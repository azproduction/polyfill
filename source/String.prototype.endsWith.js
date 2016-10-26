// String.prototype.endsWith
String.prototype.endsWith = function (string) {
	var index = arguments.length < 2 ? this.length : arguments[1];

	return this.lastIndexOf(string) === index - string.length;
};

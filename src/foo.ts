export function foo(x: string): string {
	console.log(x)
	return x
}

if (!module.parent) {
	foo("hello")
}


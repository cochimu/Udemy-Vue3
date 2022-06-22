// 型を指定
const example: string = 'example'

const hello = (name: string): string => {
	return 'hello, ' + name
}

// 引数も数値型にするとエラーになる
hello('yukari')
hello(example)
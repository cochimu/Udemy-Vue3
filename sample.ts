// 型を指定
const example: string = 'example'

const hello = (name: string): string => {
	return 'hello, ' + name
}

// 引数を指定通りにしないとエラーになる
hello('yukari')
hello(example)

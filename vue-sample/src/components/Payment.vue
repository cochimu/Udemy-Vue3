<script setup lang="ts">
// リアクティブな値とは中身が変わったら再度templateを読み込みしなおしてね、という値
// それをするにはref形式にする。そのためにimportする
// import { ref } from 'vue'

// オフジェクトそのものをリアクティブにしたい場合はrefじゃなくてreactiveを使う
import { ref, reactive } from 'vue'

// このようにref形式にしておけばここの中身が変わればtemplateを再度読み込みしてね、という合図になる
// const itemName1 = ref<string>('Desk')
const itemName2 = 'Bike'

const item1 = reactive ({
	name: 'Desk',
	price: 40000
})

// const price1 = 40000
const price2 = 20000

const url1 = ''

const buy = (itemName: string) => {
	alert('Are you sure buy ' + itemName + '?')
}

const input = (event: any) => {
	// eventの中のtargetの中のvalueというオブジェクトを見てる
	// inputで入力した値がここに入ってるから
	console.log('event:', event.target.value)
	// itemName1にinputで入れた値を代入する
	// refに代入するときは.valueで再代入する。constだけどオブジェクトの中のvalueへの代入だから再代入できる
	// itemName1.value = event.target.value

	// オブジェクトに代入するときはこの書き方
	item1.name = event.target.value
}

const inputPrice = (event: any) => {
	item1.price = event.target.value
}


</script>

<template>
	<div class="container">
		<h1>支出</h1>

		<input v-on:input="input"/>
		<input v-on:input="inputPrice"/>

		<div class="payment">
			<label>{{ item1.name }}</label>
			<label>{{ item1.price }} yen</label>
			<!-- v-bindで変数などの動的な値を入れられる -->
			<a v-bind:href="url1">購入</a>
			<!-- v-onでメソッドを埋め込める -->
			<button v-on:click="buy(item1.name)">BUY</button>
		</div>
		<div class="payment">
			<label>{{ itemName2 }}</label>
			<label>{{ price2 }} yen</label>
			<a href="">購入</a>
			<button v-on:click="buy(itemName2)">BUY</button>
		</div>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.payment {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	width: 400px;
	background-color: aliceblue;
	margin-bottom: 8px;
}

input {
	margin-bottom: 8px;
}

label {
	font-size: 20px;
	font-weight: bold;
}
</style>
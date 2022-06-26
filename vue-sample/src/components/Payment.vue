<script setup lang="ts">
// letにして変数の中身を上書きできるようにする
// ただしこのままではvueが再度読み込みされないので反映しない
// なのでこの値が変わったら再度vueを読み込んでね、としてあげないといけない(リアクティブな値)
let itemName1 = 'Desk'
const itemName2 = 'Bike'

const price1 = 40000
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
	itemName1 = event.target.value
}
</script>

<template>
	<div class="container">
		<h1>支出</h1>

		<input v-on:input="input"/>

		<div class="payment">
			<label>{{ itemName1 }}</label>
			<label>{{ price1 }} yen</label>
			<!-- v-bindで変数などの動的な値を入れられる -->
			<a v-bind:href="url1">購入</a>
			<!-- v-onでメソッドを埋め込める -->
			<button v-on:click="buy(itemName1)">BUY</button>
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

label {
	font-size: 20px;
	font-weight: bold;
}
</style>
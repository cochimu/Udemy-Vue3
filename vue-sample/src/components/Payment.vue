<script setup lang="ts">
// リアクティブな値とは中身が変わったら再度templateを読み込みしなおしてね、という値
// それをするにはref形式にする。そのためにimportする
// オフジェクトそのものをリアクティブにしたい場合はrefじゃなくてreactiveを使う
import { ref, reactive, computed, watch, toRefs } from 'vue'

// このようにref形式にしておけばここの中身が変わればtemplateを再度読み込みしてね、という合図になる
// const itemName1 = ref<string>('Desk')

// オブジェクトそのものをリアクティブにしたいときはこうなる
const item1 = reactive ({
	name: 'Desk',
	price: 40000
})

const itemName2 = 'Bike'
const price2 = 20000
const url1 = ''

const buy = (itemName: string) => {
	alert('Are you sure buy ' + itemName + '?')
}

// const input = (event: any) => {
// 	// eventの中のtargetの中のvalueというオブジェクトを見てる
// 	// inputで入力した値がここに入ってるから
// 	console.log('event:', event.target.value)
// 	// itemName1にinputで入れた値を代入する
// 	// refに代入するときは.valueで再代入する。constだけどオブジェクトの中のvalueへの代入だから再代入できる
// 	// itemName1.value = event.target.value

// 	// オブジェクトに代入するときはこの書き方
// 	item1.name = event.target.value
// }

// const inputPrice = (event: any) => {
// 	item1.price = event.target.value
// }

const clear = () => {
	item1.name = '',
	item1.price = 0
}

const budget = 50000

// 何らかの条件をもとに値を生成する時にはcomputedを使う
// computedじゃなくて自作のメソッドでもいいけど、computedの方がキャッシュを使えたり動作が軽いのでcomputed推奨
// const priceLabel = computed(() => {
// 	if (item1.price > budget * 2) {
// 		return 'too expensive...'
// 	} else if  (item1.price > budget) {
// 		return 'expensive...'
// 	} else {
// 		return item1.price + ' yen'
// 	}
// })

// 上記のcomputedと同じことがwatchでもできる
const priceLabel = ref<string>(item1.price + ' yen')
// priceをリアクティブな値にするためにtoRefsを使う
const { price } = toRefs(item1)
// watchは第一引数が変化したら第二引数の関数が呼ばれる
watch(price, () => {
	if (price.value > budget * 2) {
		priceLabel.value = 'too expensive...'
	} else if (price.value > budget) {
		priceLabel.value = 'expensive...'
	} else {
		priceLabel.value = price.value + ' yen'
	}
})


</script>

<template>
	<div class="container">
		<h1>支出</h1>
		<!-- 双方向にバインドするときはv-model -->
		<input v-model="item1.name" />
		<!-- <input v-on:input="input" v-bind:value="item1.name" /> -->
		<input v-model="item1.price" />
		<!-- <input v-on:input="inputPrice" v-bind:value="item1.price" /> -->
		
		<button v-on:click="clear">Clear</button>

		<div class="payment">
			<label>{{ item1.name }}</label>
			<label> {{ priceLabel }}</label>
			<!-- <label>{{ item1.price }} yen</label> -->
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
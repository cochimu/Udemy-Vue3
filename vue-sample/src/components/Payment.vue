<script setup lang="ts">
const itemName1 = 'Desk'
const itemName2 = 'Bike'

const price1 = 40000
const price2 = 20000

const url1 = ''
</script>

<template>
	<div class="container">
		<h1>支出</h1>
		<div class="payment">
			<label>{{ itemName1 }}</label>
			<label>{{ price1 }} yen</label>
			<!-- v-bindで動的な値を入れられる -->
			<a v-bind:href="url1">購入</a>
		</div>
		<div class="payment">
			<label>{{ itemName2 }}</label>
			<label>{{ price2 }} yen</label>
			<a href="">購入</a>
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
<script setup lang="ts">
import { ref, computed } from 'vue'
const inputtingName = ref<string>('')
const inputtingAge = ref<number>(0)

//ここで定義したemitのイベント名を親の方で@registerのように呼ぶ
const emit = defineEmits(['register'])

const register = () => {
	const person = {
		id: Math.random(), name: inputtingName.value, age: inputtingAge.value
	}
	// personというオブジェクトをregisterというイベントでemit(親に渡す)する
	emit('register', person)
}

const nameLengthLimit = 15

// computedを使ってstyleを変える
const isValidName = computed(() => {
	if (inputtingName.value.length >= nameLengthLimit) {
		return false
	} else {
	return true
	}
})

const color = computed(() => {
	// isValidNameがtrueならwhite、falseなら右側
	return isValidName.value? 'white' : 'rgb(244, 194, 190)'
})

</script>

<template>
	<div class="form-container">
		<div class="input-container">
			<div class="input-column">
				<span>name:</span>
				<!-- inputに入れた値をinputtingNameにバインドしたいし、バインドした値をここに表示したいので双方向バインドのv-modelを使う -->
				<input class="input-name" v-model="inputtingName">
			</div>
			<span  class="error-message" v-if="!isValidName">{{ nameLengthLimit }}15文字以内にしてください</span>
			<div class="input-column">
				<span>age:</span>
				<input class="input" v-model="inputtingAge" type="number">
			</div>
		</div>
		<button :disabled="!isValidName" @click="register" class="register-button">register</button>
	</div>
</template>

<style scoped>
.form-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgb(255, 241, 226);
	padding: 24px 0;
	width: 50%;
	margin-bottom: 12px;
	border-radius: 4px;
}

.input-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 50px;
	margin-bottom: 20px;
}

.input-column {
	width: 200px;
	display: flex;
	justify-content: space-between;
}
.input-name {
	background-color: v-bind(color);
}

input {
	width: 120px;
	margin-bottom: 8px;
}

span {
	font-size: 20px;
	font-weight: bold;
}

.error-message {
	font-size: 12px;
	color: rgb(244, 194, 190);
}
</style>
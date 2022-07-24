<script setup lang="ts">
import { ref, Ref } from 'vue'
import PersonPostForm from './PersonPostForm.vue';
import PersonList from './PersonList.vue';

// エクスポートする型を定義
export type Person = {
	id: number,
	name: string,
	age: number,
}

// personsという値を作る
// constではあるがrefでリアクティブな値にしているので状況によって変わる定数
// 変わったことをvueが検知して読み込みされる
const persons: Ref<Person[]> = ref([{id: 0, name: 'John', age: 24}, {id: 1, name: 'Mike', age: 26}])

const registerPerson = (person: Person) => {
	persons.value.push(person)
}

const deletePerson = (id: number) => {
	persons.value = persons.value.filter(p => p.id !== id)
}
</script>

<template>
	<div class="container">
		<!-- emitで子からregisterというイベントが飛んできたらregisterPersonというここで定義している関数を呼ぶという意味 -->
		<PersonPostForm @register="registerPerson"/>
		<div class="list-container">
			<ul>
				<PersonList :persons="persons" @delete="deletePerson"/>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
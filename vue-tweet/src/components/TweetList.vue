<script setup lang="ts">
// 親から子に値を渡すProps
import { defineProps, defineEmits  } from 'vue';

// tweetの型を指定
type Tweet = {
	id: number,
	description: string
}

// Tweetの配列Propsという型を作る
type Props = {
	tweets: Tweet[]
}

// Propsという型でこのTweetListではPropsを受け取る
// propsで受け取る、とは親からもらうこと
defineProps<Props>()

const emit = defineEmits(['delete-tweet'])
const deleteTweet = (id: number) => {
	emit('delete-tweet', id)
}
</script>

<template>
	<li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
  	<span>{{ tweet.description }}</span>
    <button @click="deleteTweet(tweet.id)" class="delete-button">delete</button>
  </li>
</template>

<style scoped>
.tweet-list {
  list-style: none;
  margin-bottom: 12px;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(204, 219, 233);
  padding: 8px 20px;
  width: 300px;
}

.delete-button {
  color: #fff;
  font-weight: bold;
  background-color: #c99a68;
  border-radius: 2px;
  border: none;
  width: 60px;
  height: 22px;
}

.delete-button:hover {
  background-color: #ac783f;
}
</style>
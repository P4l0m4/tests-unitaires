<script setup lang="ts">
import { computed } from 'vue'
import { multiplication } from '@/utils/multiplication'

const props = defineProps<{
  msg: string
  initialNumber: number
}>()

const numberMultiplied = computed(() => {
  return multiplication(props.initialNumber)
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <div>{{ numberMultiplied }}</div>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

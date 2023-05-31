<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header  class="max-h-screen leading-normal">
    <img alt="Vue logo" class="block mx-auto mt-0 mb-8 lg:my-0 lg:ml-0 lg:mr-8" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav class="divide-x divide-solid w-full text-xs text-center mt-8 lg:text-left lg:ml-[-1rem] lg:text-base lg:py-4 lg:px-0 lg:mt-0">
        <RouterLink class='inline-block py-0 px-4 ' active-class="text-textcolor hover:bg-transparent" to="/">Home</RouterLink>
        <RouterLink class='inline-block py-0 px-4 ' active-class="text-textcolor hover:bg-transparent" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>

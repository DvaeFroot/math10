<template>
  <div class="main-wrapper flex flex-col p-0 m-0 bg-gray-100">
    <div class="flex justify-center mt-12">
      <div class="text-8xl font-serif text-gray-600">To The Point</div>
    </div>
    <div class="flex text-gray-600 justify-center align-middle">
      <div class="w-fit">Website by Dave Angelo Jimenez</div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style setup lang="scss">
.main-wrapper {
  height: 100dvh;
}
body {
  margin: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>

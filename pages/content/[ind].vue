<template>
  <div class="flex justify-center bg-gray-100">
    <div class="mt-10">
      <NuxtLink to="/">
        <div class="text-gray-500 mb-4">&lt;- Back to home page</div>
      </NuxtLink>
      <img src="~/public/AMBROSIO_MATH10.png" v-if="$route.params.ind == '1'" />
      <img src="~/public/LOPEZ_MATH10.png" v-if="$route.params.ind == '2'" />
      <img
        src="~/public/VALENZUELA_MATH10.png"
        v-if="$route.params.ind == '3'"
      />
    </div>
  </div>
</template>

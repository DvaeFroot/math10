<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-2 gap-4 mt-10">
      <NuxtLink to="/content/1">
        <div
          class="flex flex-col w-[400px] h-[300px] rounded-lg shadow shadow-gray-600"
        >
          <div
            class="w-full h-[200px] rounded-t-lg bg-local bg-no-repeat bg-top bg-[length:400px] hover:bg-[length:450px] duration-200"
            style="background-image: url(/AMBROSIO_MATH10.png)"
          ></div>
          <div class="w-full h-[100px] rounded-b-lg p-2">
            <div class="text-xl">Breast Cancer</div>
            <div class="text-sm truncate w-full mt-2">
              By Aubrey Jane Ambrosio
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/content/2">
        <div
          class="flex flex-col w-[400px] h-[300px] rounded-lg shadow shadow-gray-600"
        >
          <div
            class="w-full h-[200px] rounded-t-lg bg-local bg-no-repeat bg-top bg-[length:400px] hover:bg-[length:450px] duration-200"
            style="background-image: url(/LOPEZ_MATH10.png)"
          ></div>
          <div class="w-full h-[100px] rounded-b-lg p-2">
            <div class="text-xl">Global Wealth Distribution</div>
            <div class="text-sm truncate w-full mt-2">
              By Cedric Reine Lopez
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/content/3">
        <div
          class="flex flex-col w-[400px] h-[300px] rounded-lg shadow shadow-gray-600"
        >
          <div
            class="w-full h-[200px] rounded-t-lg bg-local bg-no-repeat bg-top bg-[length:400px] hover:bg-[length:450px] duration-200"
            style="background-image: url(/VALENZUELA_MATH10.png)"
          ></div>
          <div class="w-full h-[100px] rounded-b-lg p-2">
            <div class="text-xl">
              Most Spoken Languages/Dialects in the Philippines
            </div>
            <div class="text-sm truncate w-full mt-2">
              By Lance Joecef Valenzuela
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

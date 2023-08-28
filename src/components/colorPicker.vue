<script setup>
import { ref } from 'vue';

defineProps([
    "colors"
])

const color = ref(null)

defineExpose({
  color
});
</script>

<template>
      <fieldset class="flex flex-wrap gap-3 justify-center">    
      <div v-for="color in colors">
        <input
          type="radio"
          name="color"
          class="peer hidden"
          :model="color"
          :value="color.code"
          :id="'Color-' + color.code"
          checked
        />
    
        <label 
        :style="'background-color:' + color.hexCode"
        :for="'Color-' + color.code"
          class="block h-4 w-4 bg-black cursor-pointer rounded-full shadow-sm peer-checked:ring-2 peer-checked:ring-black peer-checked:ring-offset-2"
        >

          <span class="sr-only">{{  color.name }}</span>
        </label>
      </div>
    </fieldset>
  </template>
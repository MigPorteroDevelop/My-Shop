<script setup>
import { ref, computed } from 'vue';

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
      <div v-for="item in colors">
        <input
          type="radio"
          name="color"
          class="peer hidden"
          v-model="color"
          :value="item.code"
          :id="'Color-' + item.code"
          checked
        />
    
        <label 
        :style="'background-color:' + item.hexCode"
        :for="'Color-' + item.code"
          class="block h-4 w-4 bg-black cursor-pointer rounded-full shadow-sm peer-checked:ring-2 peer-checked:ring-black peer-checked:ring-offset-2"
        >

          <span class="sr-only">{{ item.name }}</span>
        </label>
      </div>
    </fieldset>

    {{ color }}
  </template>
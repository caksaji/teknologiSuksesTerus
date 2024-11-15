<template>
  <div class="text-5xl uppercase font-medium md:text-6xl" style="font-family: 'Poppins', sans-serif; word-spacing: .5ch;">
    {{ props.text }}
  </div>
</template>

<script setup>
const props = defineProps({
  text: { type: String, default: null, required: true }
})
</script>

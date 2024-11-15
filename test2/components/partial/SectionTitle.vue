<template>
  <div v-if="props.type === 'line'" class="flex items-center gap-2">
    <div class="flex-shrink-0 h-px w-full max-w-8" :class="[props.color === 'white' ? 'bg-white' : 'bg-gray-900']" />
    <span class="flex-shrink-0">{{ props.text }}</span>
  </div>
  <div v-else class="text-5xl uppercase font-medium md:text-6xl" style="font-family: 'Poppins', sans-serif; word-spacing: .5ch;">
    {{ props.text }}
  </div>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: null },
  text: { type: String, default: null, required: true },
  color: { type: String, default: 'black' }
})
</script>

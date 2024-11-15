<template>
  <SkeletonBlock v-if="props.showSkeleton" :class="['flex-shrink-0 h-9 rounded-xl', skeletonWidth]" />
  <button
    v-else
    v-wave
    class="inline-block flex-shrink-0 relative text-center align-middle whitespace-nowrap no-underline outline-none cursor-pointer transform duration-300 group focus:ring focus:ring-opacity-90 focus:ring-offset-2 active:scale-90"
    :class="{
      'overflow-hidden': props.border,
      'rounded-xl': !props.round,
      'rounded-full': props.round,
      'ring-offset-white': props.color !== 'white',
      'ring-offset-gray-900 focus:ring-gray-200': props.color === 'white',
      'text-gray-900 bg-gray-200 hover:bg-gray-300': props.color === 'white' && !props.border,
      'focus:ring-gray-900': props.color === 'black',
      'text-white bg-gray-900 hover:bg-gray-700': props.color === 'black' && !props.border,
      'focus:ring-prime-700': props.color === 'prime',
      'text-white bg-prime-600 hover:bg-prime-700': props.color === 'prime' && !props.border,
      'border': props.border,
      'text-gray-200 border-gray-200 hover:text-gray-900 focus:text-gray-900': props.color === 'white' && props.border,
      'text-gray-900 border-gray-700 hover:text-white focus:text-white': props.color === 'black' && props.border,
      'text-prime-600 border-prime-600 focus:text-white hover:bg-prime-600 hover:text-white': props.color === 'prime' && props.border
    }"
    style="line-height: 1.5; font-size: calc(1rem - 2px);"
    :style="formatedStyle"
    @click="click"
  >
    <div
      v-if="props.border"
      class="absolute -bottom-full left-0 h-full w-full transform duration-300 group-focus:-translate-y-full group-hover:-translate-y-full"
      :class="{
        'bg-gray-200': props.color === 'white',
        'bg-gray-900': props.color === 'black',
        'bg-prime-600': props.color === 'prime'
      }"
    />
    <div class="flex relative items-center justify-center w-full space-x-2">
      <span v-if="!props.iconOnly"><slot /></span>
      <slot name="icon" />
    </div>
  </button>
</template>

<script setup>
import SkeletonBlock from '~/components/partial/SkeletonBlock'

const props = defineProps({
  showSkeleton: { type: Boolean, default: false },
  skeletonWidth: { type: String, default: null },
  size: { type: String, default: null }, // null, sm, lg
  round: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
  color: { type: String, default: null }, // white, black, prime
  textPrimeteal: { type: Boolean, default: false },
  border: { type: Boolean, default: false },
  iconOnly: { type: Boolean, default: false }
})

const fragmentedRem = '(1rem / 4)'

const formatedStyle = computed(() => {
  let formattedPadding = null
  if (props.size === 'sm') {
    if ((props.border || (props.color === 'white' || props.color === 'black')) && !props.iconOnly) {
      formattedPadding = `calc((${fragmentedRem} * 1) - 1px) calc((${fragmentedRem} * 3) - 1px)`
    }
    else if ((props.border || (props.color === 'white' || props.color === 'black')) && props.iconOnly) {
      formattedPadding = `calc((${fragmentedRem} * 1) - 1px)`
    }
    else if (!props.border && (props.color !== 'white' && props.color !== 'black') && props.iconOnly) {
      formattedPadding = `calc(${fragmentedRem})`
    }
    else {
      formattedPadding = `calc(${fragmentedRem} * 1) calc(${fragmentedRem} * 3)`
    }
  }
  if (props.size === 'lg') {
    if (props.border && !props.iconOnly) {
      formattedPadding = `calc((${fragmentedRem} * 6) - 1px) calc((${fragmentedRem} * 10) - 1px)`
    }
    else if (props.border && props.iconOnly) {
      formattedPadding = `calc((${fragmentedRem} * 6) - 1px)`
    }
    else if (!props.border && props.iconOnly) {
      formattedPadding = `calc(${fragmentedRem} * 6)`
    }
    else {
      formattedPadding = `calc(${fragmentedRem} * 6) calc(${fragmentedRem} * 10)`
    }
  }
  else {
    if (props.border && !props.iconOnly) {
      formattedPadding = `calc((${fragmentedRem} * 3) - 1px) calc((${fragmentedRem} * 6) - 1px)`
    }
    else if (!props.border && props.iconOnly) {
      formattedPadding = `calc(${fragmentedRem} * 3)`
    }
    else if (props.border && props.iconOnly) {
      formattedPadding = `calc((${fragmentedRem} * 3) - 1px)`
    }
    else {
      formattedPadding = `calc(${fragmentedRem} * 3) calc(${fragmentedRem} * 6)`
    }
  }
  return { padding: formattedPadding }
})

const emit = defineEmits(['click'])

const click = () => {
  emit('click')
}
</script>

<style lang="less">
  .click-effect { @apply transform duration-300 active:scale-90; }

  a, .link { @apply rounded text-prime-600 underline outline-0 ring-prime-600 ring-opacity-90 ring-offset-2 focus:ring; }
</style>

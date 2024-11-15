<template>
  <div class="w-full" :class="{ 'relative': props.icon }">
    <div class="flex items-end justify-between">
      <label v-if="props.label && !props.imitation" :for="`inputText${id}`">{{ props.label }}</label>
      <div v-if="maxlength" class="text-gray-400">{{ value ? value.length : 0 }}/{{ maxlength }}</div>
    </div>
    <span v-if="props.label && props.imitation">{{ props.label }}</span>
    <template v-if="props.type === 'text' || props.type === 'email' || props.type === 'password'">
      <div
        v-if="props.icon && props.iconPlacement === 'inside'"
        class="flex items-center absolute h-10 px-4"
        :class="{
          'mt-1': props.label,
          '-mt-1': !props.label,
          'right-0': props.icon === 'right',
          'left-0': props.icon === 'left'
        }"
      >
        <slot name="icon" />
      </div>
      <div :class="{ 'flex items-center w-full space-x-2': props.icon && props.iconPlacement === 'outside' }">
        <slot v-if="props.icon === 'left' && props.iconPlacement === 'outside'" name="icon" />
        <input
          v-if="!props.imitation"
          :id="`inputText${id}`"
          :ref="`inputText${id}`"
          v-model="value"
          :name="`inputText${id}`"
          :type="props.type"
          :inputmode="props.inputmode"
          :disabled="props.disabled"
          :placeholder="props.placeholder"
          :maxlength="props.maxlength > 0 ? props.maxlength : 200"
          class="duration-300"
          :class="[inputTextKindClass, props.inputClass, 'outline-0']"
          :style="[padding]"
          @focus="focus"
          @input="input($event.target.value)"
          @blur="blur"
        >
        <div
          v-if="props.imitation"
          tabindex="0"
          class="select-none"
          :class="[inputTextKindClass, props.inputClass, 'outline-0', { 'cursor-text': !props.disabled }]"
          :style="[padding, { minHeight: `calc(2px + (${fragmentedRem} * 2) + 1.5rem + 1.59px)` }]"
          @focus="focus"
          @click="click"
          @keydown.enter="click"
          @keydown.space="click"
          @blur="blur"
        >
          <slot v-if="props.imitationValue" name="imitationValue" />
          <div v-else class="text-gray-400 whitespace-nowrap overflow-hidden">
            {{ props.placeholder }}
          </div>
        </div>
        <slot v-if="props.icon === 'right' && props.iconPlacement === 'outside'" name="icon" />
      </div>
    </template>
    <textarea
      v-else-if="props.type === 'textarea'"
      :id="`inputText${id}`"
      :ref="`inputText${id}`"
      v-model="value"
      :name="`inputText${id}`"
      :disabled="props.disabled"
      :rows="props.rows"
      :placeholder="props.placeholder"
      class="resize-none duration-300"
      :class="[inputTextKindClass, props.inputClass, 'outline-0']"
      :style="[padding, { minHeight: `calc((1.357rem * ${rows}) + 4px)` }]"
      @focus="focus"
      @input="input($event.target.value)"
      @blur="blur"
    />
    <div
      class="bottom-line relative rounded-full mx-auto duration-300"
      :class="{
        'bg-prime-600': !props.error,
        'bg-red-500': props.error,
        'w-0': !onFocus,
        'focus': onFocus
      }"
    />
    <SpErrorText v-if="props.error" :text="props.error" />
  </div>
</template>

<script setup>
import SpErrorText from '~/components/partial/SpErrorText'

const props = defineProps({
  imitation: { type: Boolean, default: false },
  imitationValue: { type: Boolean, default: false },
  label: { type: String, default: null },
  type: { type: String, default: 'text' }, // text, email, password, textarea
  inputmode: { type: String, default: 'text' }, // text, email, tel
  placeholder: { type: String, default: null },
  maxlength: { type: Number, default: 0 },
  error: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  inputClass: { type: String, default: null },
  rows: { type: String, default: '3' },
  icon: { type: String, default: null }, // right, left
  iconPlacement: { type: String, default: 'inside' } // inside, outside
})

const value = defineModel()
const id = useId()
const fragmentedRem = '(1rem / 4)'
const onFocus = ref(false)

const inputTextKindClass = computed(() => {
  return {
    'mt-1': props.label,
    'w-full border rounded-xl placeholder-gray-400': props.type === 'text' || props.type === 'email' || props.type === 'password' || props.type === 'textarea',
    'border-gray-300': !props.error,
    'border-red-300': props.error,
    'bg-white': ((props.type === 'text' || props.type === 'email' || props.type === 'password' || props.type === 'textarea') && !props.disabled),
    'bg-gray-300 cursor-not-allowed select-none': props.disabled,
    'rounded-full': props.round
  }
})
const padding = computed(() => {
  const py = `calc((${fragmentedRem} * 3) - 2px)`
  const px = `calc((${fragmentedRem} * 6) - 1px)`
  return {
    paddingTop: py,
    paddingBottom: py,
    paddingRight: props.icon === 'right' && props.iconPlacement === 'inside' ? `calc((${fragmentedRem} * 14) - 1px)` : px,
    paddingLeft: props.icon === 'left' && props.iconPlacement === 'inside' ? `calc((${fragmentedRem} * 14) - 1px)` : px
  }
})

const emit = defineEmits(['click', 'focus', 'input', 'blur'])

const click = () => {
  emit('click')
  onFocus.value = true
}
const focus = () => {
  emit('focus')
  onFocus.value = true
}
const input = (data) => {
  emit('input', data)
  onFocus.value = true
}
const blur = () => {
  emit('blur')
  onFocus.value = false
}
</script>

<style lang="less">
  .bottom-line {
    --h: 3px;
    height: var(--h);
    margin-top: calc(var(--h) * -1);
    &.focus {
      width: calc(100% - (.5rem * 2));
    }
    &.textarea { margin-top: calc(-.4rem - var(--h)); }
  }
</style>

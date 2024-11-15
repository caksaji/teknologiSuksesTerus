<template>
  <div class="h-96 w-96 p-2 border-8 border-dotted rounded-full" :class="[`border-${color}`]">
    <div class="h-full w-full p-2 border-8 border-dotted rounded-full animate-spin duration-1000" :class="[`border-${color}`]">
      <div class="h-full w-full p-2 border-8 border-dotted rounded-full animate-spin duration-1000" :class="[`border-${color}`]">
        <div class="h-full w-full p-2 border-8 border-dotted rounded-full animate-spin duration-1000" :class="[`border-${color}`]">
          <div class="h-full w-full p-2 border-8 border-dotted rounded-full animate-spin duration-1000" :class="[`border-${color}`]">
            <div class="h-full w-full p-2 border-8 border-dotted rounded-full animate-spin duration-1000" :class="[`border-${color}`]">
              <div class="h-full w-full p-2 border-8 border-dotted rounded-full animate-spin duration-1000" :class="[`border-${color}`]">
                <div class="h-full w-full p-2 border-8 border-dotted rounded-full animate-spin duration-1000" :class="[`border-${color}`]">
                  <div class="h-full w-full p-2 border-8 border-dotted rounded-full animate-spin duration-1000" :class="[`border-${color}`]">
                    <div class="h-full w-full p-2 border-8 border-dotted rounded-full animate-spin duration-1000" :class="[`border-${color}`]">
                      <div class="h-full w-full p-2 border-8 border-dotted rounded-full animate-spin duration-1000" :class="[`border-${color}`]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  color: { type: String, default: 'gray-500', required: true }
})
</script>

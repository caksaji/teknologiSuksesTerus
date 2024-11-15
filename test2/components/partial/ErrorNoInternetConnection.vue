<template>
  <div class="flex flex-col items-center justify-center fixed top-0 left-0 h-screen w-screen transform duration-300 bg-cover bg-center bg-no-repeat" :class="{ 'translate-y-full': isOnline }" style="z-index: 13;" :style="{ backgroundImage: 'url(/img/illustration/hero.jpeg)' }">
    <div class="fixed top-0 h-screen w-screen bg-white/50" />
    <div class="relative max-w-sm space-y-8 px-2">
      <div class="font-bold text-center" style="font-size: 4rem; line-height: 1;">
        Internet Terputus
      </div>
      <div>
        Ups, sepertinya koneksi internet anda terputus. Coba periksa koneksi internet anda (mobile data / wifi).
        <div class="flex space-x-1 pt-2">
          <div class="flex-shrink-0 pt-0.5">
            Lalu
          </div>
          <SpButton color="prime" size="sm" :loading="loading" :disabled="loading" @click="checkConnection">
            Muat ulang
          </SpButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOnline } from '@vueuse/core'

import SpButton from '~/components/partial/SpButton'

const isOnline = useOnline()
const loading = ref(false)

const checkConnection = () => {
  loading.value = true
  setTimeout(() => loading.value = false, 5000)
}
</script>

<template>
  <div v-if="error.statusCode === 404" class="flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: 'url(/img/illustration/hero.jpeg)' }">
    <div class="fixed top-0 h-screen w-screen bg-white/50" />
    <div class="relative max-w-sm px-4">
      <div class="font-bold text-center" style="font-size: 4rem;">
        {{ error.statusCode }}
      </div>
      <div>
        Ups, sepertinya kamu terlalu giat dan akhirnya tersesat.
        <div class="space-y-1 pt-2">
          <div v-for="(step, index) in resolveStep404" :key="index" class="flex space-x-2">
            <div class="flex-shrink-0 h-2 w-2 rounded-full mt-2.5 bg-gray-900" />
            <div :class="{ 'flex space-x-1': index === resolveStep404.length - 1 }">
              <div class="flex-shrink-0 pt-0.5">
                {{ step }}
              </div>
              <SpButton v-if="index === resolveStep404.length - 1" color="prime" size="sm" @click="goToHome">
                Kembali ke halaman awal
              </SpButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="error.statusCode === 500" class="flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: 'url(/img/illustration/hero.jpeg)' }">
    <div class="fixed top-0 h-screen w-screen bg-white/50" />
    <div class="relative max-w-sm px-4">
      <div class="font-bold text-center" style="font-size: 4rem;">
        {{ error.statusCode }}
      </div>
      <div>
        Ups, sepertinya terjadi kesalahan pada server.
        <div class="space-y-1 pt-2">
          <div v-for="(step, index) in resolveStep500" :key="index" class="flex space-x-2">
            <div class="flex-shrink-0 h-2 w-2 rounded-full mt-2.5 bg-gray-900" />
            <div class="flex-shrink-0 pt-0.5">
              {{ step }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>{{ error.statusCode }}</h1>
    <NuxtLink to="/">
      Kembali ke halaman awal
    </NuxtLink>
  </div>
</template>

<script setup>
import SpButton from '~/components/partial/SpButton'

defineProps(['error'])

const resolveStep404 = ['Tetap tenang', 'Tarik nafas', 'Minum air', 'Istirahat sejenak', '']
const resolveStep500 = ['Tetap tenang', 'Tarik nafas', 'Minum air', 'Istirahat sejenak', 'Lalu hubungi admin']

const goToHome = () => navigateTo('/', { replace: true })
</script>

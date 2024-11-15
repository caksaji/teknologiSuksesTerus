<template>
  <div class="flex justify-center fixed bottom-4 left-0 w-full z-10 lg:w-auto lg:top-4 lg:bottom-auto lg:left-4">
    <div class="border border-white rounded-full bg-gray-900 text-white">
      <div class="flex p-1 items-center justify-between lg:flex-col">
        <div
          v-for="(m, i) in menu"
          :key="i"
          v-wave
          tabindex="0"
          class="flex flex-shrink-0 items-center justify-center p-4 rounded-full outline-0 ring-offset-2 ring-green-500 ring-offset-gray-900 cursor-pointer duration-300 focus:ring lg:flex-col click-effect"
          :class="{ 'bg-green-500': route.path === m.link, 'hover:bg-green-500/25 focus:bg-green-500/25': route.path !== m.link }"
          @click="navigateTo(m.link)"
          @keydown.enter="navigateTo(m.link)"
        >
          <IconSvg :name="m.icon" class="h-6 w-6" />
          <div class="overflow-hidden duration-300 whitespace-nowrap lg:hidden" :class="{ 'w-20 pl-4': route.path === m.link, 'w-0 pl-0': route.path !== m.link }">
            {{ m.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconSvg from '~/components/partial/IconSvg'

const route = useRoute()
const menu = [
  { name: 'Beranda', link: '/', icon: 'home' },
  { name: 'Layanan', link: '/layanan', icon: 'view-grid' },
  { name: 'Tentang', link: '/tentang', icon: 'question-mark' }
]
</script>

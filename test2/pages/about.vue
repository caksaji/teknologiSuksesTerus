<template>
  <div>
    <div class="section about pt-4 bg-gray-900 text-white">
      <div class="container space-y-24 pb-24">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-12">
          <div class="col-span-1">
            <div data-aos="fade-up" class="relative h-full pt-48 pb-12 px-4 rounded-xl overflow-hidden bg-prime-500">
              <div class="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat mix-blend-color-burn" :style="{ backgroundImage: 'url(/img/illustration/hero.jpeg)' }" />
              <SectionTitle data-aos="fade-up" data-aos-delay="150" text="Komitmen kami untuk solusi" class="max-w-4xl" />
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex flex-col justify-end h-full">
              <div data-aos="fade-right" data-aos-delay="400" class="flex items-center gap-2">
                <div class="flex-shrink-0 h-px w-full max-w-8 bg-white" />
                <span class="flex-shrink-0">Kami adalah spesialis</span>
              </div>
              <SectionTitle data-aos="fade-up" data-aos-delay="550" text="Data Science dan Pengembangan Produk AI" />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-8 justify-between pt-24 border-t border-dashed border-gray-600 sm:flex-row sm:items-end">
          <div class="hidden -space-x-20 sm:flex">
            <div data-aos="fade-up" class="flex-shrink-0 border rounded-full border-white" style="height: calc(10rem - 2px); width: calc(10rem - 2px);" />
            <div class="flex flex-col flex-shrink-0 gap-3 justify-center h-40 w-60 rounded-full overflow-hidden" style="z-index: 1;">
              <div v-for="i in 13" :key="i" data-aos="fade-right" :data-aos-delay="50 * i" class="flex-shrink-0 h-px w-full bg-gray-400" />
            </div>
            <div data-aos="fade-up" data-aos-delay="150" class="flex-shrink-0 h-40 w-40 rounded-full bg-white" />
          </div>
          <div class="max-w-xs space-y-4 text-xl font-medium">
            <div class="flex gap-2">
              <SpButton
                v-if="contactStore.all?.linkedin"
                data-aos="fade-up"
                color="white"
                icon-only
                border
                round
                @click="openLink(contactStore.all.linkedin)"
              >
                <template #icon>
                  <IconSvg name="linkedin" class="h-5 w-5" />
                </template>
              </SpButton>
              <SpButton
                v-if="contactStore.all?.x"
                data-aos="fade-up"
                data-aos-delay="150"
                color="white"
                icon-only
                border
                round
                @click="openLink(contactStore.all.x)"
              >
                <template #icon>
                  <IconSvg name="x" class="h-5 w-5" />
                </template>
              </SpButton>
              <SpButton
                v-if="contactStore.all?.instagram"
                data-aos="fade-up"
                data-aos-delay="300"
                color="white"
                icon-only
                border
                round
                @click="openLink(contactStore.all.instagram)"
              >
                <template #icon>
                  <IconSvg name="instagram" class="h-5 w-5" />
                </template>
              </SpButton>
            </div>
            <div data-aos="fade-right" data-aos-delay="600">
              Kami menciptakan produk berdasarkan data science dan diperkuat dengan machine learning untuk memberikan solusi atas masalah yang ada
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section member bg-gradient-to-br from-white via-prime-200 to-gray-100">
      <div class="container relative py-24">
        <OrnamentDotCircle color="gray-900" class="absolute top-12 right-0 transform translate-x-1/3 opacity-10" />
        <div class="relative">
          <div data-aos="fade-right" class="flex items-center gap-2">
            <div class="flex-shrink-0 h-px w-full max-w-8 bg-gray-900" />
            <span class="flex-shrink-0">Mari berkenalan dengan</span>
          </div>
          <SectionTitle data-aos="fade-up" data-aos-delay="300" text="Tim Kami" class="max-w-6xl"/>
          <div class="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="(m, i) in member" :key="i" data-aos="fade-up" :data-aos-delay="(100 * i) + 450" class="col-span-1">
              <div class="pt-4 pl-4">
                <div class="flex flex-col bg-gradient-to-br from-prime-600 via-prime-500 to-prime-400 text-white">
                  <div class="aspect-square transform -translate-y-4 -translate-x-4 bg-cover bg-none bg-center shadow-lg" :style="{ backgroundImage: `url(/img/member/${m.photo})` }" />
                  <div class="p-4">
                    <div class="text-3xl uppercase font-medium md:text-2xl" style="word-spacing: .5ch;">
                      {{ m.name }}
                    </div>
                    <div class="text-xl italic">
                      - {{ m.position }}
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
import SectionTitle from '~/components/partial/SectionTitle'
import SpButton from '~/components/partial/SpButton'
import IconSvg from '~/components/partial/IconSvg'
import OrnamentDotCircle from '~/components/partial/OrnamentDotCircle'

definePageMeta({ path: '/tentang' })

useHead({ title: 'Tentang kami' })

const contactStore = useContactStore()
const member = [
  { name: 'Erfian Yahya', position: 'CEO', photo: '1.jpg' },
  { name: 'Sarah L. Virta', position: 'CFO', photo: '2.jpg' },
  { name: 'Elvin Hutapea', position: 'CTO', photo: '3.jpg' },
  { name: 'Sugi', position: 'Project Manager', photo: '4.jpg' }
]

onMounted(() => {
  if (!contactStore.all) {
    contactStore.getAll()
  }
})

const openLink = (link) => window.open(link)
</script>

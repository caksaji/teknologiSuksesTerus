<template>
  <div>
    <div data-aos="fade-up" class="flex justify-center fixed bottom-4 left-0 w-full z-10 lg:w-auto lg:top-4 lg:bottom-auto lg:left-4">
      <div class="border border-white rounded-full bg-gray-900 text-white">
        <div class="flex p-1 items-center justify-between lg:flex-col">
          <div
            v-for="(m, i) in menu"
            :key="i"
            v-wave
            tabindex="0"
            class="flex flex-shrink-0 items-center justify-center p-4 rounded-full outline-0 ring-offset-2 ring-green-500 ring-offset-gray-900 cursor-pointer duration-300 focus:ring lg:flex-col click-effect"
            :class="{ 'bg-green-500': route.path === m.link, 'hover:bg-green-500/25 focus:bg-green-500/25': route.path !== m.link }"
            @click="clickNavbar(m.link)"
            @keydown.enter="clickNavbar(m.link)"
          >
            <IconSvg :name="m.icon" class="h-6 w-6" />
            <div class="overflow-hidden duration-300 whitespace-nowrap lg:hidden" :class="{ 'w-20 pl-4': route.path === m.link, 'w-0 pl-0': route.path !== m.link }">
              {{ m.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="sectionHero" class="section hero pt-4 bg-gray-900 text-white">
      <div class="container">
        <div data-aos="fade-up" class="relative pt-48 pb-12 px-4 rounded-xl overflow-hidden bg-prime-500">
          <div class="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat mix-blend-color-burn" :style="{ backgroundImage: 'url(/img/illustration/hero.jpeg)' }" />
          <div data-aos="fade-up" data-aos-delay="150" class="relative w-52 text-xl font-medium">
            Sederhanakan pengelolaan bisnis anda dengan aplikasi ERP terintegrasi
          </div>
        </div>
      </div>
      <div class="container pt-12">
        <div class="flex flex-col gap-8 items-end justify-between sm:flex-row">
          <div>
            <SectionTitle data-aos="fade-right" data-aos-delay="400" text="Singkatnya, anda bisa" type="line" color="white" />
            <SectionTitle data-aos="fade-up" data-aos-delay="550" text="Memantau Keuntungan dan Kesediaan Bisnis Anda Secara Real-Time" class="max-w-4xl" />
          </div>
          <div data-aos="fade-right" data-aos-delay="850" class="flex">
            <SpButton color="white" size="lg" border round @click="sectionPackage.scrollIntoView()">
              Cari tahu
            </SpButton>
            <SpButton
              tabindex="-1"
              color="white"
              size="lg"
              icon-only
              round
              @click="sectionPackage.scrollIntoView()"
            >
              <template #icon>
                <IconSvg name="arrow-right" class="h-5 w-5" />
              </template>
            </SpButton>
          </div>
        </div>
      </div>
    </div>
    <div ref="sectionAbout" class="section about bg-gray-900 text-white">
      <div class="container py-24">
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
              Kami menciptakan produk berdasarkan data science untuk membantu anda menemukan solusi atas masalah yang ada.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="sectionPackage" class="section package bg-gradient-to-br from-white via-prime-200 to-gray-100">
      <div class="container relative py-24">
        <OrnamentDotCircle color="gray-900" class="absolute top-12 right-0 transform translate-x-1/3 opacity-10" />
        <div class="relative">
          <SectionTitle data-aos="fade-right" text="Kami menawarkan" type="line" />
          <SectionTitle data-aos="fade-up" data-aos-delay="300" text="Solusi yang dapat Anda Pilih Sesuai Kebutuhan" class="max-w-6xl"/>
          <div data-aos="fade-up" class="flex gap-4 flex-wrap justify-center w-full pt-12 md:flex-nowrap sm:gap-0">
            <div v-for="(p, i) in packageStore.all" :key="i" class="w-full transform duration-300 group sm:w-1/2 md:w-1/3 md:hover:w-2/3">
              <div class="flex gap-4 flex-col justify-between h-full w-full pt-12 pb-4 px-4 border border-gray-900 rounded-xl text-white" :class="{ 'bg-gray-500': i === 0, 'bg-gray-900': i === 1, 'bg-prime-700': i === 2, 'bg-prime-500': i === 3 }">
                <div class="space-y-4">
                  <div class="text-3xl uppercase font-medium md:text-xl" style="word-spacing: .5ch;">
                    {{ p.name }}
                  </div>
                  <div class="relative h-32 sm:h-36">
                    <div class="absolute top-0 left-0 transform duration-300 origin-top-left group-hover:scale-100 md:scale-0">
                      <div class="text-lg font-bold">
                        <span class="py-0.5 px-2 rounded-full text-gray-900 bg-white">
                          Keuntungan:
                        </span>
                      </div>
                      <div class="pt-2 text-lg">
                        <div v-for="(it, ix) in p.pros" :key="ix" class="flex w-full space-x-2">
                          <div class="h-2 w-2 rounded-full mt-2.5 bg-white" />
                          <div>
                            {{ it }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      Berlangganan
                    </div>
                    <span class="text-5xl font-semibold md:text-4xl lg:text-5xl">{{ p.price }}</span><span class="text-xl md:hidden lg:inline">/bulan</span>
                    <div class="hidden md:block lg:hidden">
                      per bulan
                    </div>
                  </div>
                </div>
                <div class="flex justify-end w-full">
                  <SpButton color="white" border round @click="$startDiscuss(s.name)">
                    Cari tahu
                    <template #icon>
                      <IconSvg name="arrow-right" class="h-5 w-5" />
                    </template>
                  </SpButton>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-8 justify-between pt-12 sm:flex-row sm:items-end">
            <div data-aos="fade-up" class="max-w-xs text-xl">
              Dengan pengalaman melalui banyak studi kasus, kami percaya dapat memberikan solusi tebaik atas masalah anda
            </div>
            <div class="flex w-full justify-end">
              <div class="space-y-2">
                <div data-aos="fade-up" data-aos-delay="300" class="text-xl">
                  Butuh diskusi?
                </div>
                <div data-aos="fade-right" data-aos-delay="600" class="flex">
                  <div class="flex-shrink-0 relative">
                    <div class="absolute top-0 left-0 h-full w-full border-2 border-prime-600 rounded-full blur-sm animate-ping" />
                    <SpButton color="prime" size="lg" border round @click="$startDiscuss">
                      Hubungi kami
                    </SpButton>
                  </div>
                  <SpButton
                    tabindex="-1"
                    color="prime"
                    size="lg"
                    icon-only
                    round
                    @click="$startDiscuss"
                  >
                    <template #icon>
                      <IconSvg name="arrow-right" class="h-5 w-5" />
                    </template>
                  </SpButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section benefit bg-gray-900 text-white">
      <div class="container relative py-24">
        <div class="absolute top-12 -left-1/4 h-[57rem] w-[57rem] border-4 border-prime-600 rounded-full opacity-50 blur-sm sm:top-20 sm:-left-1/2 md:-left-1/3" />
        <div class="relative">
          <SectionTitle data-aos="fade-right" text="Tapi kenapa?" type="line" color="white" />
          <SectionTitle data-aos="fade-up" data-aos-delay="300" text="Inilah Manfaat Implementasi AI dengan Usaha Anda" class="max-w-6xl"/>
          <div class="pt-12">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col sm:grid-cols-none lg:grid-flow-row lg:grid-cols-2 lg:grid-rows-none">
              <div
                v-for="(b, i) in benefitStore.all"
                :key="i"
                data-aos="fade-up"
                :data-aos-delay="(100 * i) + 450"
                class="col-span-1"
                :class="{
                  'sm:row-span-2 lg:col-span-2': i === 0,
                  'sm:row-span-1 lg:col-span-1': i === 1,
                  'sm:row-span-1 lg:col-span-1': i === 2
                }"
              >
                <div tabindex="0" class="relative h-full py-12 px-4 border border-white/25 rounded-xl outline-0 overflow-hidden transform duration-300 group backdrop-filter backdrop-blur hover:scale-105 focus:scale-105 sm:px-8 md:px-12">
                  <div class="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-white to-prime-700 opacity-20 backdrop-filter backdrop-blur" />
                  <div class="absolute top-0 left-0 h-full w-full transform rotate-90 duration-300 origin-top-left bg-gradient-to-br from-prime-400 to-prime-800 group-hover:rotate-0 group-focus:rotate-0" />
                  <div class="relative">
                    <div class="text-3xl uppercase font-medium md:text-2xl" style="word-spacing: .5ch;">
                      {{ b.name }}
                    </div>
                    <div class="flex flex-col gap-4 justify-between h-full lg:flex-row">
                      <div class="w-full pt-4" :class="{ 'lg:w-1/3': i === 0 }">
                        {{ b.description }}
                      </div>
                      <div v-if="i === 0" class="hidden sm:block flex-shrink-0 aspect-square bg-contain bg-bottom bg-no-repeat lg:max-h-60 lg:w-1/2 lg:aspect-video lg:bg-right" :style="{ backgroundImage: 'url(/img/illustration/automation.svg)' }" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section testimonial bg-gradient-to-br from-white via-gray-400 to-gray-100">
      <div class="container py-24">
        <SectionTitle data-aos="fade-right" text="Jangan ragu untuk memilih kami" type="line" />
        <SectionTitle data-aos="fade-up" data-aos-delay="300" text="Buktikan Sendiri Apa yang Client Kami Katakan" class="max-w-6xl"/>
        <div class="flex flex-wrap items-start justify-center pt-12 -m-2">
          <div v-for="(t, i) in testimonialStore.all" :key="i" data-aos="fade-up" :data-aos-delay="(100 * i) + 450" class="flex-shrink-0 h-full w-full p-2 sm:w-1/2 md:w-1/3">
            <div tabindex="0" class="flex flex-col justify-between h-full py-12 px-4 rounded-xl outline-0 bg-gray-200 duration-300 hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg lg:px-8 xl:px-12">
              <div>
                <div class="flex gap-4 items-start justify-between">
                  <div class="flex-shrink-0 h-16 aspect-square rounded-full bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(/img/testimonial/${t.photo})` }" />
                  <div class="flex-shrink-0 p-4 border border-gray-700 rounded-full bg-white">
                    <div class="h-8 w-24 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(/img/testimonial/${t.company})` }" />
                  </div>
                </div>
                <div class="pt-12">
                  <div class="flex transform scale-75 origin-top-left">
                    <div v-for="i in 2" :key="2" class="flex-shrink-0 h-0 w-0" style="border-width: 3rem 1rem 0 1rem; border-style: solid; border-color: #60a5fa transparent transparent transparent; transform: skewX(calc(45deg / -2));" />
                  </div>
                </div>
                <div class="text-3xl font-medium md:text-2xl" style="word-spacing: .5ch;">
                  {{ t.said }}
                </div>
              </div>
              <div class="pt-12">
                <div class="h-1 w-24 rounded-full bg-gray-400" />
                <div class="pt-2 text-xl font-medium">
                  {{ t.name }}
                </div>
                <div class="pt-1">
                  {{ t.role }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="sectionContact" class="section contact bg-gradient-to-tr from-prime-600 via-prime-800 to-prime-600 text-white text-center">
      <div class="container space-y-4 py-24">
        <div>
          Butuh diskusi lebih lanjut?
        </div>
        <SectionTitle text="Mari Diskusikan Kebutuhan Anda" />
        <div class="flex justify-center">
          <div class="relative">
            <div class="absolute top-0 left-0 h-full w-full border-2 border-white rounded-full blur-sm animate-ping" />
            <SpButton
              color="white"
              size="lg"
              border
              round
              class="uppercase"
              @click="$startDiscuss"
             >
              Sekarang
            </SpButton>
          </div>
        </div>
        <div class="pt-12">
          <div class="flex gap-4 justify-center pt-12 border-t border-white/50">
            <SpButton
              v-if="contactStore.all?.linkedin"
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

const contactStore = useContactStore()
const packageStore = usePackageStore()
const benefitStore = useBenefitStore()
const testimonialStore = useTestimonialStore()
const sectionHero = ref()
const sectionAbout = ref()
const sectionPackage = ref()
const sectionContact = ref()
const route = useRoute()
const menu = [
  { name: 'Beranda', link: 'sectionHero', icon: 'home' },
  { name: 'Tentang', link: 'sectionAbout', icon: 'question-mark' },
  { name: 'Layanan', link: 'sectionPackage', icon: 'view-grid' },
  { name: 'Kontak', link: 'sectionContact', icon: 'phone' }
]

onMounted(() => {
  if (!contactStore.all) {
    contactStore.getAll()
  }
  if (packageStore.all.length < 1) {
    packageStore.getAll()
  }
  if (benefitStore.all.length < 1) {
    benefitStore.getAll()
  }
  if (testimonialStore.all.length < 1) {
    testimonialStore.getAll()
  }
})

const clickNavbar = (link) => {
  if (link === 'login') {
    alert('Login & register')
  }
  else {
    const index = menu.findIndex(i => i.link === link)
    if (index === 0) {
      sectionHero.value.scrollIntoView()
    }
    else if (index === 1) {
      sectionAbout.value.scrollIntoView()
    }
    else if (index === 2) {
      sectionPackage.value.scrollIntoView()
    }
    else if (index === 3) {
      sectionContact.value.scrollIntoView()
    }
  }
}
const openLink = (link) => window.open(link)
</script>

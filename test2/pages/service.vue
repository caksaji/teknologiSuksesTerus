<template>
  <div>
    <div class="section case bg-gradient-to-br from-gray-800 via-prime-950 to-gray-900 text-white">
      <div class="container py-24">
        <div class="relative">
          <div data-aos="fade-right" class="flex items-center gap-2">
            <div class="flex-shrink-0 h-px w-full max-w-8 bg-white" />
            <span class="flex-shrink-0">Sebelum melanjutkan,</span>
          </div>
          <SectionTitle data-aos="fade-up" data-aos-delay="300" text="Pernahkah Terpikirkan ketika..."  class="max-w-6xl"/>
          <div class="pt-12 space-y-8">
            <div class="flex flex-wrap items-start justify-center pt-12 -m-2">
              <div v-for="(ps, i) in problemSolving" :key="i" data-aos="fade-up" :data-aos-delay="(100 * i) + 550" class="flex-shrink-0 h-full w-full p-2 md:w-1/2 lg:w-1/3">
                <div tabindex="0" class="flex flex-col justify-between h-full py-12 px-4 border border-white/10 rounded-xl outline-0 bg-gray-800 duration-300 hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg lg:px-8 xl:px-12">
                  <div class="flex transform scale-75 origin-top-left">
                    <div v-for="i in 2" :key="2" class="flex-shrink-0 h-0 w-0" style="border-width: 3rem 1rem 0 1rem; border-style: solid; border-color: #60a5fa transparent transparent transparent; transform: skewX(calc(45deg / -2));" />
                  </div>
                  <div class="text-3xl font-medium md:text-2xl" style="word-spacing: .5ch;">
                    {{ ps.p }}
                  </div>
                  <div class="pt-12 text-xl">
                    {{ ps.s }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section reason bg-gradient-to-br from-white via-prime-200 to-gray-100">
      <div class="container relative py-24">
        <OrnamentDotCircle color="gray-900" class="absolute top-12 right-0 transform translate-x-1/3 opacity-10" />
        <div class="relative">
          <div data-aos="fade-right" class="flex items-center gap-2">
            <div class="flex-shrink-0 h-px w-full max-w-8 bg-gray-900" />
            <span class="flex-shrink-0">Kini mulai banyak hal berkaitan dengan AI</span>
          </div>
          <SectionTitle data-aos="fade-up" data-aos-delay="300" text="AI Merupakan Sekumpulan Data yang Diolah di Balik Layar sebagai Alat Bantu untuk Memperlancar Banyak Kegiatan"  class="max-w-6xl"/>
          <div data-aos="fade-up" class="max-w-6xl pt-12 text-xl">
            Dengan menerapkan AI pada bisnis dan kegiatan anda, diharapkan dapat meningkatkan efisisiensi dan akurasi kegiatan dalam bisnis mulai perencanaan, operasional, pencegahan masalah, hingga pengambilan keputusan dengan biaya yang lebih hemat.
          </div>
        </div>
      </div>
    </div>
    <div class="section interested bg-gray-900 text-white text-center">
      <div class="container space-y-4 py-24">
        <SectionTitle text="Tertarik dengan Implementasi AI dalam Bisnis?" />
        <SectionTitle text="Anda di Tempat yang Tepat" />
        <div class="flex justify-center">
          <div class="relative">
            <div class="absolute top-0 left-0 h-full w-full border-2 border-white rounded-full blur-sm animate-ping" />
            <SpButton color="white" size="lg" border round @click="sectionService.scrollIntoView()">
              Lihat layanan
            </SpButton>
          </div>
        </div>
      </div>
    </div>
    <div ref="sectionService" class="section service overflow-hidden">
      <div class="container relative">
        <div class="absolute top-12 -left-1/4 h-[57rem] w-[57rem] border-4 border-prime-600 rounded-full opacity-50 blur-sm sm:top-20 sm:-left-1/2 md:-left-1/3" />
      </div>
      <div v-for="(s, i) in serviceStore.all" :key="i" class="bg-gradient-to-br" :class="[i % 2 === 0  ? 'from-white via-prime-200 to-gray-50' : 'from-gray-800 via-prime-950 to-gray-900 text-white']">
        <div class="container py-24">
          <div class="flex flex-col gap-8 items-start sm:flex-row">
            <div data-aos="fade-right" class="flex-shrink-0 w-full aspect-square bg-contain bg-center bg-no-repeat sm:max-w-60 sm:bg-top" :style="{ backgroundImage: `url(/img/illustration/${i === 0 ? 'automation' : i === 1 ? 'forecast' : i === 2 ? 'dev' : 'network'}.svg)` }" />
            <div class="w-full">
              <SectionTitle data-aos="fade-up" :text="s.name" class="max-w-6xl"/>
              <div data-aos="fade-up" data-aos-delay="300" class="pt-12">
                {{ s.description }}
              </div>
              <div data-aos="fade-right" data-aos-delay="600" class="flex justify-end w-full pt-12">
                <SpButton :color="i % 2 === 0 ? 'black' : 'white'" size="lg" border round @click="$startDiscuss(s.name)">
                  Cari tahu
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
</template>

<script setup>
import SectionTitle from '~/components/partial/SectionTitle'
import OrnamentDotCircle from '~/components/partial/OrnamentDotCircle'
import SpButton from '~/components/partial/SpButton'
import IconSvg from '~/components/partial/IconSvg'

definePageMeta({ path: '/layanan' })

useHead({ title: 'Layanan' })

const serviceStore = useServiceStore()
const problemSolving = [
  {
    p: 'Saya seorang retailer online tapi tingkat konversi yang rendah karena sulit menemukan produk yang tepat untuk pelanggan.',
    s: 'Dengan menggunakan algoritma machine learning untuk analisis perilaku pelanggan dan pola pembelian, perusahaan mengembangkan sistem rekomendasi yang memberikan saran produk yang relevan berdasarkan riwayat pembelian dan preferensi pengguna. Hasilnya, tingkat konversi meningkat secara signifikan.'
  },
  {
    p: 'Saya memiliki perusahaan manufaktur tapi sering mengalami downtime yang mahal akibat kegagalan mesin yang tidak terduga.',
    s: 'Dengan menerapkan sensor IoT dan algoritma data science, perusahaan mulai mengumpulkan data dari mesin untuk memprediksi kapan mereka mungkin mengalami kerusakan. Melalui pemeliharaan prediktif, perusahaan dapat melakukan pemeliharaan sebelum terjadi masalah, mengurangi downtime dan biaya operasional.'
  },
  {
    p: 'Saya bekerja di sebuah bank yang menghadapi peningkatan jumlah kasus penipuan yang merugikan pelanggan dan reputasi kami.',
    s: 'Dengan menggunakan AI dan algoritma pembelajaran mesin untuk menganalisis transaksi dalam waktu nyata, bank dapat mengidentifikasi pola perilaku yang mencurigakan. Sistem ini memberikan notifikasi otomatis kepada tim keamanan untuk menyelidiki transaksi yang berpotensi curang. Implementasi ini menurunkan jumlah kasus penipuan secara signifikan dan meningkatkan kepercayaan pelanggan.'
  }
]
const sectionService = ref()

onMounted(() => {
  if (serviceStore.all.length < 1) {
    serviceStore.getAll()
  }
})
</script>

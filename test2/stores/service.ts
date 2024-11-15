export const useServiceStore = defineStore('service', () => {
  const all = ref([])

  const setAll = data => all.value = data

  const getAll = async () => {
    try {
      setAll([
        { name: 'Analisa Bisnis', description: 'Kami menganalisis kebutuhan bisnis anda untuk mengidentifikasi peluang, menyederhanakan proses, dan meningkatkan efisiensi demi pertumbuhan yang berkelanjutan' },
        { name: 'Forecast', description: 'Dengan wawasan berbasis data, kami memprediksi tren pasar untuk membantu keputusan strategis dan mengoptimalkan posisi kompetitif bisnis anda' },
        { name: 'Software', description: 'Tim kami menciptakan solusi perangkat lunak kustom yang disesuaikan dengan kebutuhan unik anda, menjamin fungsionalitas dan pengalaman pengguna yang baik' },
        { name: 'Sistem Digital', description: 'Kami merancang kerangka digital yang kuat untuk terintegrasi dengan sistem anda, meningkatkan kinerja, dan mendukung inovasi di masa depan' }
      ])
    }
    catch (error) { setAll([]) }
  }

  return {
    all,
    getAll
  }
})

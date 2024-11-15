export const useTestimonialStore = defineStore('testimonial', () => {
  const all = ref([])

  const setAll = data => all.value = data

  const getAll = async () => {
    try {
      setAll([
        {
          name: 'Almia Ratih',
          photo: 'avatar-1.jpg',
          said: 'Hasil pekerjaan memberikan solusi yang sesuai dengan kebutuhan spesifik kami',
          role: 'Manajer Bisnis',
          company: 'company-1.png'
        },
        {
          name: 'Johan W. Maleo',
          photo: 'avatar-2.jpg',
          said: 'Bukan hanya hasil pekerjaan, namun manajemen jadwal pekerjaannya juga sangat memuaskan',
          role: 'Manajer Operasional',
          company: 'company-2.png'
        },
        {
          name: 'Arhim Verdha',
          photo: 'avatar-3.jpg',
          said: 'Tidak salah untuk mempercayakan kebutuhan kami kepada TechWave, hasilnya sangat memuaskan',
          role: 'Manajer Umum',
          company: 'company-3.png'
        }
      ])
    }
    catch (error) { setAll([]) }
  }

  return {
    all,
    getAll
  }
})

export const useBenefitStore = defineStore('benefit', () => {
  const all = ref([])

  const setAll = data => all.value = data

  const getAll = async () => {
    try {
      setAll([
        { name: 'Efisiensi', description: 'Dengan mengotomatiskan tugas rutin, seperti entri data atau pertanyaan pelanggan, AI menghemat waktu berharga untuk karyawan. Ini memungkinkan tim fokus pada perencanaan strategis, kreativitas, dan pemecahan masalah, yang meningkatkan produktivitas secara keseluruhan' },
        { name: 'Analisis Data', description: 'AI dapat menganalisis dataset kompleks secara real-time, mengungkap pola dan tren yang mungkin tidak terlihat jelas. Kemampuan ini sangat berguna untuk peramalan pasar, di mana wawasan yang tepat waktu dapat memandu strategi bisnis yang krusial' },
        { name: 'Penghematan Biaya', description: 'Penerapan solusi AI dapat mengurangi biaya operasional dengan meminimalkan kesalahan manusia dan mempercepat proses. Seiring waktu, ini menghasilkan penghematan signifikan, terutama untuk tugas yang memerlukan banyak tenaga kerja' }
      ])
    }
    catch (error) { setAll([]) }
  }

  return {
    all,
    getAll
  }
})

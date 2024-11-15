export const usePackageStore = defineStore('service', () => {
  const all = ref([])

  const setAll = data => all.value = data

  const getAll = async () => {
    try {
      setAll([
        {
          name: 'Basic',
          pros: [
            'Mencatat barang masuk',
            'Mencatat barang keluar',
            'Mencatat hasil keuntungan'
          ],
          price: '300.000'
        },
        {
          name: 'Business',
          pros: [
            'Semua keuntungan paket Basic',
            'Analisa hasil penjualan dengan CHART',
            'Support 7x24 Jam'
          ],
          price: '500.000'
        },
        {
          name: 'Entrepreneur',
          pros: [
            'Semua keuntungan paket Busniess',
            'Export data ke Excel',
            'AI Prediksi penghasilan'
          ],
          price: '700.000'
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

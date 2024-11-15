export default defineNuxtPlugin(() => {
  const startDiscuss = (about = null) => window.open(`https://wa.me/6281111111111?text=Halo%2C%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20layanan%20${about ? "*" + about + "*" : 'yang%20tersedia'}%2C%20bisakah%20kita%20mulai%20diskusi%3F`)
  return {
    provide: { startDiscuss }
  }
})

<template>
  <div class="grid gap-4 place-items-center min-h-screen p-4 md:grid-cols-12">
    <div class="grid place-items-center h-full w-full md:col-span-6">
      <div class=" space-y-8 sm:max-w-xs">
        <div class="h-12 bg-contain bg-no-repeat bg-center md:bg-left" :style="{ backgroundImage: 'url(/img/logo-long.png)' }" />
        <div>
          <div class="fixed top-0 left-0 h-8 w-8" @click="moran++" />
          <div class="fixed top-0 right-0 h-8 w-8" @click="enaml++" />
          <div class="fixed bottom-0 right-0 h-8 w-8" @click="kaltn++" />
          <div>
            Halo lagi 👋
          </div>
          <div class="font-semibold" style="font-size: 2rem;">
            Siap Mewujudkan Tujuan Anda?
          </div>
        </div>
        <div class="space-y-4">
          <SpInputText
            v-model="input.user.value"
            label="Username"
            placeholder="Masukkan username anda"
            :error="input.user.error"
            icon="right"
            class="relative"
          >
            <template #icon>
              <IconSvg name="user" class="h-6 w-6" />
            </template>
          </SpInputText>
          <SpInputText
            v-model="input.pw.value"
            type="password"
            label="Kata sandi"
            placeholder="Masukkan kata sandi anda"
            :error="input.pw.error"
            icon="right"
            class="relative"
          >
            <template #icon>
              <IconSvg name="lock" class="h-6 w-6" />
            </template>
          </SpInputText>
          <SpButton color="prime" :loading="loading" :disabled="loading" class="w-full" @click="checkFormLogin">
            Masuk
          </SpButton>
        </div>
      </div>
    </div>
    <div class="hidden place-items-center h-full w-full rounded-3xl bg-cover bg-no-repeat bg-center md:grid md:col-span-6" :style="{ backgroundImage: 'url(/img/illustration/hero.jpeg)' }" />
  </div>
</template>

<script setup>
import SpInputText from '~/components/partial/SpInputText'
import IconSvg from '~/components/partial/IconSvg'
import SpButton from '~/components/partial/SpButton'

useHead({ title: 'Masuk' })

const input = ref({
  user: { value: null, error: null },
  pw: { value: null, error: null }
})
const loading = ref(false)

const checkFormLogin = () => {
  if (input.value.user.value && input.value.pw.value) {
    submitFormLogin()
  }
  input.value.user.error = input.value.user.value ? null : 'Username harus diisi'
  input.value.pw.error = input.value.pw.value ? null : 'Kata sandi harus diisi'
}
const submitFormLogin = async () => {
  loading.value = true
  alert(`Halo ${input.value.user.value} 👋`)
  loading.value = false
}
</script>

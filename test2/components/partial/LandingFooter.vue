<template>
  <div class="bg-gradient-to-tr from-prime-600 via-prime-800 to-prime-600 text-white text-center">
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
</template>

<script setup>
import SectionTitle from '~/components/partial/SectionTitle'
import SpButton from '~/components/partial/SpButton'
import IconSvg from '~/components/partial/IconSvg'

const contactStore = useContactStore()

onMounted(() => {
  if (!contactStore.all) {
    contactStore.getAll()
  }
})

const openLink = (link) => window.open(link)
</script>

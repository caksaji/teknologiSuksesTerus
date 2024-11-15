<template>
  <div>
    <LandingNavbar data-aos="fade-up" />
    <NuxtPage />
    <LandingFooter />
    <ErrorNoInternetConnection />
  </div>
</template>

<script setup>
import LandingNavbar from '~/components/partial/LandingNavbar'
import LandingFooter from '~/components/partial/LandingFooter'
import ErrorNoInternetConnection from '~/components/partial/ErrorNoInternetConnection'

useHead({ titleTemplate: titleChunk => titleChunk ? `${titleChunk} | TechWave` : 'TechWave' })
</script>

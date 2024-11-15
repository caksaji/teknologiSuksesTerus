<template>
  <div>
    <NuxtPage />
    <ErrorNoInternetConnection />
  </div>
</template>

<script setup>
import ErrorNoInternetConnection from '~/components/partial/ErrorNoInternetConnection'

useHead({ titleTemplate: titleChunk => titleChunk ? `${titleChunk} | TechWave` : 'TechWave' })
</script>

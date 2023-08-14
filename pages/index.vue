<template>
  <div data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="0" :class="`scrollspy-example ${locale}`" tabindex="0">
    <HomeWelcome />
    <HomeIntroduction />
    <HomeFeatures />
    <HomeChallenges />
    <HomeDownload />
  </div>
</template>

<script setup>
import { useI18n } from '#imports'
const {locale} = useI18n()
</script>
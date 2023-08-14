<template>
  <!-- App badge section-->
  <section class="set-width bg-gradient-primary-to-secondary" id="download">
    <div class="container px-3 px-md-5" data-aos="zoom-in">
      <h2 class="text-center text-white font-alt mb-4">
        {{ $t('join.heading') }}
      </h2>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center">
        <p class="px-md-5 lead fw-normal text-muted mb-5 mb-lg-0" :lang="locale">
          {{ $t('join.intro') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '#imports'
const {locale} = useI18n()  
</script>
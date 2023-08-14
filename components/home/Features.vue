<template>
  <section id="features">
    <div class="container">
      <h2 class="text-center display-5 lh-3" data-aos="fade-down">
        {{ $t('features.heading') }}
      </h2>
      <div class="row gx-3 gy-5 mt-2 mt-lg-5">
        <div class="col-12 col-md-6 col-xxl-3" v-for="_, index in Array(4)">
          <CommonCard>
            <h3 class="application-heading">{{ $t(`features.f-${index+1}.heading`) }}</h3>
            <p :lang="locale">{{ $t(`features.f-${index+1}.content`) }}</p>
          </CommonCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '#imports'
const {locale} = useI18n()
</script>

<style scoped>
.application-heading {
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  padding: 0 0.5rem;
  height: 61px;
}

p {
  padding: 0 1.5rem;
}
</style>
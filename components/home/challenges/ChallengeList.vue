<template>
  <div class="timeline">
    <HomeChallengesChallengeItem 
      v-for="_, index in Array(3)"
      :type="$t(`challenges.c-${index+1}.type`)"
    >
      <template v-slot:icon>
        <i :class="$t(`challenges.c-${index+1}.icon`)"></i>
      </template>
      <h4 class="timeline-title">
        <span class="badge">{{ $t(`challenges.c-${index+1}.heading`) }}</span>
      </h4>
      <p :lang="locale">
        {{ $t(`challenges.c-${index+1}.content`) }}
      </p>
    </HomeChallengesChallengeItem>
  </div>
</template>

<script setup>
import { useI18n } from '#imports'
const {locale} = useI18n()
</script>
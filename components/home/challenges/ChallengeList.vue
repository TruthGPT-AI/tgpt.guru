<template>
  <div class="timeline">
    <HomeChallengesChallengeItem type="primary">
      <template v-slot:icon>
        <i class="bi bi-shield-exclamation"></i>
      </template>
      <h4 class="timeline-title">
        <span class="badge">Data Sovereignty and Security</span>
      </h4>
      <p>
        Your data privacy and security are paramount. While blockchain
        provides part of the solution, we're committed to exploring further
        measures to safeguard your data sovereignty.
      </p>
    </HomeChallengesChallengeItem>
    <HomeChallengesChallengeItem type="secondary">
      <template v-slot:icon>
        <i class="bi bi-person-bounding-box"></i>
      </template>
      <h4 class="timeline-title">
        <span class="badge">Ownership and Control</span>
      </h4>
      <p>
        At TruthGPT, we believe in your absolute right over your digital
        twin. We're establishing clear guidelines to ensure you have the final
        say on access, alteration, and deletion rights to your data.
      </p>
    </HomeChallengesChallengeItem>
    <HomeChallengesChallengeItem type="last">
      <template v-slot:icon>
        <i class="bi bi-database-lock"></i>
      </template>
      <h4 class="timeline-title">
        <span class="badge">Authenticity and Misuse</span>
      </h4>
      <p>
        We're dedicated to preventing misuse of our powerful system, whether
        it's creating unauthorized digital twins or impersonating others.
      </p>
    </HomeChallengesChallengeItem>
  </div>
</template>
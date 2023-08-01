<template>
  <div class="card-container">
    <div class="card">
      <slot></slot>
      <div class="layers">
        <div v-for="index in Array(15)" class="layer"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-container {
  display: flex;
  perspective: 50em;
  --bi: var(--gradient-bg);
}

.card {
  margin: auto;
  position: relative;
  width: 320px;
  height: 320px;
  padding: 1.5rem 0;
  color: #fff;
  transform: rotateY(40deg) rotateX(0);
  transform-style: preserve-3d;
  transition: transform 1s;
  background-color: transparent;
  
  &:hover {
    transform: rotateY(0) rotateX(0);
  }
}

.layers {
  position: absolute;
  left: 0; top: 0;
  width: 100%; height: 100%;
  transform-style: preserve-3d;
  z-index: -1;
  background-color: transparent;
}

.layer {
  position: absolute;
  left: 0; top: 0;
  width: 100%; height: 100%;
  border-radius: 1em;
  background-image: var(--bi);
  transform: translateZ(var(--tz));
  box-shadow: 0 0 0.5em #000d inset;
  
  @for $i from 0 to 15 {
    &:nth-child(#{$i + 1}) {
      --tz: #{$i * - 2}px;
    }
  }
  
  &:last-child {
    box-shadow: 0 0 0.5em #000d inset, 0 0 5px #000;
  }
}

@media (max-width: 1999px) {
  .card {
    transform: rotateY(20deg) rotateX(0);
  }
}
</style>
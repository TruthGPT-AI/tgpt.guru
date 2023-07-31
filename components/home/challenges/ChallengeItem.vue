<template>
  <div :class="`timeline-container ${type}`">
    <div class="timeline-icon">
      <slot name="icon"></slot>
    </div>
    <div class="timeline-body">
      <div class="timeline-content"><slot></slot></div>
    </div>
    <div class="shine"></div>
    <div class="background">
      <div class="tiles">
        <div class="tile tile-1"></div>
        <div class="tile tile-2"></div>
        <div class="tile tile-3"></div>
        <div class="tile tile-4"></div>

        <div class="tile tile-5"></div>
        <div class="tile tile-6"></div>
        <div class="tile tile-7"></div>
        <div class="tile tile-8"></div>

        <div class="tile tile-9"></div>
        <div class="tile tile-10"></div>
      </div>

      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    type: {
        type: String,
        required: true,
      },
  }
}
</script>
<script setup>
import { ref } from 'vue'
defineProps({ before: String, after: String })
const pos = ref(50)
</script>
<template>
  <div class="ba">
    <img :src="after" alt="After renovation" />
    <img :src="before" alt="Before renovation" :style="{ clipPath: `inset(0 ${100 - pos}% 0 0)` }" />
    <input v-model.number="pos" type="range" min="0" max="100" aria-label="Compare before and after" />
  </div>
</template>
<style scoped>
.ba { position: relative; aspect-ratio: 16/9; background: var(--concrete); overflow: hidden }
.ba img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover }
.ba input { position: absolute; left: 5%; bottom: 12px; width: 90% }
</style>

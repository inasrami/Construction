<script setup>
import { ref } from 'vue'
defineProps({ before: String, after: String })
const pos = ref(50)
const frame = ref(null)
let dragging = false

function setFromEvent(e) {
  const r = frame.value.getBoundingClientRect()
  pos.value = Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100))
}
function down(e) {
  dragging = true
  frame.value.setPointerCapture(e.pointerId)
  setFromEvent(e)
}
function move(e) {
  if (dragging) setFromEvent(e)
}
function up() {
  dragging = false
}
</script>
<template>
  <div ref="frame" class="ba" @pointerdown="down" @pointermove="move" @pointerup="up" @pointercancel="up">
    <img :src="after" alt="After renovation" draggable="false" />
    <img :src="before" alt="Before renovation" draggable="false" :style="{ clipPath: `inset(0 ${100 - pos}% 0 0)` }" />
    <span class="divider" :style="{ left: pos + '%' }" aria-hidden="true"><i></i></span>
    <input v-model.number="pos" type="range" min="0" max="100" aria-label="Compare before and after" />
  </div>
</template>
<style scoped>
.ba { position: relative; aspect-ratio: 16/9; background: var(--concrete); overflow: hidden; cursor: ew-resize; user-select: none; touch-action: pan-y }
.ba img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; pointer-events: none }
.divider { position: absolute; top: 0; bottom: 0; width: 2px; background: #fff; transform: translateX(-1px); box-shadow: 0 0 0 1px rgba(10, 26, 41, .18); pointer-events: none }
.divider i { position: absolute; top: 50%; left: 50%; width: 38px; height: 38px; margin: -19px 0 0 -19px; border-radius: 50%; background: #fff; box-shadow: 0 2px 12px rgba(10, 26, 41, .35); transition: transform 160ms var(--ease-out) }
.divider i::before { content: '\2039 \203A'; position: absolute; inset: 0; display: grid; place-items: center; color: var(--ink); font: 600 1.1rem/1 'Public Sans', sans-serif; letter-spacing: .15em; padding-left: .15em }
.ba:active .divider i { transform: scale(.94) }
.ba input { position: absolute; inset: 0; width: 100%; height: 100%; margin: 0; opacity: 0; pointer-events: none }
.ba:has(input:focus-visible) .divider i { outline: 3px solid var(--signal); outline-offset: 2px }
</style>

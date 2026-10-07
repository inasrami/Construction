<script setup>
defineProps({ photo: { type: String, required: true } })

// Play the plan-to-photo sequence once per session; later visits and reduced motion show the end state.
let settled = false
try {
  settled = window.matchMedia('(prefers-reduced-motion: reduce)').matches || sessionStorage.getItem('hero-plate-seen') === '1'
  sessionStorage.setItem('hero-plate-seen', '1')
} catch {}
</script>

<template>
  <div class="plate" :class="{ 'is-settled': settled }">
    <img class="photo" :src="photo" alt="Two-storey family house with a brick and glass facade, lit at dusk" fetchpriority="high" />
    <svg viewBox="0 0 1376 768" aria-hidden="true">
      <g class="main">
        <path pathLength="1" style="--d: 0ms" d="M120 560H1260" />
        <path pathLength="1" style="--d: 150ms" d="M252 187H1098V210H252Z" />
        <path pathLength="1" style="--d: 250ms" d="M252 210L322 228" />
        <path pathLength="1" style="--d: 250ms" d="M1098 210L1000 282" />
        <path pathLength="1" style="--d: 400ms" d="M322 228V560 M395 228V560" />
        <path pathLength="1" style="--d: 550ms" d="M620 228H1000 M620 228V560 M801 228V560 M1000 228V560" />
        <path pathLength="1" style="--d: 700ms" d="M397 252H608V378H397Z M397 428H608V558H397Z" />
        <path pathLength="1" style="--d: 800ms" d="M392 380H612V427H392Z" />
        <path pathLength="1" style="--d: 1100ms" d="M643 270H775V367H643Z M857 252H945V365H857Z" />
        <path pathLength="1" style="--d: 1250ms" d="M596 367H1070V408H596Z" />
        <path pathLength="1" style="--d: 1400ms" d="M640 432H703V556H640Z M705 432H777V556H705Z M857 428H945V556H857Z" />
        <path pathLength="1" style="--d: 1550ms" d="M1000 447H1178V545H1000Z M1003 467H1107V545H1003Z" />
      </g>
      <g class="dim">
        <path pathLength="1" style="--d: 1800ms" d="M252 610H1098 M252 598V622 M1098 598V622" />
        <path pathLength="1" style="--d: 1900ms" d="M205 187V558 M193 187H217 M193 558H217" />
        <text x="675" y="660" text-anchor="middle">14.00 m</text>
        <text x="172" y="372" text-anchor="middle" transform="rotate(-90 172 372)">6.20 m</text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.plate { position: relative; aspect-ratio: 1376 / 768; overflow: hidden; border: 1px solid rgba(255, 255, 255, .14); background-color: #102a40; background-image: linear-gradient(rgba(255, 255, 255, .05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, .05) 1px, transparent 1px); background-size: 28px 28px }
.photo, svg { position: absolute; inset: 0; width: 100%; height: 100% }
.photo { object-fit: cover; animation: photo-in 900ms var(--ease-out) 2900ms both }

.main path, .dim path { fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 1; stroke-dashoffset: 1; animation: draw 1200ms var(--ease-out) var(--d, 0ms) forwards }
.main path { stroke: #cfe3f5; stroke-width: 4 }
.main { animation: settle 700ms ease-out 3100ms forwards }
.dim { filter: drop-shadow(0 0 3px rgba(11, 28, 44, .9)) }
.dim path { stroke: var(--signal); stroke-width: 3 }
.dim text { fill: var(--signal); font: 600 34px 'Barlow Condensed', sans-serif; letter-spacing: .02em; paint-order: stroke; stroke: rgba(11, 28, 44, .75); stroke-width: 7px; stroke-linejoin: round; opacity: 0; animation: label-in 500ms ease-out 2500ms forwards }

.is-settled .photo { animation: none; opacity: 1 }
.is-settled .main { animation: none; opacity: 0 }
.is-settled .dim path { animation: none; stroke-dashoffset: 0 }
.is-settled .dim text { animation: none; opacity: 1 }

@keyframes draw { to { stroke-dashoffset: 0 } }
@keyframes photo-in { from { opacity: 0 } to { opacity: 1 } }
@keyframes settle { to { opacity: 0 } }
@keyframes label-in { to { opacity: 1 } }
</style>

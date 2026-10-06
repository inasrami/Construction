<template>
  <svg viewBox="0 0 520 350" role="img" aria-label="Blueprint drawing of a house with dimensions" class="bp">
    <g class="draw">
      <path d="M20 290H500" />
      <path d="M120 290V170H400V290" />
      <path d="M100 170L260 80L420 170Z" />
      <path d="M240 290V220H280V290" />
      <path d="M150 200H210V250H150Z M310 200H370V250H310Z" />
      <path d="M340 125V90H370V143" />
    </g>
    <g class="draw dim">
      <path d="M120 315H400 M120 308V322 M400 308V322" />
      <path d="M450 80V290 M443 80H457 M443 290H457" />
      <text x="260" y="340" text-anchor="middle">14.00 m</text>
      <text x="466" y="190" transform="rotate(90 466 190)" text-anchor="middle">9.20 m</text>
    </g>
  </svg>
</template>
<style scoped>
.bp { width: 100%; height: auto }
.draw path { fill: none; stroke: #cfe3f5; stroke-width: 2; stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: draw 2.4s ease-out forwards }
.draw path:nth-child(3) { animation-delay: .4s }
.draw path:nth-child(5) { animation-delay: .8s }
.dim path { stroke: var(--signal); stroke-width: 1; animation-delay: 1.4s }
.dim text { fill: var(--signal); font: 14px 'Public Sans', sans-serif; opacity: 0; animation: show .6s 2.6s forwards }
@keyframes draw { to { stroke-dashoffset: 0 } }
@keyframes show { to { opacity: 1 } }
@media (prefers-reduced-motion: reduce) {
  .draw path { animation: none; stroke-dashoffset: 0 }
  .dim text { animation: none; opacity: 1 }
}
</style>

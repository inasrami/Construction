<script setup>
import { services } from '../data/services'
</script>
<template>
  <div v-reveal class="wrap page-head">
    <h1>Services</h1>
    <p class="lead">Four kinds of work, all done by our own crews.</p>
  </div>
  <section v-reveal class="wrap rows">
    <div v-for="s in services" :key="s.title">
      <h2>{{ s.title }}</h2>
      <div>
        <p>{{ s.text }}</p>
        <ul><li v-for="i in s.items" :key="i">{{ i }}</li></ul>
      </div>
    </div>
  </section>
  <section v-reveal class="section wrap">
    <RouterLink to="/contact" class="btn">Request a quote</RouterLink>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { company } from '../data/company'
const open = ref(false)
const links = [['/', 'Home'], ['/services', 'Services'], ['/projects', 'Projects'], ['/about', 'About']]
</script>
<template>
  <header class="site-header">
    <div class="wrap bar">
      <RouterLink to="/" class="logo">{{ company.name }}</RouterLink>
      <button class="menu" :aria-expanded="open" @click="open = !open">Menu</button>
      <nav :class="{ open }" @click="open = false">
        <RouterLink v-for="[to, label] in links" :key="to" :to="to">{{ label }}</RouterLink>
        <RouterLink to="/contact" class="btn">Request a quote</RouterLink>
      </nav>
    </div>
  </header>
</template>

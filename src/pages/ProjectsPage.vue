<script setup>
import { ref, computed } from 'vue'
import ProjectRow from '../components/ProjectRow.vue'
import { projects, projectTypes } from '../data/projects'
const active = ref('All')
const shown = computed(() => active.value === 'All' ? projects : projects.filter(p => p.type === active.value))
</script>
<template>
  <div class="wrap page-head">
    <h1>Projects</h1>
    <div class="filters">
      <button v-for="t in projectTypes" :key="t" :aria-pressed="active === t" @click="active = t">{{ t }}</button>
    </div>
  </div>
  <section class="wrap section">
    <TransitionGroup tag="ul" name="reg" class="register">
      <ProjectRow v-for="p in shown" :key="p.id" :project="p" />
    </TransitionGroup>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'
import BeforeAfter from '../components/BeforeAfter.vue'
const route = useRoute()
const p = computed(() => projects.find(x => x.id === route.params.id))
</script>
<template>
  <article v-if="p" class="wrap page-head">
    <h1>{{ p.title }}</h1>
    <p class="lead">{{ p.summary }}</p>
    <BeforeAfter v-if="p.before" :before="p.before" :after="p.image" />
    <div v-else class="thumb wide">
      <img :src="p.image" :alt="p.title" @load="$event.target.classList.add('loaded')" @error="$event.target.style.display = 'none'" />
    </div>
    <dl class="specs">
      <div><dt>Location</dt><dd>{{ p.place }}</dd></div>
      <div><dt>Year</dt><dd>{{ p.year }}</dd></div>
      <div><dt>Size</dt><dd>{{ p.size }}</dd></div>
      <div><dt>Duration</dt><dd>{{ p.duration }}</dd></div>
    </dl>
    <p><RouterLink to="/projects">Back to projects</RouterLink></p>
  </article>
  <div v-else class="wrap page-head">
    <h1>Project not found</h1>
    <p><RouterLink to="/projects">See all projects</RouterLink></p>
  </div>
</template>

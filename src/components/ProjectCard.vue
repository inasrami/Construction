<script setup>
defineProps({ project: { type: Object, required: true } })
</script>
<template>
  <RouterLink :to="`/projects/${project.id}`" class="card">
    <div class="thumb">
      <img :src="project.image" :alt="project.title" loading="lazy" @error="$event.target.style.display = 'none'" />
    </div>
    <div class="body">
      <h3>{{ project.title }}</h3>
      <p>{{ project.type }}, {{ project.place }}, {{ project.year }}</p>
    </div>
  </RouterLink>
</template>

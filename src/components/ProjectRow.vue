<script setup>
defineProps({ project: { type: Object, required: true } })
</script>
<template>
  <li class="reg-row">
    <RouterLink :to="`/projects/${project.id}`">
      <div class="thumb">
        <img :src="project.image" :alt="project.title" loading="lazy" @load="$event.target.classList.add('loaded')" @error="$event.target.style.display = 'none'" />
      </div>
      <div class="reg-title">
        <h3>{{ project.title }}</h3>
        <p>{{ project.type }}, {{ project.place }}</p>
      </div>
      <dl class="specs">
        <div><dt>Size</dt><dd>{{ project.size }}</dd></div>
        <div><dt>Duration</dt><dd>{{ project.duration }}</dd></div>
        <div><dt>Year</dt><dd>{{ project.year }}</dd></div>
      </dl>
    </RouterLink>
  </li>
</template>

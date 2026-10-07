<script setup>
import ProjectRow from '../components/ProjectRow.vue'
import HeroBlueprint from '../components/HeroBlueprint.vue'
import heroPhoto from '../assets/images/hero.jpeg'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { company } from '../data/company'
const featured = projects.slice(0, 3)
const years = new Date().getFullYear() - company.founded
const steps = [
  ['Site visit and quote', 'We visit, measure and send a fixed price within a week.'],
  ['Plans and permits', 'We prepare drawings and handle the paperwork.'],
  ['Construction', 'A named site manager reports to you every week.'],
  ['Handover', 'We walk through the finished work and fix any snags.']
]
</script>
<template>
  <section class="hero">
    <div class="wrap">
      <div class="hero-copy">
        <h1>We build homes, offices and warehouses across Bulgaria.</h1>
        <p class="lead">{{ years }} years, 140 finished projects, one team from first sketch to the keys in your hand.</p>
        <p class="actions">
          <RouterLink to="/contact" class="btn">Request a quote</RouterLink>
          <RouterLink to="/projects" class="btn-line">See our projects</RouterLink>
        </p>
      </div>
      <HeroBlueprint :photo="heroPhoto" />
    </div>
  </section>

  <section class="section wrap">
    <h2>What we build and fix</h2>
    <div class="rows">
      <div v-for="s in services" :key="s.title"><h3>{{ s.title }}</h3><p>{{ s.text }}</p></div>
    </div>
    <p class="more"><RouterLink to="/services">All services</RouterLink></p>
  </section>

  <section class="section wrap">
    <h2>Recent projects</h2>
    <ul class="register"><ProjectRow v-for="p in featured" :key="p.id" :project="p" /></ul>
    <p class="more"><RouterLink to="/projects">All projects</RouterLink></p>
  </section>

  <section class="section wrap">
    <h2>How a project runs</h2>
    <ol class="steps">
      <li v-for="[title, text] in steps" :key="title"><h3>{{ title }}</h3><p>{{ text }}</p></li>
    </ol>
  </section>

  <section class="band">
    <div class="wrap">
      <h2>Planning a build or a renovation?</h2>
      <p>Tell us what you need. We reply within two working days.</p>
      <RouterLink to="/contact" class="btn">Request a quote</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { company } from '../data/company'
const years = new Date().getFullYear() - company.founded
const team = [['Georgi Orlov', 'Founder and general manager'], ['Maria Petrova', 'Chief engineer'], ['Ivan Dimitrov', 'Site operations manager']]
const certs = ['Licensed contractor, Class III', 'ISO 9001 quality management', 'Occupational health and safety certified']
</script>
<template>
  <div class="wrap page-head">
    <h1>About {{ company.name }}</h1>
    <p class="lead">We started in 2008 as a four-person renovation crew in Sofia. Today we build houses, offices and warehouses across the country.</p>
    <p>We keep our own crews instead of subcontracting everything, so the people who quote the job are the people who deliver it.</p>
    <p>{{ years }} years in business, 140 finished projects, 45 people on our crews.</p>
  </div>
  <section class="wrap section two">
    <div><h2>Licenses and certificates</h2><ul><li v-for="c in certs" :key="c">{{ c }}</li></ul></div>
    <div><h2>Team</h2><ul><li v-for="[n, r] in team" :key="n"><strong>{{ n }}</strong>, {{ r }}</li></ul></div>
  </section>
</template>

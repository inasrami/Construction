<script setup>
import QuoteForm from '../components/QuoteForm.vue'
import { company } from '../data/company'
</script>
<template>
  <div v-reveal class="wrap page-head"><h1>Request a quote</h1><p class="lead">Describe your project and we will reply within two working days.</p></div>
  <section v-reveal class="wrap section two">
    <QuoteForm />
    <div>
      <h2>Prefer to call?</h2>
      <p>{{ company.phone }}<br />{{ company.email }}</p>
      <p>{{ company.address }}<br />Monday to Friday, 8:00 to 17:00</p>
    </div>
  </section>
</template>

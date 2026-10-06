<script setup>
import { company } from '../data/company'
</script>
<template>
  <footer class="site-footer">
    <div class="wrap foot">
      <div>
        <strong>{{ company.name }}</strong>
        <p>{{ company.address }}<br />{{ company.phone }}<br />{{ company.email }}</p>
      </div>
      <p>Concept project for portfolio use. The company and projects are fictional.</p>
    </div>
  </footer>
</template>

<script setup>
import { reactive, ref } from 'vue'
const form = reactive({ name: '', phone: '', email: '', type: 'New build', size: '', budget: '', message: '' })
const sent = ref(false)
function submit() {
  // TODO: send `form` to your backend, Formspree or a Firebase function
  console.log(form)
  sent.value = true
}
</script>
<template>
  <p v-if="sent" class="sent" role="status">Thank you, {{ form.name }}. We will reply within two working days.</p>
  <form v-else class="form" @submit.prevent="submit">
    <label>Name<input v-model="form.name" required autocomplete="name" /></label>
    <label>Phone<input v-model="form.phone" type="tel" required autocomplete="tel" /></label>
    <label>Email<input v-model="form.email" type="email" autocomplete="email" /></label>
    <label>Project type
      <select v-model="form.type">
        <option>New build</option><option>Renovation</option><option>Roofing</option><option>Interior finishing</option>
      </select>
    </label>
    <label>Approximate size in m²<input v-model="form.size" type="number" min="1" /></label>
    <label>Budget
      <select v-model="form.budget">
        <option value="">Not sure yet</option><option>Up to 50,000 EUR</option><option>50,000 to 150,000 EUR</option><option>Over 150,000 EUR</option>
      </select>
    </label>
    <label>Tell us about the project<textarea v-model="form.message" rows="4"></textarea></label>
    <button class="btn" type="submit">Send request</button>
  </form>
</template>

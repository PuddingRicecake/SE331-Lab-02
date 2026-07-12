<script setup lang="ts">
  import EventCard from '@/components/EventCard.vue'
  import { ref, onMounted } from 'vue'
  import type { Event } from '@/types'
  import EventCardCate from '@/components/EventCardCate.vue';
  // import axios from 'axios';
  import EventServices from '@/services/EventServices';

  const events = ref<Event[] | null>(null)

  onMounted (() => {
    EventServices.getEvents()
    .then((response) => {
      // console.log(response.data)
      events.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
  })
</script>

<template>
  <h1>Events For Good</h1>
  
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <EventCardCate v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<script setup lang="ts">
  import EventCard from '@/components/EventCard.vue'
  import { ref, onMounted, computed } from 'vue'
  import type { Event } from '@/types'
  import EventCardCate from '@/components/EventCardCate.vue';
  // import axios from 'axios';
  import EventServices from '@/services/EventServices';

  const events = ref<Event[] | null>(null)
  const props = defineProps({
    page: {
      type: Number,
      required: true
    }
  })
  const page = computed(() => props.page)

  onMounted (() => {
    EventServices.getEvents(3, page.value)
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

  <RouterLink :to="{name: 'event-list-view', query: {page: page - 1}}"
    rel="prev"
    v-if="page != 1">
    Prev Page
  </RouterLink>

  <RouterLink :to="{name: 'event-list-view', query: {page: page + 1}}"
    rel="next">
    Prev Page
  </RouterLink>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
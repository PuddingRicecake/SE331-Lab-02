<script setup lang="ts">
  import EventCard from '@/components/EventCard.vue'
  import { ref, onMounted, computed, watchEffect } from 'vue'
  import type { Event } from '@/types'
  import EventCardCate from '@/components/EventCardCate.vue';
  // import axios from 'axios';
  import EventServices from '@/services/EventServices';

  const events = ref<Event[] | null>(null)

  const size = ref(3); //change page size

  const totalEvents = ref(0)
  const hasNextPages = computed(() => {
    const totalPages = Math.ceil(totalEvents.value/size.value)
    return page.value < totalPages
  })
  
  const props = defineProps({
    page: {
      type: Number,
      required: true
    }
  })
  const page = computed(() => props.page)

  onMounted (() => {
    watchEffect(() => {
      events.value = null
      EventServices.getEvents(size.value, page.value, size.value)
        .then((response) => {
          events.value = response.data
          totalEvents.value = response.headers['x-total-count']
        })
        .catch((error) => {
          console.error('There was an error!', error)
        })
    })

  })
</script>

<template>
  <h1>Events For Good</h1>
  
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <EventCardCate v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">
      <RouterLink :to="{name: 'event-list-view', query: {page: page - 1, size: size}}"
        rel="prev"
        v-if="page != 1">
        Prev Page
      </RouterLink>

      <RouterLink :to="{name: 'event-list-view', query: {page: page + 1, size: size}}"
        rel="next"
        v-if="hasNextPages">
        Next Page
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
 flex: 1;
 text-decoration: none;
 color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
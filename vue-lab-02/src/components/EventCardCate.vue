<script setup lang="ts">
  import type { Event } from '@/types'
  defineProps<{
    event: Event
  }>()

  // const event = ref({
  //   id: 5928101,
  //   category: 'animal welfare',
  //   title: 'Cat Adoption Day',
  //   description: 'Find your new feline friend at this event.',
  //   location: 'Meow Town',
  //   date: 'January 28, 2026',
  //   time: '12:00',
  //   petAllowed: true,
  //   organizer: 'Kat Laydee'
  // })
</script>

<template>
  <div class="event-class">
    <div class="event-card cate-org">
      <p>{{  event.category }}</p>
      <p>{{ event.organizer }}</p>
    </div>
  </div>
</template>

<style scoped>
.event-class {
  display: flex;
  justify-content: center;
}

.event-class {
  padding: 20px;
  width: 250px;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.cate-org {
    padding-left: 50px;
    text-align: right;
}
</style>
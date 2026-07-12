<script setup lang="ts">
  // import EventCard from '@/components/EventCard.vue'
  import { ref, onMounted } from 'vue'
  // import type { Event } from '@/types'
  import type { Student } from '@/students'
  // import EventCardCate from '@/components/EventCardCate.vue';
  import StudentCard from '@/components/StudentCard.vue';
  // import axios from 'axios';
  // import EventServices from '@/services/EventServices';
  import StudentServices from '@/services/StudentServices';

  const students = ref<Student[] | null>(null)

  onMounted (() => {
    StudentServices.getStudents()
    .then((response) => {
      // console.log(response.data)
      students.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
  })
</script>

<template>
  <h1>A.</h1>
  
  <div class="students">
    <!-- <EventCard v-for="event in students" :key="event.id" :event="event" />
    <EventCardCate v-for="event in students" :key="event.id" :event="event" /> -->
    <StudentCard v-for="student in students" :key="student.id" :student="student" />
  </div>
</template>

<style scoped>
.students {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
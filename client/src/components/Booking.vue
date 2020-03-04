
<template lang="html">
  <div class="">
<h3>Name: {{booking.name}}</h3>
<h3>Email: {{booking.email}}</h3>
<h3>Checked in? : {{booking.checked_in}}</h3>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import BookingsService from '@/services/BookingsService.js'

export default {
  name: 'booking-card',
  props: ['booking'],
  methods: {
    deleteBooking(){
      BookingsService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted',this.booking._id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>

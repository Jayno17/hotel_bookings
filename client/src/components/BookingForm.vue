<template lang="html">
  <form class="" v-on:submit="addBooking" method="post">

    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required/>

    <label for="email">Email:</label>
    <input type="text" id="email" v-model="email" required/>

    <label for="checked_in">Checked In?</label>
    <input type="text" id="checked_in" v-model="checked_in" required/>

    <input type="submit" value="Save" id="save"/>


  </form>
</template>

<script>

import {eventBus} from '@/main.js'
import BookingsService from '@/services/BookingsService.js'

export default {
  name: 'booking-form',
  data(){
    return {
      name: '',
      email: '',
      checked_in: null
    }
  },
  methods:{
    addBooking(event){
      event.preventDefault()
      const booking ={
        name:this.name,
        email:this.email,
        checked_in:checked_in
      }
      Bookings.postBooking(booking)
      .then(res=>eventBus.$emit('booking-added',res))
    }
  }
}
</script>

<style lang="css" scoped>
</style>

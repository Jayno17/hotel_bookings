<template>
  <section>
   <booking-form/>
   <bookings-grid/>
  </section>
</template>

<script>
import BookingForm from '@/components/BookingForm';
import BookingsGrid from '@/components/BookingsGrid';

export default {
  name: 'app',
  components: {
    'bookings-grid': BookingsGrid,
    'booking-form': BookingForm
  }

}
</script>

<style>
html {
  height: 100%;
}
body {
  background-color: #FFFFF3;
  


}

</style>

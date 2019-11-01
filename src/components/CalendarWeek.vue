<template>
  <div id="calendar-week" class="container">
    <div class="columns is-mobile">
      <CalendarDay v-for="day in calendarDays"
        :key="day.id"
        v-bind="day"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CalendarDay from '@/components/CalendarDay'

export default {
  name: 'CalendarWeek',
  components: {
    CalendarDay
  },
  computed: mapGetters(['calendarDays'])
}
</script>

<style lang="scss">
#calendar-week {
  margin-bottom: 50px;
  .column {
    padding: 0 0 0 0;
  }

  .day {
    background-color: #4A4A4A;
    color: #FFF;
    border-left: 1px solid #8F8F8F;
    border-bottom: 1px solid #8F8F8F;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background: darken(#4A4A4A,3%);
    }

    .day-banner {
      background-color: #333333;
      color: #FFF;
      padding: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 12px;
      font-weight: 600;
    }

    .day-details {
      padding: 10px;

      .day-event {
        margin-top: 6px;
        margin-bottom: 6px;
        display: block;
        color: #4C4C4C;
        padding: 5px;

        .details {
          display: block;
        }

        .icons .fa {
          padding: 0 2px;
        }

        input {
          background: none;
          border: 0;
          border-bottom: 1px solid #FFF;
          width: 100%;

          &:focus {
            outline: none;
          }
        }
      }
    }

    &:last-child {
      border-right: 1px solid #8F8F8F;
    }
  }
}
</style>

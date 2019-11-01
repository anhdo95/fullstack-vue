<template>
  <div class="day column" @click="handleDayClick">
    <div class="day-banner has-text-white has-text-centered">{{ abbvTitle }}</div>
    <div class="day-details">
      <div class="day-number">{{ id }}</div>
      <CalendarEvent v-for="(event, index) in events"
        :key="index"
        :dayId="id"
        v-bind="event"
      />
    </div>
  </div>
</template>

<script>
import CalendarEvent from "@/components/CalendarEvent";

export default {
  name: "CalendarDay",
  props: ['abbvTitle', 'events', 'id'],
  methods: {
    handleDayClick() {
      this.$store.commit('setActiveDay', { dayId: this.id })
    }
  },
  components: {
    CalendarEvent
  }
};
</script>

<style lang="scss">
.column {
  padding: 0 0 0 0;
}

.day {
  background-color: #4a4a4a;
  color: #fff;
  border-left: 1px solid #8f8f8f;
  border-bottom: 1px solid #8f8f8f;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: darken(#4a4a4a, 3%);
  }

  .day-banner {
    background-color: #333333;
    color: #fff;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 600;
  }

  .day-details {
    padding: 10px;
  }

  &:last-child {
    border-right: 1px solid #8f8f8f;
  }
}
</style>

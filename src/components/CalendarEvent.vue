<template>
  <div class="day-event" :style="randomBgColor">
    <div v-if="!edit">
      <span class="has-text-centered details" >{{ details }}</span>
      <div class="has-text-centered icons">
        <i class="fa fa-pencil-square edit-icon" @click.stop="editEvent" />
        <i class="fa fa-trash-o delete-icon" />
      </div>
    </div>
    <div v-if="edit">
      <input class="has-text-centered details" v-model="eventName" @keypress.enter="updateEvent">
      <div class="has-text-centered icons">
        <i class="fa fa-check confirm-icon" @click.stop="updateEvent" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dayId', 'details', 'edit'],
  name: "CalendarEvent",
  data() {
    return {
      eventName: '',
    }
  },
  computed: {
    randomBgColor() {
      const colors = ['#FF9999', '#85D6FF', '#99FF99'];

      const randomColor = colors[Math.floor(Math.random() * colors.length)]

      return { backgroundColor: randomColor }
    }
  },
  methods: {
    editEvent() {
      this.$store.commit('setEditEvent', {
        dayId: this.dayId,
        eventName: this.details
      })

      this.eventName = this.details
    },
    updateEvent() {
      this.$store.commit('updateEvent', {
        dayId: this.dayId,
        eventName: this.eventName.trim()
      })
    }
  },
};
</script>

<style lang="scss">
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4c4c4c;
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
    border-bottom: 1px solid #fff;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
}
</style>

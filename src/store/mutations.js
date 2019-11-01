import getters from './getters'

export default {
  setActiveDay(state, { dayId }) {
    state.calendarDays.map(day => {
      day.active = day.id === dayId

      return day
    })
  },
  addNewEvent(state, { eventName }) {
    const activeDay = getters.activeDay(state)

    activeDay.events.push({
      details: eventName,
      edit: false
    });
  }
}
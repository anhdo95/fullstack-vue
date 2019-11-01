export default {
  setActiveDay(state, { dayId }) {
    state.calendarDays.map(day => {
      day.active = day.id === dayId

      return day
    })
  }
}
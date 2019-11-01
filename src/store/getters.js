export default {
  calendarDays(state) {
    return state.calendarDays
  },
  activeDay(state) {
    return state.calendarDays.find(day => day.active)
  }
}
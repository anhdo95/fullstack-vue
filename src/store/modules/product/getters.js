const getters = {
  calendarDays(state) {
    return state.calendarDays
  },
  activeDay(state) {
    return state.calendarDays.find(day => day.active)
  },
}

export default getters
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
  },
  setEditEvent(state, { dayId, eventName }) {
    state.calendarDays.forEach(day => {
      day.events.forEach(event => {
        event.edit = (day.id === dayId) &&
                     (event.details === eventName)
      })
    })
  },
  updateEvent(state, { dayId, eventName }) {
    const day = state.calendarDays.find(day => day.id === dayId)
    const editableEvent = day.events.find(event => event.edit)

    if (eventName) {
      editableEvent.details = eventName
    }

    editableEvent.edit = false
  }
}
export default {
  addNewEvent(context, { eventName }) {
    console.log(JSON.stringify(context.getters.activeDay, null, 2))
  }
}
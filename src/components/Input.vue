<template>
  <div>
    <input type="text" :value="message" @input="handleMessageChange($event)">
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
  methods: {
    handleMessageChange({ target }) {
      // eslint-disable-next-line
      this.$emit('onMessageChange', target.value)
    }
  }
}
</script>
<template>
  <div>
    <app-input :style="{ marginTop: '20px' }"
      :message="message"
      @onMessageChange="handleMessageChange"
    >
    </app-input>
    <h4>{{ message }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {

  },
  data() {
    return {
      message: 'Default value'
    }
  },
  methods: {
    handleMessageChange(newMessage) {
      this.message = newMessage
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <a :href="to" @click.prevent="navigate">
    <slot></slot>
  </a>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "custom-link",
  props: {
    to: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentView: {}
    };
  },
  methods: {
    navigate() {
      window.history.pushState(null, null, this.to);
      EventBus.$emit("NAVIGATE");
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  display: inline-block;
  padding: 16px 24px;
}
</style>
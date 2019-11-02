<template>
  <div class="ui container">
    <h2 class="ui header">Fullstack Clothing Inquiry Sheet</h2>
    <div class="input-form">
      <form @submit.prevent="submitForm" class="ui form">
        <div class="field">
          <input
            name="newItem"
            :value="$store.getters.newItemField"
            type="text"
            placeholder="Add an item!"
            @input="handleFieldChange"
          />
          <span style="color: red">{{ fieldErrors.newItem }}</span>
          <span
            v-show="isNewItemInputLimitExceeded"
            style="color: red"
          >New item input is exceeded length</span>
        </div>
        <div class="field">
          <input
            name="email"
            :value="$store.getters.emailField"
            type="text"
            placeholder="What's your email?"
            @input="handleFieldChange"
          />
          <span style="color: red">{{ fieldErrors.email }}</span>
        </div>
        <div>
          <select
            name="urgency"
            :value="$store.getters.urgencyField"
            class="ui fluid search dropdown"
            @change="handleFieldChange"
          >
            <option disabled value>Please select one</option>
            <option value="1">Nonessential</option>
            <option>Moderate</option>
            <option>Urgent</option>
          </select>
          <span style="color: red">{{ fieldErrors.urgency }}</span>
        </div>
        <div class="ui checkbox">
          <input
            name="termsAndConditions"
            :checked="$store.getters.termsAndConditionsField"
            id="termsAndConditions"
            type="checkbox"
            @change="handleFieldChange"
          />
          <label for="termsAndConditions">I accept the terms and conditions</label>
          <span style="color: red">{{ fieldErrors.termsAndConditions }}</span>
        </div>
        <div>
          <button class="ui button" disabled v-if="saveStatus === 'SAVING'">Saving...</button>
          <button class="ui button" v-else-if="saveStatus === 'SUCCESS'">Saved! Submit another</button>
          <button class="ui button" v-else-if="saveStatus === 'ERROR'">Failed! Retry again?</button>
          <button class="ui button" v-else>Submit</button>
        </div>
      </form>
      <ul>
        <div v-if="loading" class="ui active inline loader"></div>
        <li v-for="(item, index) in $store.getters.items" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      fieldErrors: {
        newItem: undefined,
        email: undefined,
        urgency: undefined,
        termsAndConditions: undefined
      },
      loading: false,
      saveStatus: "READY"
    };
  },
  async created() {
    this.loading = true;
    await this.$store.dispatch("loadItems");
    this.loading = false;
  },
  methods: {
    handleFieldChange({ target }) {
      const { name, value, checked, type } = target;

      const realValue = type === "checkbox" ? checked : value;

      this.$store.dispatch("updateField", {
        fieldName: name,
        fieldValue: realValue
      });
    },
    async submitForm() {
      this.fieldErrors = this.validateForm(this.$store.getters.fields);

      if (Object.keys(this.fieldErrors).length) return;

      this.loading = true;
      try {
        this.saveStatus = "SAVING"
        await this.$store.dispatch('saveItems', [
          ...this.$store.getters.items,
          this.$store.getters.newItemField
        ])
        this.saveStatus = "SUCCESS";
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.saveStatus = "ERROR";
        this.loading = false;
      }
    },
    validateForm(fields) {
      console.log('fields', fields)
      return Object.keys(fields).reduce((errors, key) => {
        !fields[key] && (errors[key] = `${key} is required!`);

        return errors;
      }, {});
    }
  },
  computed: {
    isNewItemInputLimitExceeded() {
      return this.$store.getters.newItemField.length > 20;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

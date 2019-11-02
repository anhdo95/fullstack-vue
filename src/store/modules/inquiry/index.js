import apiClient from '@/api-client'

export default {
  state: {
    items: [],
    fields: {
      newItem: "",
      email: "",
      urgency: "",
      termsAndConditions: false
    },
  },
  getters: {
    items: (state) => state.items,
    fields: (state) => state.fields,
    newItemField: (state) => state.fields.newItem,
    emailField: (state) => state.fields.email,
    urgencyField: (state) => state.fields.urgency,
    termsAndConditionsField: (state) => state.fields.termsAndConditions,
  },
  mutations: {
    SET_FIELD(state, { fieldName, fieldValue }) {
      state.fields[fieldName] = fieldValue
    },
    UPDATE_ITEMS(state, { items }) {
      state.items = items
    },
    RESET_FIELDS(state) {
      const defaultValues = {
        string: "",
        boolean: false,
        number: 0
      };

      Object.keys(state.fields).forEach(
        key => (state.fields[key] = defaultValues[typeof state.fields[key]])
      );
    }
  },
  actions: {
    updateField({ commit }, payload) {
      commit('SET_FIELD', payload)
    },
    async loadItems({ commit }) {
      const items = await apiClient.getItems()
      commit('UPDATE_ITEMS', { items })
    },
    async saveItems({ commit }, items) {
      const success = await apiClient.saveItems(items)

      if (success) {
        commit('UPDATE_ITEMS', { items })
        commit('RESET_FIELDS')
      }
    }
  },
};

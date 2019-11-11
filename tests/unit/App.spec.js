import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { expect } from 'chai'

import App from '@/App';

describe('App.vue', () => {
  let wrapper, store, getters

  beforeEach(() => {
    const localVue = createLocalVue()

    localVue.use(Vuex)

    store = new Vuex.Store({
      getters
    })

    getters = {
      loading: () => false
    }

    wrapper = shallowMount(App, {
      localVue,
      store,
      stubs: [ 'router-view', 'router-link' ]
    })
  })

  it("Should display current day's date", () => {
    const formattedDate = new Date().toDateString()

    expect(wrapper.html()).to.contain(formattedDate)
  })
})
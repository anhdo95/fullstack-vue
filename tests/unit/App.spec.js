import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { expect } from 'chai'

import App from '@/App';

describe('App.vue', () => {
  let wrapper, store, getters

  const setUpWrapper = (loading) => {
    const localVue = createLocalVue()

    localVue.use(Vuex)

    getters = {
      loading: () => loading
    }

    store = new Vuex.Store({
      getters
    })

    wrapper = shallowMount(App, {
      localVue,
      store,
      stubs: [ 'router-view', 'router-link' ]
    })
  }

  it("Should display current day's date", () => {
    setUpWrapper(false)

    const formattedDate = new Date().toDateString()

    expect(wrapper.html()).to.contain(formattedDate)
  })

  it("Should display the footer links when the application is not loading", () => {
    setUpWrapper(false)

    const footerLinks = wrapper.find('.app__cities')

    expect(
      footerLinks.html()
    ).to.contain(`<router-link-stub to="/weather/2459115">New York City, New York</router-link-stub>`)

    expect(
      footerLinks.html()
    ).to.contain(`<router-link-stub to="/weather/1118370">Tokyo, Japan</router-link-stub>`)

    expect(
      footerLinks.html()
    ).to.contain(`<router-link-stub to="/weather/1398823">Lagos, Nigeria</router-link-stub>`)
  })

  it("Should not display the footer links when the application is loading", () => {
    setUpWrapper(true)

    const footerLinks = wrapper.find('.app__cities')

    expect(
      footerLinks.html()
    ).to.not.contain(`<router-link-stub to="/weather/2459115">New York City, New York</router-link-stub>`)

    expect(
      footerLinks.html()
    ).to.not.contain(`<router-link-stub to="/weather/1118370">Tokyo, Japan</router-link-stub>`)

    expect(
      footerLinks.html()
    ).to.not.contain(`<router-link-stub to="/weather/1398823">Lagos, Nigeria</router-link-stub>`)
  })
})
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import { expect } from 'chai'
import sinon from 'sinon'

import WeatherContainer from '@/components/WeatherContainer'

describe('WeatherContainer.vue', () => {
  let wrapper,
      getters,
      actions,
      store,
      localVue

  const setUpWrapper = (loading) => {
    localVue = createLocalVue()
    localVue.use(Vuex)

    getters = {
      location: () => 'New York',
      weatherDescription: () => 'Light Cloud',
      imageAbbr: () => 'lc.png',
      weatherTemp: () => -10.0,
      loading: () => loading
    }

    actions = {
      fetchWeather: sinon.stub()
    }

    store = new Vuex.Store({
      getters, actions
    })

    wrapper = shallowMount(WeatherContainer, {
      localVue,
      store
    })
  }

  it('Should render correct content when the app is loading', () => {
    setUpWrapper(true)

    expect(wrapper.html()).to.not.contain('<div class="weather container"></div>')
    expect(wrapper.html()).to.contain('<div class="loader"></div>')
  })

  it('Should render correct content when the app is not loading', () => {
    setUpWrapper(false)

    const imageAbbr = require(`@/assets/${getters.imageAbbr()}`)

    expect(wrapper.html()).to.not.contain('<div class="loader"></div>')
    expect(wrapper.html()).to.contain(`<img src="${imageAbbr}" class="weather__image">`)
    expect(wrapper.html()).to.contain(`<h1 class="subtitle weather__city">${getters.location()}</h1>`)
    expect(wrapper.html()).to.contain(`<p class="weather__description">${getters.weatherDescription()}</p>`)
    expect(wrapper.html()).to.contain(`<p class="weather__temperature">${getters.weatherTemp()} ºC</p>`)
  })
})

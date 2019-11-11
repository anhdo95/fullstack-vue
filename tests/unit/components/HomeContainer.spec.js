import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

import HomeContainer from '@/components/HomeContainer'

describe('HomeContainer.vue', () => {
  it('Should render correct contents', () => {
    const wrapper = shallowMount(HomeContainer)

    expect(
      wrapper.html()
    ).to.contain('<h1 class="subtitle is-size-3">Pick a city below to see the weather!</h1>')
  })
})

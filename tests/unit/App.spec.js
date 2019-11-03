import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai'

import AppTest from '@/components/AppTest';



describe('AppTest.vue', () => {
  let wrapper, vm, html

  describe('Should render correct contents', () => {
    beforeEach(() => {
      wrapper = shallowMount(AppTest)
      vm = wrapper.vm
      html = wrapper.html()
    })

    it('Should render correct table header', () => {
      expect(html).to.contains('<th>Items</th>')
    })

    it('Should render correct an `Input` field', () => {
      expect(html).to.contains('<input type="text" placeholder="Add item..." value="" class="prompt">')
    })

    it('Should render correct an `Add` button', () => {
      expect(html).to.contains('<button type="submit" disabled="disabled" class="ui button">Add</button>')
    })

    it('Should render correct an `Remove all` button', () => {
      expect(html).to.contains('<span class="ui label">Remove all</span>')
    })
  })

  describe('Should set correct default data', () => {
    it('Is `item` an empty string', () => {
      expect(vm.item).to.equal('')
    })

    it('Is `items` an empty of array', () => {
      expect(vm.items).to.deep.equal([])
    })
  })
})
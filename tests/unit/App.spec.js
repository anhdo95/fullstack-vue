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
      expect(html).to.contains('<button type="submit" disabled="disabled" class="ui button add-item-btn">Add</button>')
    })

    it('Should have an `Add` button disabled', () => {
      const addItemButton = wrapper.find('.add-item-btn')
      expect(addItemButton.element.disabled).to.true
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

  describe('The user populates the text input field', () => {
    let inputField,
        addItemButton

    beforeEach(() => {
      inputField = wrapper.find('.prompt')
      addItemButton = wrapper.find('.add-item-btn')

      inputField.element.value = 'New item'
      inputField.trigger('input')
    })

    it('Should update the `text` data property', () => {
      expect(vm.item).to.equal('New item')
    })

    it('Should enable the `Add` button when text input is populated', () => {
      expect(addItemButton.element.disabled).to.false
    })

    describe('And then clears the input data', () => {
      it('Should disable the `Add` button', () => {
        inputField.element.value = ''
        inputField.trigger('input')

        expect(addItemButton.element.disabled).to.true
      })
    })

    describe('And then submits the form', () => {
      let addItemButton,
          itemList,
          inputField

      beforeEach(() => {
        addItemButton = wrapper.find('.add-item-btn')
        itemList = wrapper.find('.item-list')
        inputField = wrapper.find('.prompt')

        wrapper.setData({ item: 'New item' })
        addItemButton.trigger('submit')
      })

      it('Should add a new item to the `items` data property', () => {
        expect(vm.items).to.deep.equal([ 'New item' ])
        expect(itemList.html()).to.contain('<td>New item</td>')
      })

      it('Should set the `item` data property to a blank string', () => {
        expect(vm.item).to.equal('')
        expect(inputField.element.value).to.equal('')
      })

      it('Should disable the `Add` button', () => {
        expect(addItemButton.element.disabled).to.true
      })
    })
  })
})
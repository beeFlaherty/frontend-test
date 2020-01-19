/* eslint-disable */
import { mount, shallowMount, createLocalVue  } from 'vue-test-utils'
import NewTaskForm from '../../components/newTaskForm/newTaskForm.vue';
import Vuex from 'vuex';
import storeData from '../../js/store';

const localVue = createLocalVue()

localVue.use(Vuex);
const store = new Vuex.Store({
    storeData
})


describe("New Task Form Component", () => {
    it("newTaskForm sucessfuly rendered using mock store", () => {
      const wrapper = mount(NewTaskForm, { 
        store, 
        localVue 
      })
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})

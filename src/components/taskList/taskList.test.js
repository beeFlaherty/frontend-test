/* eslint-disable */
import { mount, shallowMount, createLocalVue  } from 'vue-test-utils'
import taskList from '../../components/taskList/taskList.vue';
import Vuex from 'vuex';
import storeData from '../../js/store';

const localVue = createLocalVue()

localVue.use(Vuex);
const store = new Vuex.Store({
    state: {
		tasks: [
            {"title":"Do the thing",
            "isDone":"false",
            "importance":1},
            {"title":"Do the other thing",
            "isDone":"false",
            "importance":0},
        ],
		showForm: false
	},
})


describe("Task List Component", () => {
    it("newTaskForm sucessfuly rendered using mock data", () => {
      const wrapper = mount(taskList, { 
        store, 
        localVue
      })
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('renders correctly', () => {
        const wrapper = mount(taskList, { 
            store, 
            localVue
          })
        expect(wrapper.element).toMatchSnapshot()
    })
})
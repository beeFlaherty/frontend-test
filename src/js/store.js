import Vue from 'vue';
export default {
	state: {
		tasks: [],
		showForm: false
	},
	mutations: {
		loadTasks: function(state, tasks) {
            state.tasks = tasks.sort((a, b) => parseFloat(a.importance) - parseFloat(b.importance));
        },
        deleteTaskFromList: function(state, task) {
            for (let i = 0; i < state.tasks.length; i++) {
				if (state.tasks[i].id === task.id) {
                    Vue.delete(state.tasks, i)
				}
			}
		},
		toggleForm: function(state) {
			state.showForm = !state.showForm;
		},
		addTaskToList: function(state, task){
			state.tasks.push(task);
			state.tasks = state.tasks.sort((a, b) => parseFloat(a.importance) - parseFloat(b.importance));
		}
	}
};
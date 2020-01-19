import Vue from 'vue';
export default {
	state: {
		tasks: [],
		showForm: false
	},
	mutations: {
		loadTasks: function(state, tasks) {
            state.tasks = tasks;
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
			console.log(task);
			state.tasks.push(task);
		}
	}
};
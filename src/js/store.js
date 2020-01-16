export default {
	state: {
        siteContent: {}
	},
	mutations: {
		loadTasks(state, tasks) {
            state.siteContent.tasks = tasks;
        },
        updateTaskStatus(state, toUpdate){
            console.log('from store', toUpdate)
        }
	}
};
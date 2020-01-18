<template>
	<section 
		class="taskList" 
		aria-labelledby="taskListLabel"
	>
		<h2 
			id="taskListLabel" 
			class="sr-only"
		>
			Todo List
		</h2>
		<ul 
			v-if="taskList.length > 0"
			class="taskList__list" 
		>
			<li 
				v-for="(task, index) in taskList" 
				:key="task.id"
				:class="`taskList__listItem taskList__listItem--${priorityWord(task.importance)}`"
			>
				<input 
					:id="`task-${index}`"
					v-model="task.isDone"
					type="checkbox"
					true-value="true"
					false-value="false"
					class="taskList__listItem__checkbox"
					@change="statusChange($event, task)"
				>
				<label 
					:for="`task-${index}`"
					class="taskList__listItem__label"
				>
					{{ task.title }} 
					<span class="taskList__itemPriority sr-only">priority {{ priorityWord(task.importance) }} </span> 
				</label>
				<button 
					class="cross-button taskList__delete" 
					@click="deleteTask(task, index)"
				>
					<span class="sr-only">Delete Task</span>
				</button>
			</li>
		</ul>
		<template v-else>
			<p class="taskList__completed">
				Tasks Completed
			</p>
		</template>
	</section>
</template>

<script>
	import axios from 'axios';
	import { loadProgressBar } from 'axios-progress-bar';

	export default {
		computed: {
			taskList: function() {
    			return this.$store.state.tasks
  			}
		},
		methods: {
			priorityWord: function(priority) {
				let priorityText = "not set";

				if (priority === 0){
					priorityText = "high";

				} else if ( priority === 1){
					priorityText = "medium";
				}
				else if ( priority === 2){
					priorityText = "low";
				}

				return priorityText;
			},
			statusChange: function(event, task){
				loadProgressBar();
				axios.patch(`${this.$root.apiBaseUrl}/${task.id}`, {isDone: task.isDone})
                	.then((response) => {   

                	})
                	.catch(function(e){
                    	console.log(e);
                	});
			},
			deleteTask: function(task, index){
				loadProgressBar();
				axios.delete(`${this.$root.apiBaseUrl}/${task.id}`)
                	.then((response) => {   
						this.$store.commit('deleteTaskFromList', task);
                	})
                	.catch(function(e){
                    	console.log(e);
                	});
			}
		}
	}
	
</script>

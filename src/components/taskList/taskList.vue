<template>
		<section class="taskList" 
			aria-labelledby="taskListLabel">
			<h2 id="taskListLabel" class="sr-only">Todo List</h2>
            <ul class="taskList__list">
  				<li v-for="(task, index) in siteContent.tasks" 
					:key="task.id"
					:class="`taskList__listItem taskList__listItem--${priorityWord(task.importance)}`">
					<input :id="`task-${index}`"
						v-model="task.isDone"
						type="checkbox"
						true-value="true"
						false-value="false"
						class="taskList__listItem__checkbox"
						@change="statusChange($event, task)"> 
    				<label :for="`task-${index}`"
						class="taskList__listItem__label">
						{{ task.title }} 
						<span class="taskList__itemPriority sr-only">priority {{ priorityWord(task.importance) }} </span> 
					</label>
  				</li>
			</ul>
		</section>
</template>

<script>
	import axios from 'axios';
	import { loadProgressBar } from 'axios-progress-bar';

	export default {
		computed: {
			'siteContent'() {
    			return this.$store.state.siteContent
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
			statusChange(event, task){
				loadProgressBar();
				axios.patch(`${this.$root.apiBaseUrl}/${task.id}`, {isDone: task.isDone})
                	.then((response) => {   
                    	console.log(response);
                	})
                	.catch(function(e){
                    	console.log(e);
                	});
			}
		}
	}
	
</script>

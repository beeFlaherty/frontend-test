<template>
	<form 
		v-show="showForm" 
		class="newTaskForm"
	>
		<label 
			for="priority" 
			class="sr-only"
		>
			Set Priority
		</label>
		<select
			id="priority"
			ref="priority"
			v-model="priority"
			:aria-invalid="!fieldValid(priority)"
			name="priority"
			class="newTaskForm__selectInput"
			:class="{ 'newTaskForm__selectInput--invalid' : !fieldValid(priority) }"
		>
			<option value="">
				Priority
			</option>
			<option value="0">
				High
			</option>
			<option value="1">
				Medium
			</option>
			<option value="2">
				Low
			</option>
		</select>
		<label 
			for="newTask" 
			class="sr-only"
		>
			Task Name
		</label>
		<input
			id="newTask"
			ref="newTask"
			v-model="newTask"
			:aria-invalid="!fieldValid(priority)"
			name="newTask"
			class="newTaskForm__textInput"
			:class="{ 'newTaskForm__textInput--invalid' : !fieldValid(newTask) }"
			type="text" 
			placeholder="Task Name" 
		>

		<button
			class="button newTaskForm__button"
			type="submit" 
			@click="submitForm"
		>
			Add
		</button>
		<span 
			v-if="showMsg"
			class="newTaskForm__alert"
			:class="{ 'newTaskForm__alert--invalid' : !fieldValid(newTask) | !fieldValid(priority)}"
			role="alert"
		>
			{{ formMsg }}
		</span>
		<button 
			class="cross-button newTaskForm__close"
			@click="closeForm"
		>
			<span class="sr-only">Close Form</span>
		</button>
	</form>
</template>
<script>
	import axios from 'axios';
	import { loadProgressBar } from 'axios-progress-bar';

	export default {
		data() {
            return {
			  newTask: '',
			  priority: '',
			  showMsg: false,
			  formMsg: "default msg",
			  formSubmitted: false
            };
        },
		computed: {
			taskList: function() {
    			return this.$store.state.tasks
			},
			showForm: function() {
				return this.$store.state.showForm
			}
		},
		watch: {
			showForm: function () {
				if (this.showForm) {
					this.$nextTick(function() {
						this.$refs.priority.focus();
					});
				} 
			}
		},
		methods: {
			toggleForm: function() {
				this.$store.commit('toggleForm');
			},
			submitForm: function(event) {
				event.preventDefault();
				this.formSubmitted = true;

				if( this.validateForm()) {
					this.addTask();
				} else {
					this.formMsg = "Please Complete required fields";
					this.showMsg = true;

					if(this.priority ===""){
						this.$refs.priority.focus();
					} else {
						this.$refs.newTask.focus();
					}
				}
				
		
			},
			addTask: function(event) {		
				loadProgressBar();
				const task = {
					title: this.newTask,
					isDone: "false",
					importance:parseInt(this.priority)
				};

				axios.post(`${this.$root.apiBaseUrl}`, task)
                	.then((response) => { 
						this.formMsg = "Task Added";
						this.showMsg = true;
						this.$store.commit('addTaskToList', task);
						this.resetForm();
                	})
                	.catch(function(e){
                    	console.log(e);
                	});
			},
			resetForm: function() {
				const vm = this;
				this.newTask = "";
				this.priority = "";
				this.formSubmitted = false;
				setTimeout(
					function(){ 
						vm.showMsg = false;
						vm.formMsg = "";
					}, 1000);
			},
			validateForm: function() {
				let formValid = false;
				if (this.newTask !== "" & this.priority !== "") {
					formValid = true;
				}
				return formValid;
			},
			fieldValid: function(field) {
				let fieldValid = true;
				//field remains valid if empty and form has not been submitted yet
				if (this.formSubmitted & field =="") {
					fieldValid = false;
				}
				return fieldValid;
			},
			closeForm: function(event) {
				event.preventDefault();
				this.$store.commit('toggleForm');
			}
		}
	}
</script>
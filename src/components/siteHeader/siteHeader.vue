<template>
	<div class="row">
		<header class="siteHeader">
			<h1 class="siteHeader__title"> 
				Todo List
			</h1>
			<button 
				class="button siteHeader__toggleButton"
				@click="toggleForm"
			>
				Add Task
			</button>
		</header>
		<new-task-form />
	</div>
</template>

<script>
	import NewTaskForm from '../../components/newTaskForm/newTaskForm.vue';
	export default {
		components: {
			'new-task-form': NewTaskForm,
		},
		methods: {
			toggleForm: function() {
				this.$store.commit('toggleForm');
			}
		}
	}
</script>

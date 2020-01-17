<template>
	<div class="row"> 
		<task-list/>
	</div>
</template>
<script>
	import TaskList from '../../components/taskList/taskList.vue';
	export default {
		components: {
			'task-list': TaskList,
		},
		props: {
			'siteContent': Object
		}
	}
</script>
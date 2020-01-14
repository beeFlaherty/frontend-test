<template>
	<div class="page-inner"> 
		<task-list :site-content="$root.siteContent" />
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
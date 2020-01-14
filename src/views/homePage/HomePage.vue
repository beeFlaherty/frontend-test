<template>
	<div class="page-inner">
		<task-list v-bind:site-content="$root.siteContent" ></task-list>
	</div>
</template>
<script>
	import TaskList from '../../components/taskList/taskList.vue';
	export default {
		props: ['siteContent'],
		components: {
			'task-list': TaskList,
		}
	}
</script>
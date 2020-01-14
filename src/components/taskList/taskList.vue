<template>
	<div>
		<header  class="site-header">
            <ul id="example-1">
  				<li v-for="task in siteContent.tasks">
    				{{ task.title }}
  				</li>
			</ul>
		</header>
	</div>
</template>

<script>

	export default {
		props: ['siteContent']
	}
</script>

<template>
	<div class="container">
		<template v-if="!$root.loading">
			<site-header :site-content="$root.siteContent" />
			<router-view :site-content="$root.siteContent" />
		</template>
	</div>
</template>

<script>
	import SiteHeader from '../components/siteHeader/SiteHeader.vue';
	export default {
		components: {
			'site-header': SiteHeader,
		}
	}

</script>
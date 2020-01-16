<template>
	<div class="container">
		<site-header :site-content="$root.siteContent" />
		<template v-if="!$root.loading">
			<router-view :site-content="$root.siteContent" />
		</template>
		<template v-if="$root.loading">
			<div class="loading-message">
				<p> Loading ...</p>
			</div>
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
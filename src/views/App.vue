<template>
	<div class="page-inner" v-bind:class="{'site-container' : $route.name !== 'homepage'}">
		<template v-if="!$root.loading">
			<site-header v-bind:site-content="$root.siteContent" ></site-header>
			<router-view v-bind:site-content="$root.siteContent" ></router-view>
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
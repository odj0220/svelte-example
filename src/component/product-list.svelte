<script>
	import ProductItem from './product-item.svelte';
	export let products;
</script>
<section>

	{#each products as product}
		<ProductItem product={product}></ProductItem>
	{/each}
</section>

<style>

</style>

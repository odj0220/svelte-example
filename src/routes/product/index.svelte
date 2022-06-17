<script lang="ts">
	import ProductList from '../../component/product-list.svelte';
	export let products: [];
</script>

<h1>아이템 목록</h1>
<section>
	<ProductList products={products}></ProductList>
</section>

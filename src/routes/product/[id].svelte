<script lang='ts'>
	import ProductList from '../../component/product-list.svelte';
	export let product;
</script>

<h1>{product.displayName}</h1>
<div class='product-detail-wrapper'>
	<div class='row product-img'>
		<div class='container'>
			<img src='https://trend.gollala.com/api/cdn/view?url={product.imgPaths[0]}'>
		</div>
	</div>
	<div class='product-wrapper-right'>
		<div class='row product-info'>
			<h3 class='basic-info-title'>기본정보</h3>
			<div class='data-table'>
				<div class='table-content'>
					<div class='table-row'>
						<div class='header'>도매가</div>
						<div class='value' style='color: rgb(238, 37, 84); font-weight: bold;'>
							<span> {product.price}원 </span>
						</div>
					</div>
					<div class='table-row'>
						<div class='header'>매장명</div>
						<div class='value'>
							<span>{product.wholesale.name}</span>
						</div>
					</div>
					<div class='table-row'>
						<div class='header'>주소</div>
						<div class='value' style='font-weight: bold;'>
							<span> {product.wholesale.address} </span>
						</div>
					</div>
					<div class='table-row'>
						<div class='header'>대표번호</div>
						<div class='value'>
							<a class='wholesalePhone' href='tel:{product.wholesale.phone}'> {product.wholesale.phone}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class='row chart-info'></div>
	</div>
</div>
<div class='products-wrapper ng-tns-c150-2'>
	<h2 class='ng-tns-c150-2'> 비슷한 아이템
		<small class='small'>*모델컷 보다 상품이 중심에 있는 상품 상세컷을 선택 하시면 더 나은 결과가 표시됩니다.</small>
	</h2>
	<ProductList class="products-container" products={product.similar}></ProductList>
</div>

<style>
   .product-detail-wrapper {
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        margin-bottom: 60px;
    }
   .product-detail-wrapper .product-img {
       position: relative;
       min-height: 50vh;
       flex: 1;
       background-color: #0000000d;
   }
   .product-detail-wrapper .row {
       display: inline-block;
       width: 100%;
       padding: 10px;
   }
   .product-detail-wrapper .product-wrapper-right {
       flex: 1;
       padding: 0 0 0 35px;
       max-width: 50%;
       display: flex;
       flex-direction: column;
   }
   .product-detail-wrapper .product-img .container {
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%,-50%);
       width: 100%;
       height: 100%;
       padding: 10px;
       text-align: center;
   }
   .product-detail-wrapper .product-img .container img {
       height: 100%;
       max-width: 100%;
       object-fit: contain;
   }
   .product-detail-wrapper .row {
       display: inline-block;
       width: 100%;
       padding: 10px;
   }
   .product-detail-wrapper .product-info {
       flex: .8;
   }
   .product-detail-wrapper .row {
       display: inline-block;
       width: 100%;
       padding: 10px;
   }
   .product-detail-wrapper.chart-info {
       flex: 1.5;
   }
   .product-detail-wrapper .product-info .basic-info-title {
       font-size: 18px;
       margin: 0;
   }
   .product-detail-wrapper .product-info .data-table {
       margin: 0;
   }
   .data-table .table-content {
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       align-content: flex-start;
       height: auto;
       padding: 10px;
       padding-bottom: 0;
   }
   .product-detail-wrapper .product-info .table-content {
       height: unset;
   }
   table-row {
       width: 50%;
       min-height: 26px;
       line-height: 26px;
       font-size: 14px;
       padding: 0;
   }
   .product-detail-wrapper .product-info .table-row {
       width: 100%;
   }
   .product-detail-wrapper .product-info .data-table .table-row {
       font-size: 14px;
   }
   .data-table .table-row .header {
       display: inline-block;
       width: 20%;
       font-weight: 700;
       vertical-align: top;
   }
   .product-detail-wrapper .product-info .data-table .table-row .header {
       font-weight: 500;
   }
   .data-table .table-row .value {
       display: inline-block;
       width: 79%;
       vertical-align: top;
   }
   .data-table .table-content {
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       align-content: flex-start;
       height: auto;
       padding: 10px;
       padding-bottom: 0;
   }
   .product-detail-wrapper .product-info .data-table .table-row {
       font-size: 14px;
   }
   .data-table .table-row .header {
       display: inline-block;
       width: 20%;
       font-weight: 700;
       vertical-align: top;
   }
   .product-detail-wrapper .product-info .data-table .table-row .header {
       font-weight: 500;
   }
   .products-wrapper {
       margin-top: 60px;
       margin-bottom: 50px;
   }
   .products-wrapper h2 {
       font-size: 20px;
   }
   .products-wrapper .products-container {
       overflow: hidden;
       margin-left: -8px;
       margin-right: -8px;
   }
   .products-wrapper h2 small {
       color: #000;
       margin-left: 10px;
       font-weight: 400;
       font-size: 15px;
       opacity: .5;
   }
</style>

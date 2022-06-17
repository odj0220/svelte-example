<script>
	export let product;
</script>

<a class="product-wrap" href='/product/{product.id}'>
	<div class="product-item">
		<div class="item-wrapper">
			<div class="item-content">
				<div class="image-wrapper">
					<div class="main-image">
						<img src="https://trend.gollala.com/api/cdn/view?url={product.imgPaths[0]}">
					</div>
				</div>
			</div>
			<div class="item-footer">
				<div class="building"> {product.displayName} </div>
				<div class="price ng-star-inserted"> {product.price}원 </div>
			</div>
		</div>
	</div>
</a>


<style>
	.product-wrap {
      padding-top: 25px;
      display: inline-block;
      width: 16.6%;
      overflow: hidden;
      border-bottom: 1px solid #ddd;
	}
	.product-item {
      position: relative;
      width: 100%;
      height: 100%;
      cursor: pointer;
      -webkit-user-select: none;
      user-select: none;
      margin-bottom: 45px;
  }
  .product-item:before {
      content: "";
      display: block;
      padding-top: 133%;
  }
	.item-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 10px;
	}
  .item-content {
      width: 100%;
      height: 100%;
      background: #eaeaea87;
      position: relative;
      border: 1px solid #ddd;
  }
  .image-wrapper {
      display: inline-block;
      vertical-align: top;
      width: 100%;
      height: 100%;
  }
  .main-image {
      position: relative;
      width: 100%;
      height: 100%;
  }
  .main-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
  .item-footer {
      padding-top: 5px;
      display: flex;
      align-items: baseline;
      justify-content: flex-start;
  }
  .building {
      font-size: 12px;
      font-weight: 100;
      margin-right: 8px;
      color: #555;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
  }
  .price {
      font-size: 13px;
      font-weight: 700;
      color: #ee2554;
  }
</style>

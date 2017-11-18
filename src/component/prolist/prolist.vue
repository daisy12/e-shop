<template>
	<main>
		<div class="prolist_box">
			<ul class="prolist">
				<li class="active">全部</li>
				<li>塑料</li>
				<li>玻璃</li>
				<li>陶瓷</li>
				<li>便当盒</li>
			</ul>
			<ul class="show_list">
				<li v-for="(n,i) in data">
					<router-link :to="'/proCenter/'+n.id">
						<img :src="n.imgSrc"/>
						<div class="tig" v-if="n.checked">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</router-link>
					<p>{{n.title}}</p>
					<div class="msg">
						<span class="buy"></span>
						<span class="price">￥{{n.price}}</span>
					</div>
				</li>
			</ul>
		</div>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				data:[{
				'shop':'杯子友情',
			 	'title':'乐扣乐扣薰衣草马克杯',
			 	'msg':'商品促销:2016.6.28-7.31购买迪士尼米奇米妮系列享受3.2折优惠',
			 	'shopid':'LHC101P',
			 	'price':'79.00',
			 	'originPrice':'188.00',
			 	'amount':'1',
			 	'tig':'新品上市',
			 	'imgSrc':'./src/assets/image/car_01.png',
			 	'checked':false
			},
			{
				'shop':'杯子旗舰店',
			 	'title':'乐扣乐扣薰衣草马克杯',
			 	'msg':'',
			 	'shopid':'LHC101P',
			 	'price':'79.00',
			 	'originPrice':'188.00',
			 	'amount':'2',
			 	'tig':'',
			 	'imgSrc':'./src/assets/image/car02.jpg',
			 	'checked':false
			},{
				'shop':'杯子友情',
			 	'title':'乐扣乐扣薰衣草马克杯',
			 	'msg':'商品促销:2016.6.28-7.31购买迪士尼米奇米妮系列享受3.2折优惠',
			 	'shopid':'LHC101P',
			 	'price':'79.00',
			 	'originPrice':'188.00',
			 	'amount':'1',
			 	'tig':'新品上市',
			 	'imgSrc':'./src/assets/image/car_01.png',
			 	'checked':false
			},
			{
				'shop':'杯子旗舰店',
			 	'title':'乐扣乐扣薰衣草马克杯',
			 	'msg':'',
			 	'shopid':'LHC101P',
			 	'price':'79.00',
			 	'originPrice':'188.00',
			 	'amount':'2',
			 	'tig':'',
			 	'imgSrc':'./src/assets/image/car02.jpg',
			 	'checked':false
			},{
				'shop':'杯子友情',
			 	'title':'乐扣乐扣薰衣草马克杯',
			 	'msg':'商品促销:2016.6.28-7.31购买迪士尼米奇米妮系列享受3.2折优惠',
			 	'shopid':'LHC101P',
			 	'price':'79.00',
			 	'originPrice':'188.00',
			 	'amount':'1',
			 	'tig':'新品上市',
			 	'imgSrc':'./src/assets/image/car_01.png',
			 	'checked':false
			},
			{
				'shop':'杯子旗舰店',
			 	'title':'乐扣乐扣薰衣草马克杯',
			 	'msg':'',
			 	'shopid':'LHC101P',
			 	'price':'79.00',
			 	'originPrice':'188.00',
			 	'amount':'2',
			 	'tig':'',
			 	'imgSrc':'./src/assets/image/car02.jpg',
			 	'checked':false
			}]
			}
		}
	}
</script>
<style scoped>
	main{
		position: absolute;
		top:0;
		left:0;
		padding-top:50px;
		box-sizing: border-box;
		height: 100%;
		background: #fff;
		margin-bottom:120px;
	}
	.prolist{
		height: 34px;
		line-height: 34px;
		font-size: 12px;
		color:#0063B5;
	}
	.prolist li{
		float:left;
		margin:0 10px;
	}
	.prolist li.active{
		color:#FFC000;
	}
	.show_list{
		overflow: hidden;
	}
	.show_list>li{
		float:left;
		width:50%;
		padding: 6px;
		box-sizing: border-box;
		border:1px solid #106dba;
		margin-right: -1px;
	}
	.show_list>li>a{
		display: inline-block;
		width:100%;
		box-sizing: border-box;
		position: relative;
	}
	.show_list>li>a>img{
		width:100%;
	}
	.show_list>li>p{
		color:#106dba;
		line-height: 24px;
		width:100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.show_list .msg{
		height: 34px;
		line-height: 34px;
	}
	.show_list .msg .buy{
		display: inline-block;
		width:26px;
		height: 15px;
		background: url('../../assets/image/logo1.png') no-repeat;
		background-size: 26px 15px;
	}
	.show_list .msg .price{
		float:right;
		color:#ffc000;
	}
	 
</style>
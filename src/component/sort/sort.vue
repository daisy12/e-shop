<template>
	<main>
		<div class="sort_center">
			<div class="wrap">
				<span class="return_icon" @click="go">
					<img src="../../assets/image/sort_return.png" />
				</span>
				<div class="search_box">
					<span class="search_icon"></span>
					<input />
					<span class="search_tel"></span>
				</div>
			</div>
		</div>
		<div class="nav_box">
			<ul class="sort_nav">
				<li class="active">
					<router-link to="/prolist">密封容器</router-link>
				</li>
				<li>
					<a>厨房用品</a>
				</li>
				<li>
					<a>生活用品</a>
				</li>
				<li>
					<a>幼儿卡通</a>
				</li>
				<li>
					<a>户外用品</a>
				</li>
				<li>
					<a>厨房用电</a>
				</li>
				<li>
					<a>水瓶水杯</a>
				</li>
				<li>
					<a>盖子配件</a>
				</li>
			</ul>
			<div class="sub_des">
				<dl>
					<dt>塑料</dt>
					<dd>
						<a>市面领扣</a>
						<a>旋转领扣</a>
						<a>简易型</a>
						<a>其它</a>
					</dd>
				</dl>
				<dl>
					<dt>玻璃</dt>
					<dd>
						<a>市面领扣</a>
						<a>旋转领扣</a>
						<a>简易型</a>
						<a>其它</a>
					</dd>
				</dl>
				<dl>
					<dt>陶瓷</dt>
					<dd>
						<a>市面领扣</a>
					</dd>
				</dl>
				<dl>
					<dt>野餐便当盒</dt>
					<dd>
						<a>塑料</a>
						<a>玻璃</a>
						<a>陶瓷</a>
						<a>保温</a>
					</dd>
				</dl>
			</div>
		</div>
		<router-view></router-view>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			go(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped>
	main{
		position: fixed;
		width:100%;
		height: 100%;
		top:0;
		left:0;
		overflow: scroll;
		padding-top: 50px;
		z-index:3;
	}
	.sort_wrap{
		position: absolute;
		top:0;
		left:0;
		width:100%;
		font-family: "微软雅黑";
		margin-bottom: 70px;
		background: #fff;
	}
	.sort_center{
	 	height: 50px;
	 	background:#0063b5;
	 	padding:0 26px;
	 	width:100%;
	 	box-sizing: border-box;
	 	font-family: "微软雅黑";
	 	position: fixed;
		top:0;
		left:0;
		z-index:40;
	 }
	 .sort_center .wrap{
	 	width:100%;
	 	height: 100%;
	 	position: relative;
	 }
	 .sort_center .return_icon{
	 	position: absolute;	
	 	left:0;
	 	top:50%;
	 	transform: translateY(-50%);
	 	width:20px;
	 	height: 20px;
	 	display: inline-block;
	 }
	 .sort_center .return_icon img{
	 	height: 100%;
	 }
	 .sort_center .wrap .search_box{
	 	width:70%;
	 	position: absolute;
	 	top:50%;
	 	left:50%;
	 	transform: translate(-50%,-50%);
	 	border:1px solid #fff;
	 	border-radius: 4px;
	 }
	 .sort_center .wrap .search_box input{
	 	background: transparent;
	 	width:100%;
	 	border:none;
	 	outline: none;
	 	line-height: 26px;
	 	padding:0 26px;
	 	box-sizing: border-box;
	 	color:#fff;
	 }
	 .search_box .search_icon{
	 	position: absolute;
	 	display: inline-block;
	 	width: 26px;
	 	height: 26px;
	 	top:0;
	 	left:0;
	 	background: url('../../assets/image/search_01.png') no-repeat center center;
	 	background-size: 15px;
	 }
	 .search_box .search_tel{
	 	position: absolute;
	 	display: inline-block;
	 	width: 26px;
	 	height: 26px;
	 	top:0;
	 	right: 0;
	 	background: url('../../assets/image/search_02.png') no-repeat center center;
	 	background-size: 15px;
	 }
	 .sort_nav{
	 	width:90px;
	 	color:#fff;
	 	background: #0063B5;
	 	line-height: 40px;
	 	float:left;
	 	font-size: 14px;
	 }
	 .sort_nav li{
	 	border:1px solid #fff;
	 	border-right: none;
	 	text-align: center;
	 	position: relative;
	 	text-decoration: none;
	 }
	  .sort_nav li a{
	  	  text-decoration: none;
	  }
	 .sort_nav li.active{
	 	background: #fff;
	 	border:1px solid #0063B5;
	 	border-right:none;
	 	color:#0063B5;
	 }
	 .sort_nav li.active a{
	 	color:#0063B5;
	 	text-decoration: none;
	 }
	 .sort_nav li>a:before{
	 	content: "";
	 	display: inline-block;
	 	width:18px;
	 	height: 18px;
	 	background: url('../../assets/image/sort01.png') no-repeat center center;
	 	background-size: 18px;
	 	vertical-align: middle;
	 	margin-right: 6px;
	 }
	 .sort_nav li:nth-of-type(2)>a:before{
	 	background: url('../../assets/image/sort02.png') no-repeat center center;
	 	background-size: 18px;
	 }
	 .sort_nav li:nth-of-type(3)>a:before{
	 	background: url('../../assets/image/sort03.png') no-repeat center center;
	 	background-size: 18px;
	 }
	 .sort_nav li:nth-of-type(4)>a:before{
	 	background: url('../../assets/image/sort04.png') no-repeat center center;
	 	background-size: 18px;
	 }
	 .sort_nav li:nth-of-type(5)>a:before{
	 	background: url('../../assets/image/sort05.png') no-repeat center center;
	 	background-size: 18px;
	 }
	 .sort_nav li:nth-of-type(6)>a:before{
	 	background: url('../../assets/image/sort06.png') no-repeat center center;
	 	background-size: 18px;
	 }
	 .sort_nav li:nth-of-type(7)>a:before{
	 	background: url('../../assets/image/sort07.png') no-repeat center center;
	 	background-size: 18px;
	 }
	 .sort_nav li:nth-of-type(8)>a:before{
	 	background: url('../../assets/image/sort08.png') no-repeat center center;
	 	background-size: 18px;
	 }
	 .sort_nav li .des{
	 	position: absolute;
	 	left:90px;
	 	top:0;
	 	width:70%;
	 }
	 .sub_des{
	 	font-size: 12px;
	 }
	 .sub_des dl{
	 	height: 40px;
	 	line-height: 40px;
	 	box-sizing: border-box;
	 }
	 .sub_des dl dt{
	 	float:left;
	 	color:#0063B5;
	 	padding: 0 10px;
	 }
	 .sub_des dl dd{
	 	float:left;
	 	color:#FFC000;
	 }
</style>
<template>
	<main class="login">
		<div class="pic">
			<img src="../../assets/image/login.jpg"/>
		</div>
		<div class="login_box">
			<div class="wrap">
				<div class="user">
					<span class="icon"></span>
					<span class="tig" v-if="userShow">用户名/邮箱/手机号</span>
					<input type="text" @click="changeUser" @blur="changeUserTo()" v-model="userCon"/>
				</div>
				<div class="pass">
					<span class="icon"></span>
					<span class="tig" v-if="passShow">密码</span>
					<input type="text" @focus="changePass" @blur="changePassTo()" v-model="passCon"/>
				</div>
			</div>
		</div>
		<div class="recom">
			<div class="checkItem">
				<span :class="{active:checked}" @click="selectItemFun()"></span>
			</div>
			<span>记住登录密码</span>
		</div>
		<a class="login_btn">登录</a>
		<div class="login_register">
			<a @click="registerBtn">立即注册</a>
			<a>忘记密码</a>
		</div>
		<div class="login_btm">
			<div class="btm_tit">
				<span class="hr_l"></span>
				<span>一键登录</span>
				<span class="hr_r"></span>
			</div>
			<ul>
				<li>
					<span>QQ</span>
				</li>
				<li>
					<span>微信</span>
				</li>
			</ul>
		</div>
		<span class="return" @click="go()">&lt;</span>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				checked:false,
				userShow:true,
				passShow:true,
				userCon:'',
				passCon:''
			}
		},
		methods:{
			selectItemFun(){
				this.checked=!this.checked;
			},
			go(){
				this.$router.go(-1);
			},
			changeUser(){
				this.userShow=false;
			},
			changePass(){
				this.passShow=false;
			},
			changeUserTo(){
				if(this.userCon==''){
					this.userShow=true;
				}
			},
			changePassTo(){
				if(this.passCon==''){
					this.passShow=true;
				}
			},
			registerBtn(){
				this.$router.replace({path:'/register'})
			}
		}
	}
</script>
<style scoped>
	.login{
		position: fixed!important;
		top:0;
		left:0;	
		z-index:31;
		width:100%;
		height: 100%;
		background: #fff;
	}
	.checkItem>span{
		display: inline-block;
		width:20px;
		height: 20px;
		border:1px solid #0063b5;
		border-radius: 50%;
	}
	.checkItem{
		float: left;
		margin-right: 4px;
	}
	.checkItem span.active{
		background: url('../../assets/image/select02.png') no-repeat;
		background-size: 20px 20px;
	}
	.login .pic{
		width:100%;
	}
	.login .pic img{
		width:100%;
	}
	.login_box{
		width:100%;
		margin-top:30px;
		box-sizing: border-box
	}
	.return{
		position: fixed;
		top:10px;
		left:10px;
		font-size: 24px;
		font-weight: bolder;
		color:#0063B5;
	}
	.login_box{
		background: #0063B5;
		padding: 0 30px;
	}
	.login_box>.wrap>div{
		height: 42px;
		width:100%;
		position: relative;
	}
	.login_box>.wrap>div .tig{
		position: absolute;
		top:0;
		left:50px;
		line-height: 42px;
		color:#fff;
		font-size: 14px;
	}
	.login_box .user{
		border-bottom:1px solid #fff;
	}
	.login_box>div input{
		border:none;
		outline: none;
		background: transparent;
		margin-left:50px;
		height: 42px;
		line-height: 42px;
		color:#fff;	 
		z-index:20;
	}
	.login_box .icon{
		display: inline-block;
		width:42px;
		height: 20px;
		position: absolute;
		top:50%;
		left:0;
		transform: translateY(-50%);
		background: url('../../assets/image/login_01.png') no-repeat center center;
		background-size:20px;
		border-right: 1px solid #fff;
	}
	.login_box .pass .icon{
		background: url('../../assets/image/login_02.png') no-repeat center center;
		background-size:16px;
	}
	
	.recom{
		padding-top:40px;
		width:122px;
		margin:0 auto;
		height: 20px;
		color:#0063B5;
		font-size: 14px;
	}
	.login_btn{
		width:80%;
		margin:10px auto;
		display: block;
		background: #0063B5;
		line-height: 34px;
		color:#fff;
		padding: 0;
		text-align: center;
		border-radius: 20px;
	}
	.login_register{
		width:80%;
		line-height: 24px;
		margin: 0 auto;
		color: #0063B5;
		font-size: 14px;
	}
	.login_register a:nth-of-type(2){
		float:right;
	}
	.login_btm{
		position: fixed;
		left:0;
		bottom:0;
		width:100%;
		font-size: 12px;
		color:#0063B5;
	}
	.login_btm .btm_tit{
		height: 30px;
		width:100%;
		position: relative;
	}
	.login_btm .btm_tit .hr_l{
		position: absolute;
		width: 30%;
		border-top:1px solid #0063B5;
		top:15px;
		left:30px;
	}
	.login_btm .btm_tit .hr_r{
		position: absolute;
		width:30%;
		border-top:1px solid #0063B5;
		top:15px;
		right:30px;
	}
	.login_btm .btm_tit span:nth-of-type(2){
		position: absolute;
		width:50px;
		left:50%;
		top:50%;
		transform: translate(-50%,-50%);
	}
	.login_btm ul{
		width:100%;
		height: 60px;
		margin-bottom: 20px;
	}
	.login_btm ul li{
		width:50%;
		float:left;
		text-align: center;
	}
	.login_btm ul li:before{
		display: block;
		content: "";
		background: url('../../assets/image/qq.png') no-repeat;
		width: 40px;
		height: 40px;
		background-size: 40px;
		margin:0px auto 8px;
		
	}
	.login_btm ul li:nth-of-type(2):before{
		display: block;
		content: "";
		background: url('../../assets/image/weixin.png') no-repeat;
		width: 40px;
		height: 40px;
		background-size: 40px;
		margin:0px auto 8px;
	}
</style>

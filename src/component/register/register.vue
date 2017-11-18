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
				<div class="repass pass">
					<span class="icon"></span>
					<span class="tig" v-if="repassShow">确认密码</span>
					<input type="text" @focus="rechangePass" @blur="rechangePassTo()" v-model="repassCon"/>
				</div>
				<div class="test pass">
					<span class="icon"></span>
					<span class="tig" v-if="testShow">手机/邮箱 验证码激活</span>
					<input type="text" @focus="changeTest" @blur="changeTestTo()" v-model="testCon"/>
				</div>
			</div>
		</div>
		 
		<a class="login_btn">注册</a>
		<div class="login_register">
			<a>手机注册</a>
			<a>邮箱注册</a>
		</div>
		<div class="login_btm">
			 <img src="../../assets/image/res.png" />
			 <p>welcome!</p>
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
				repassShow:true,
				testShow:true,
				userCon:'',
				passCon:'',
				repassCon:'',
				testCon:''
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
			rechangePass(){
				this.repassShow=false;
			},
			changeTest(){
				this.testShow=false;
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
			rechangePassTo(){
				if(this.passCon==''){
					this.repassShow=true;
				}
			},
			changeTestTo(){
				if(this.testCon==''){
					this.testShow=true;
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
		opacity: 0.7;
	}
	.login_box .user,.login_box .pass{
		border-bottom:1px solid #fff;
	}
	.login_box .pass:nth-last-of-type(1){
		border:none;
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
	
	.login_btn{
		width:80%;
		margin:30px auto 10px;
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
		text-align: center;
	}
	.login_btm{
		padding-bottom: 30px;
	}
	.login_btm img{
		width:55px;
		height: 55px;
	}
</style>

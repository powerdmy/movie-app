<template>
	<div class="loading" v-if="!end">
		<div class="lds-css ng-scope" style="width: 100px; height: 100px;">
			<div style="width:100%;height:100%" class="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Loading',
	props: {
		end: {
			type: Boolean,
			default: false
		}
	}
}
</script>
<style lang="less">
.loading{
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -50px;
	margin-left: -50px;
	z-index: 999;
}
@keyframes lds-ripple {
  0% {
    top: 96px;
    left: 96px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 18px;
    left: 18px;
    width: 156px;
    height: 156px;
    opacity: 0;
  }
}
@-webkit-keyframes lds-ripple {
  0% {
    top: 96px;
    left: 96px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 18px;
    left: 18px;
    width: 156px;
    height: 156px;
    opacity: 0;
  }
}
.lds-ripple {
  position: relative;
}
.lds-ripple div {
  box-sizing: content-box;
  position: absolute;
  border-width: 4px;
  border-style: solid;
  opacity: 1;
  border-radius: 50%;
  -webkit-animation: lds-ripple 1.3s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  animation: lds-ripple 1.3s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(1) {
  border-color: #0055a5;
}
.lds-ripple div:nth-child(2) {
  border-color: #45aee7;
  -webkit-animation-delay: -0.65s;
  animation-delay: -0.65s;
}
.lds-ripple {
  width: 100px !important;
  height: 100px !important;
  -webkit-transform: translate(-50px, -50px) scale(0.5) translate(50px, 50px);
  transform: translate(-50px, -50px) scale(0.5) translate(50px, 50px);
}
</style>

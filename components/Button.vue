<template>
<div>
	<NuxtLink v-if="to" class="my-button" :to="to">
		{{ text }}
	</NuxtLink>
	<button v-else
		class="my-button"
		:type="type"
		:value="value"
		>
		{{ text}}
    </button>
	
</div>
</template>

<script>
export default {
    props: {
		to: '',
		text: '',
		value: '',
		type: '',
	}
}
</script>

<style scoped>
.my-button {
	background:linear-gradient(to bottom, #f57dab 5%, #e84e89 100%);
	background-color:#f57dab;
	border-radius:18px;
	border: none;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:14px;
	padding:13px 9px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
  	transition: all 300ms ease;
}
.my-button:hover {
	background:linear-gradient(to bottom, #e84e89 5%, #f57dab 100%);
	background-color:#e84e89;
}
.my-button:active {
	position:relative;
	top:1px;
}
</style>
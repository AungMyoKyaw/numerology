var nname=document.getElementById('burname');
var date=document.getElementById('brithdate');
var namer=document.getElementById('namenum');
var dater=document.getElementById('numero');
nname.onkeyup = function(){
	if(this.value!=="")	{
		namer.innerHTML=formatter(false,nameNumerology(this.value));
	} else {
		namer.innerHTML="-";
	}
};
date.onkeyup=function(){
	if(this.value!==""){
		dater.innerHTML=formatter(true,numberbaydin(this.value));
	} else {
		dater.innerHTML="-";
	}
};
function formatter(date,num){
	if(date===true){
		return "မွေးရက်အရ "+nname.value+" သည် "+num+" ဂဏန်းသမားဖြစ်သည်။"
	} else {
		return "အမည်အရ "+nname.value+" သည် "+num+" ဂဏန်းသမားဖြစ်သည်။"
	}
}
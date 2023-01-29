var input=document.getElementsByTagName('input');
var button=document.getElementsByTagName('button');
var errortext=document.getElementById('errortext');

button=button[0];
input=input[0];

button.onclick=()=>
{
	if(/^([a-zA-Z\d\.\_\-]+)@([a-zA-Z]+)\.([a-zA-Z\.]+)([\s]{0,3})$/.test(input.value)==false)
	
	{errortext.style.display="block";
	input.style.border="hsl(354, 100%, 66%) .02rem solid";}
else
	{errortext.style.display="none";
	input.style.border="hsl(223, 87%, 63%) .02rem solid";}
}

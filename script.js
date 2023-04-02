//your JS code here. If required.
var outputEle=document.getElementById("#output");

var promise1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Hello, world!");
	},1000)
})

promise1.then((data)=>{
	outputEle.innerHTML=data;
}).catch((error)=>{
	console.log(error);
})
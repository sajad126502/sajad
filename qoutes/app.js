/*
 function shareOnFB(){
       var url = "https://www.facebook.com/sharer/sharer.php?u=https://yoururl.com&t=your message";
       window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
       return false;
  }


  */ 
 var actualdata=""
 var rand=""
 var mdata=""
function shareOntwitter(){
    var url = `https://twitter.com/intent/tweet?url=${mdata}&text=${actualdata[rand].text}`;
    TwitterWindow = window.open(url, 'TwitterWindow',width=600,height=300);
    return false;
 }
console.log("welcome")
let jdata=document.querySelector(".jdata")
let btn=document.querySelector(".btn")
let adata=document.querySelector(".adata")
let img=document.querySelector(".img")
api="https://type.fit/api/quotes"
getdata=async ()=>{
data=await fetch(api)
actualdata=await data.json()

}
randomdata=()=>{
   console.log( typeof(actualdata))
   rand=Math.ceil(Math.random()*actualdata.length)
   jdata.innerHTML=`<i class="fas fa-cog"></i> ${actualdata[rand].text}<i class="fas fa-cog"></i>`
   if(actualdata[rand].author==null)
   mdata="Author: Unknown"
   else
   mdata="Author: "+actualdata[rand].author
   adata.innerHTML=mdata
}

getdata().then(randomdata)



btn.addEventListener("click",randomdata)
img.addEventListener("click",shareOntwitter)

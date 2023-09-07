var arr = [
{dp:"https://images.unsplash.com/photo-1631689644455-b570154363e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80 ",story:"https://images.unsplash.com/photo-1634698813343-e2b78707c06b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"},
{dp:"https://images.unsplash.com/photo-1606967365396-f6b8765c68cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",story:"https://images.unsplash.com/photo-1642774667024-e9e2f37914d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1907&q=80"},
{dp:"https://images.unsplash.com/photo-1679630734756-6491db7c99ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",story:"https://images.unsplash.com/photo-1678594143074-d56c55d7e166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"},
{dp:"https://images.unsplash.com/photo-1669410612430-8077c029870a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",story:"https://images.unsplash.com/photo-1652521711683-85f304c4c78b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"},
{dp:"https://images.unsplash.com/photo-1652521711695-900ac4c6e080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",story:"https://images.unsplash.com/photo-1634698813343-e2b78707c06b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"},
{dp:"https://images.unsplash.com/photo-1663515868853-2bfbdba39b8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80",story:"https://images.unsplash.com/photo-1663515179778-747ce4a7fafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"},    
]
let savedImage = ""
arr.forEach(function(element,index)
{
    savedImage +=`<div class="story">
    <img id="${index}" src="${element.dp}"> 
 </div>`
})
document.querySelector(".storybox").innerHTML=savedImage; 

document.querySelector(".storybox").addEventListener('click',function(get)
{
    document.querySelector(".full-screen").style.display="block";
    // console.log(arr[get.target.id].story);
   document.querySelector(".full-screen").style.backgroundImage = `url(${ arr[get.target.id].story})`


   setTimeout(function(){
    document.querySelector(".full-screen").style.display="none";
   },3000)

})





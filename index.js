var l = document.querySelectorAll(".drum").length
var arr = ["wtom-1","atom-2","stom-3","dtom-4","jcrash","ksnare","lkick-bass"]
for(var i = 0;i<l;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    this.style.color = "white"
    var k = this.innerHTML
    for (var j =0;j<l;j++){
        if(k===arr[j][0]){
            break
        }
    }
var audio = new Audio("sounds/"+ arr[j].slice(1)+".mp3")
audio.play()
})

}
for(var i = 0;i<l;i++){
document.addEventListener("keydown",function(event){
    var ki = event.key
    for(var j = 0;j<l;j++){
        if(ki===arr[j][0]){
            break
        }
    }
    var audio = new Audio("sounds/"+ arr[j].slice(1)+".mp3")
    audio.play()
})
}

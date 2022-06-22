let aButton=document.getElementById("aButton")
let image=document.getElementById("image")
aButton.addEventListener("click", function (){
    fetch("https://api.themoviedb.org/3/movie/550")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src=result.message
    })
    .catch(err=>console.log(err))
})



// const API_URL=
// "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9f7a2b3abcaf511ee12205295aa3d257";
// const IMAGE_PATH="https://image.tmdb.org/t/p/w1280/";

//  const SEARCH_URL=
// "https://api.themoviedb.org/3/search/movie?api_key=9f7a2b3abcaf511ee12205295aa3d257&query=\""
// const form=document.getElementById("form")
// const search=document.getElementById("search")
// const main=document.getElementById("main")

// // Get movies
// getMovies(API_URL)
// async function getMovies(url){
// const res=await fetch(url)
// const data=await res.json()
// displayMovies(data.results)
// console.log(data.results);
// }
// function displayMovies(movies){
//     main.innerHTML=""
//     movies.forEach((movie)=> {
//     const {title, poster_path, vote_average, overview}=movie
//     const moviesElement=document.createElement("div")
//     moviesElement.classList.add("movie")
//     moviesElement.innerHTML=`
//     <img 
//     src="${IMAGE_PATH + poster_path}"
//     alt="${title}"
//     />
//     <div class="movie-info">
//     <h3>${title}</h3>
//     <span class="${getClassByRate( vote_average)}"> ${vote_average}</span>
//     </div>
//     <div class="overview">
//     <h3>Overview:</h3>
//     ${overview}
//     </div>
//     `;
//     main.appendChild(moviesElement);
//     });
    
// }
// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     const searchValue=search.value
//     if(searchValue && searchValue !==""){
//         getMovies(SEARCH_URL+searchValue)
//         searchValue=""
//      }else
//      window.location.reload()
// })




















// let hoverA=document.getElementById("hoverA");
// hoverA.addEventListener("mouseover",showOverView);
// function showOverView(){
// return hoverA.innerHTML=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quod explicabo dicta autem atque ea nam reiciendis quidem facere sequi!"
// }
// hoverA.addEventListener("mouseout",removeOverView);
// function removeOverView(){
// return hoverA.innerHTML="OverView"
// };






const API_KEY='api_key=9f7a2b3abcaf511ee12205295aa3d257';
const BASE_URL='https://api.themoviedb.org/3';
const API_URL= BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_KEY;






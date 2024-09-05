const form=document.querySelector("form");
const container=document.querySelector(".image-container");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let query=form.querySelector('input').value;
    console.log(query);

    if(query==""){
        query="Dark";
    }
    
    movieapi(query);
})
async function movieapi(query){
    const req= await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const movies=await req.json();
  
console.log(movies);
    makeImages(movies);
}

function makeImages(movies){
    for(movie of movies){
        let src=movie.show.image.medium;
        const img=document.createElement("img");
        img.src=src;

        container.appendChild(img);
    }
}



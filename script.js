const button = document.querySelectorAll(".button");

for(let i = 0; i <= button.length - 1; i++){
    button[i].addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
    });
}
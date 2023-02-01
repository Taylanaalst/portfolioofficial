const holder = document.querySelector(".leafs");
const cssoptions = ["downleft", "downright"];
let selectedcss = 0;

setInterval(() => {
    let o = document.createElement("img");
    o.classList.add("leaf");
    o.src = "img/leaf.png";
    o.classList.add(cssoptions[selectedcss]);
    o.style.rotate = `${Math.random() * 180}deg`;
    let pos = Math.floor(Math.random() * document.body.clientWidth);
    o.style.left = `${pos}px`;
    holder.append(o);
    setTimeout(() => {
        o.remove();
    }, 10000);
    $(".leaf").animate({top: $(".leafs").height() + 50}, 10000);
}, 200);
setInterval(() => {
    if(selectedcss == cssoptions.length - 1){
        selectedcss = 0
    }else{
        selectedcss++;
    }
},23);




const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    }); 
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));
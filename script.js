const togglebtn = document.querySelector(".nav-btn-open");
const closetoggle = document.querySelector(".nav-btn-close")
const mainnav = document.querySelector(".main-nav");
const red_arrow = document.querySelectorAll(".main-nav h5");
const links = document.querySelectorAll(".links");
function toggle(){
    if(mainnav.classList.contains('show-main-nav')){
        mainnav.classList.remove('show-main-nav')
    }
    else{
        mainnav.classList.add('show-main-nav')
        togglebtn.style.display = "none";
        closetoggle.style.display = "block";

    }
}
function close_toggle(){
    if(mainnav.classList.contains('show-main-nav')){
        mainnav.classList.remove('show-main-nav');
        togglebtn.style.display = "block";
        closetoggle.style.display = "none";
    }
}


closetoggle.addEventListener('click', function(){
    if(mainnav.classList.contains('show-main-nav')){
        mainnav.classList.remove('show-main-nav');
        togglebtn.style.display = "block";
        closetoggle.style.display = "none";
    }
})
document.addEventListener('click', function(e){
    if(e.target == red_arrow[0]){
            links[1].classList.remove('show-sub-nav');
            links[2].classList.remove('show-sub-nav');
            links[0].classList.toggle('show-sub-nav');
            }
    else if(e.target == red_arrow[1]){
        links[0].classList.remove('show-sub-nav');
        links[2].classList.remove('show-sub-nav');
        links[1].classList.toggle('show-sub-nav');
    }
    else if(e.target == red_arrow[2]){
        links[0].classList.remove('show-sub-nav');
        links[1].classList.remove('show-sub-nav');
        links[2].classList.toggle('show-sub-nav');
    }
    else if(e.target == togglebtn){
        toggle()
        }
    else if(e.target == closetoggle){
        close_toggle()
        }
    else{
        links[0].classList.remove('show-sub-nav');
        links[1].classList.remove('show-sub-nav');
        links[2].classList.remove('show-sub-nav');
        };
    
    }
)

/* mobile */
function toggleMenu(){
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
}

/* scroll leve */

function ScrollActive(sectionId){
    const section = document.getElementById('sectionId');
    if(!section){
        return;
    }

    const headerHeight = 70;
    const sectionPosition = section.offsetTop - headerHeight;
    window.scrollTo({top: sectionPosition, behavior: "smooth"});

    const menu = document.getElementById("navMenu");
    menu.classList.toggle("deactive");

}
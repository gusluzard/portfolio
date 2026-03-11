const progressBars = document.querySelectorAll(".progress");
const skillsSection = document.querySelector("#skills");

const observer = new IntersectionObserver((entries) => {

if(entries[0].isIntersecting){

progressBars.forEach(bar => {

bar.style.width = bar.getAttribute("data-width");

});

}

}, { threshold: 0.3 });

observer.observe(skillsSection);
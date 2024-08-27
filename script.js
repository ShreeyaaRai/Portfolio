const projectsWrapper = document.querySelector('.projects-wrapper');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let projectIndex = 0;
const totalProjects = projectsWrapper.children.length;

function updateSlider() {
    projectsWrapper.style.transform = `translateX(-${projectIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    if (projectIndex > 0) {
        projectIndex--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (projectIndex < totalProjects - 1) {
        projectIndex++;
        updateSlider();
    }
});

const panels = document.getElementsByClassName('panel');


for (let panel of panels) {
    panel.addEventListener('click', (e) => {
        removeActiveClasses()
        panel.classList.add('active')
    })
};

function removeActiveClasses() {
    for (let panel of panels) {
        panel.classList.remove('active')
    }
}
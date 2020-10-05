const collapseBtn = document.querySelectorAll('.collapse');

// Collapsible service items
collapseBtn.forEach(e => {
    e.addEventListener('click', active);
});

function active(e) {
    let x = e.target.nextElementSibling;

    if(x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block'
    };
};

function hidePage(name) {
    document.getElementById(name).style.display='none';
}

function showPage(name) {
    var page = document.getElementById(name);
    if (page) {
        page.style.display='block';
        highlight(page);
    } else {
        console.warn("Pagina cu id-ul %o nu exista", name);
    }
}

function hiddeAllPages() {

    var pages=Array.from(document.getElementsByClassName('page'));
    
    pages.forEach(function(page){
        hidePage(page.id); 
    });
}

function highlight(el) {
    el.style.borderColor='#00df00';
    setTimeout(function() {
        el.style.borderColor='#55df44';
    }, 100);
    setTimeout(function() {
        el.style.borderColor='#99df88';
    }, 200);
    setTimeout(function() {
        el.style.borderColor='#e0dfdc';
    }, 300);
}

function showSkills() {
    hiddeAllPages ();
    showPage('Skills');
}
function showHome() {
    hiddeAllPages ();
    showPage('Home');
}
function showProjects() {
    hiddeAllPages ();
    showPage('Projects');
}
function showLanguages() {
    hiddeAllPages ();
    showPage('Languages');
}

showSkills();
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
    setTimeout(function() {
        el.style.borderColor='';
    }, 400);
}

function hide(name) {
    document.getElementById(name).style.display='none';
}

function hideAllPages() {
    var pages=Array.from(document.getElementsByClassName('page'));  
        pages.forEach(function(page){
        hide(page.id); 
    });
}
function show(name) {
    var page = document.getElementById(name);
    if (page) {
        page.style.display='block';
        highlight(page);
    } else {
        console.warn("Pagina cu id-ul %o nu exista", name);
    }

    var oldLink = document.querySelector(`a[data-page].active`);
    if (oldLink) {
        oldLink.classList.remove("active");
    }
       var link = document.querySelector(`a[data-page=${name}]`);
    // var link = document.querySelector("a[data-page=" + name + "]");
       link.classList.add("active");
}

function showPage(id) {
    hideAllPages ();
    show(id);
};

showPage('home');

document.querySelector('#top-menu-bar').addEventListener("click", function(e){
    
    if (e.target.matches("a")) {
        var id= e.target.getAttribute("data-page");
        showPage(id);
        highlight(e.target);
    } 
});
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

showPage('skills');

document.querySelector('#top-menu-bar').addEventListener("click", function(e){
    
    if (e.target.matches("a")) {
        var id= e.target.getAttribute("data-page");
        showPage(id);
        highlight(e.target);
    } 
});

var skills = [];

function showSkills(skills) {
    var skillsHtml = skills.map(function(skill){
        var favorit = skill.favorit ? 'class="favorit"' : '';
        var endorsements = skill.endorsements >5 ? `<span>${skill.endorsements}</span>` : '';
        return `<li ${favorit}>${skill.name.toLowerCase()} ${endorsements}</li>`;
    }).join('');

    document.querySelector('#skills  ul').innerHTML = skillsHtml;
};

function sortSkillsByName (a,b) {
    var aName = a.name.toUpperCase();
    var bName = b.name.toUpperCase();
    if (aName < bName) {
        return -1;
    }
    if (aName > bName) {
        return 1;
    }
    return 0;
};
 function sortSkillsByEndorsemenets (a,b) {
    return b.endorsements - a.endorsements;
 };

fetch("data/skills.json").then(function(response) {
    return response.json();
}).then(function(skills){
    skills.sort(sortSkillsByEndorsemenets);
    window.skills = skills; /* same name variable global >local */
    showSkills(skills);
})

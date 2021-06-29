console.debug('inside functions js');

function getInfo(name) {
    var mess = "Salut "+ name + ', bine ai venit';
    console.warn('inside get info' , mess); 
    return mess;
}

console.info(getInfo("Dre "+"Andrei"));
console.warn(getInfo("Dre "+"Andrei"));

var myName="Dre "+"Andrei";
var wellcome=getInfo(myName)
console.info(wellcome);
console.warn(wellcome);

function hidePage(id) {
    console.info('hide page', id)
    document.getElementById(id).style.display='none';
}

function showPage(id) {
    console.info('show page', id);
    document.getElementById(id).style.display='block';
    // var page=document.getElementById(id);
    // console.info('show', page);
    // if (page) 
    // {
    //     page.style.display='block';
    //     page.style.borderColor='#00ff00';
    //     setTimeout(function() {
    //         page.style.borderColor='#55df44';
    //     }, 1000);
    //     setTimeout(function() {
    //         page.style.borderColor='#99df88';
    //     }, 2000);
    //     setTimeout(function() {
    //         page.style.borderColor='#e0dfdc';
    //     }, 3000);
    // } else {
    //     console.warn("pagina cu idul %s nu exista", id);
    // }

}

function hiddeAllPages() {
    var pageIDs = [
        'Home','Languages','Projects','Skills'
    ];

    pageIDs.forEach (function(pageID, index){
        // console.info('inside forEach',pageID, index);
        hidePage(pageID);
    });
    // var i=0;
    // i++ daca incepe de la 0 nu i+1 - se executa intai i ca valoare si se opereaza, dupa se executa ++ si se opereaza noua valoare//
    // hidePage(pageIDs[i++]);
    // hidePage(pageIDs[i++]);
    // hidePage(pageIDs[i++]);
    // hidePage(pageIDs[i++]);

    // for (var i=0;i<pageIDs.length;i++) {
    //     hidePage(pageIDs[i]);
    // }
    // while(i<pageIDs.length){
    //     console.info("i=", i);
    //     // hidePage(pageIDs[i++]); same as below
    //     hidePage(pageIDs[i]);i++; 
        // i= i+1 (1 increment); i= i+2 (2 increment..even nr)//
        // i += 2;//
        
    // }
}

function showSkills() {
    hiddeAllPages ();
    showPage('Skills');
//     return console.info('Skills has been displayed.');
}


function showHome() {
    hiddeAllPages ();
    showPage('Home');
    // return console.info('Home has been displayed.');
}

function showProjects() {
    hiddeAllPages ();
    showPage('Projects');
    // return console.info('Projects has been displayed.');
}

function showLanguages() {
    hiddeAllPages ();
    showPage('Languages');
    // return console.info('Languages has been displayed.');
}

showSkills();
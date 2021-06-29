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

function showSkills() {
    document.getElementById('Skills').style.display='block';
    document.getElementById('Home').style.display='none';
    document.getElementById('Projects').style.display='none';
    document.getElementById('Languages').style.display='none';
    return console.info('Skills has been displayed.');
}


function showHome() {
    document.getElementById('Home').style.display='block';
    document.getElementById('Skills').style.display='none';
    document.getElementById('Projects').style.display='none';
    document.getElementById('Languages').style.display='none';
    return console.info('Home has been displayed.');
}

function showProjects() {
    document.getElementById('Home').style.display='none';
    document.getElementById('Skills').style.display='none';
    document.getElementById('Projects').style.display='block';
    document.getElementById('Languages').style.display='none';
    return console.info('Projects has been displayed.');
}

function showLanguages() {
    document.getElementById('Home').style.display='none';
    document.getElementById('Skills').style.display='none';
    document.getElementById('Projects').style.display='none';
    document.getElementById('Languages').style.display='block';
    return console.info('Languages has been displayed.');
}

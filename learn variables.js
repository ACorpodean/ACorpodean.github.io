console.info("Age:" + age);
console.info("Salut");
console.warn("Salut");
console.error("Salut");
console.debug("132/2");
var name = "Andrei";
console.info("Name:" + name);

var age = 12 + 19;
console.info("Age:");
console.info(age);

console.warn("Age:",age);

var skills=["html",'css',`js`];
console.info("skills",skills)

name="Dre";
console.info("Name:" + name);

var m = document.getElementById("motto");
console.info('my motto', m);


/* m.style.backgroundColor='red'; */

m.onclick = function() 
{
    console.info('click pe motto');
        /* m.innerHTML = "<strong>Somer</strong> @ <i>AcasaSRL</i>";
    m.style.color= '#1144dd'; */

    if (m.innerText == 'Consilier Juridic @ Primaria Osorhei') 
    {
        m.innerHTML = "<strong>Somer</strong> @ <i>AcasaSRL</i>";
        m.style.color= '#1144dd';
    } else {
        m.innerHTML = "<strong>Consilier Juridic</strong> @ <i>Primaria Osorhei</i>";
        m.style.color= '#009900';
    }
}
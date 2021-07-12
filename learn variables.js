
var m = document.getElementById("motto");
console.info('my motto', m);

m.onclick = function() 
{
    if (m.innerText == 'Consilier Juridic @ Primaria Osorhei') 
    {
        m.innerHTML = "<strong>Somer</strong> @ <i>AcasaSRL</i>";
        m.style.color= '#1144dd';
    } else {
        m.innerHTML = "<strong>Consilier Juridic</strong> @ <i>Primaria Osorhei</i>";
        m.style.color= '#009900';
    }
}
function calculeDiscriminant() {

let a = document.getElementById('a').value;
let b = document.getElementById('b').value;
let c = document.getElementById('c').value;
const discriminant =(b*b) - (4*(a*c));


      if (discriminant < 0) {
        let EltDplaces = document.querySelector('.ElementVolant');
        let zoneCalcule =  document.querySelector(".calculons");
        let zone1 = document.querySelector(".zone2");
        zone1.style.display='block'
        zoneCalcule.style.display = "none";
        //alert(discriminant +" est la valeur du discriminant");
        EltDplaces.style.backgroundColor = "orange";
        console.log("Racines complexes dans l'ensemble C des nombres complexes.");
        // Calculer les parties réelles et imaginaires des racines complexes
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
    
        // Afficher les racines complexes
        console.log("Racine 1:", realPart + " + " + imaginaryPart + "i");
        console.log("Racine 2:", realPart + " - " + imaginaryPart + "i");
        const normeRacine1 = Math.sqrt(Math.pow(realPart, 2)+Math.pow(imaginaryPart, 2));
        const normeRacine2 = Math.sqrt(Math.pow(realPart, 2)+Math.pow(imaginaryPart, 2));
        const norme=Math.floor(normeRacine1+normeRacine2);
        let u =norme/10;
        EltDplaces.style.animationDuration= norme+"s";
        
        document.body.style.backgroundColor = "lightblue";
        normeRacine1 = 2
       
        let paragrap = document.createElement("p");
        paragrap.textContent = " Norme de la racine 1: " + normeRacine1 + " Norme de la racine 2: " + normeRacine2;
        document.body.appendChild(paragrap);
    
        // Comme il n'y a pas de racine réelle, la norme n'est pas définie
        console.log("Norme non définie pour des racines complexes.");
      }else {
        let EltDplaces = document.querySelector('.ElementDeplacer');
        let zoneCalcule =  document.querySelector(".calculons");
        let zone1 = document.querySelector(".zone1");
        zone1.style.display='block'
        zoneCalcule.style.display = "none";
        let racine1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let racine2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        let r = Math.floor(racine1)
        //alert(discriminant)
        EltDplaces.style.backgroundColor = "orange";
        racine1 =2
        let t = racine1; // Assuming 't' is a variable containing the animation duration in seconds
         // Setting the animation duration
        
  
        console.log("Racine 1:", racine1);
        console.log("Racine 2:", racine2);
    
        const normeRacine1 = Math.sqrt(Math.pow(racine1, 2));
        const normeRacine2 = Math.sqrt(Math.pow(racine2, 2));
        const norme=Math.floor(normeRacine1+normeRacine2);
        let u =norme/10;
        EltDplaces.style.animationDuration= norme+"s";

        //document.write(u);
        console.log("Norme de la racine 1:", normeRacine1);
        console.log("Norme de la racine 2:", normeRacine2);
        document.body.style.backgroundColor = "lightblue";
        normeRacine1 = 2
       
        let paragrap = document.createElement("p");
        paragrap.textContent = "Racine 1: " + racine1 + " Racine 2: " + racine2 + " Norme de la racine 1: " + normeRacine1 + " Norme de la racine 2: " + normeRacine2;
        document.body.appendChild(paragrap);
      }
    
}
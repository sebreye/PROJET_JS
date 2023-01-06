export class Boss{
    constructor(nom, PointsDeVie, PointsDattaque){
        this.nom = nom
        this.PointsDeVie = PointsDeVie
        this.PointsDattaque = PointsDattaque
    }
    Enigme(){
        if (boss.PointsDeVie = 20) {
            for (var i = 0; i <= 3; i++) { // je lance la boucle, où i <= au nombre d'essai voulu
                var essai = String(prompt("Entrez un nombre entre 1 et 100 pour deviner le nombre aléatoire."));
                if (essai === solution) {
                    console.log("Vous avez trouvé, bravo !");
                    console.log("Vous avez trouvé en " + i + " essai(s)")
                    break; // si la réponse est trouvé, la boucle s'arrête et la console l'affiche, en précisant le nombre d'essai nécessaires.
                }
            }
            if (i === 3){
                console.log("Vous avez perdu ! Le nombre était : " + solution); // si la solution n'est pas trouvée, la console l'affiche en donnant la solution
            }
        }
    }
}
export let Soron = new Boss('Soron', 100, 100);
export let Chronos = new Boss('Chronos', 100, 100)
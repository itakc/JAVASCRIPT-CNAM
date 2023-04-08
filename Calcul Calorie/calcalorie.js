let totalCal = 0; // Variable pour stocker le total de calories

function demanderQuantite() {
  var quantite = prompt("Entrez la quantité en grammes :"); // Afficher une boîte de dialogue pour demander la quantité en grammes
  if (quantite != null && quantite != "") { // Si l'utilisateur a saisi une quantité
    return parseFloat(quantite); // Convertir la quantité en nombre à virgule flottante et la renvoyer
  } else {
    return null; // Sinon, renvoyer null
  }
}

function ajouterIngredient() {
  var aliment = document.getElementById("aliment-select").value; // Récupérer la valeur de l'aliment sélectionné dans le menu déroulant
  var quantite = demanderQuantite(); // Demander la quantité en grammes à l'utilisateur
  if (quantite != null && quantite != "") { // Si l'utilisateur a saisi une quantité
    var calories;
    switch (aliment) { // Sélectionner les calories correspondantes en fonction de l'aliment sélectionné
      case "chorba":
        calories = 70;
        break;
      case "brick-thon":
        calories = 200;
        break;
      case "viande-hachee":
        calories = 250;
        break;
      case "poulet":
        calories = 100;
        break;
      case "pomme de terre":
        calories = 90;
        break;
      case "cake aux fruits":
        calories = 320;
        break;
        case "kalb el louz":
          calories = 320;
          break;
      default:
        calories = 0;
        break;
    }
    calories *= quantite / 100;// Calculer les calories pour la quantité saisie
    var affichage = document.getElementById("affichage"); // Récupérer l'élément HTML pour afficher les résultats
    affichage.innerHTML += quantite + "g de " + aliment + " = " + calories.toFixed(2) + " Kcal<br>"; // Afficher les résultats
    totalCal += calories; // Ajouter les calories au total
  }
}

function supprimerIngredients() {
  var affichage = document.getElementById("affichage"); // Récupérer l'élément HTML pour afficher les résultats
  affichage.innerHTML = ""; // Effacer le contenu
  totalCal = 0; // Réinitialiser le total de calories
  afficherTotalCalories(); // Mettre à jour l'affichage du total de calories
}
var totalCaloriesButton = document.getElementById("totalCaloriesButton"); // Récupérer le bouton "Total calories" de la page HTML
totalCaloriesButton.addEventListener("click", function() { // Ajouter un événement "click" sur le bouton
  var totalCalories = calculerTotalCalories(); // Calculer le total de calories
  if (totalCalories > 2500) { // Si le total de calories est supérieur à 2500
    alert("Vous avez trop de calories !"); // Afficher une alerte
  }
});
function calculerTotalCalories() {
  var affichage = document.getElementById("affichage"); // Récupérer l'élément HTML pour afficher les résultats
  var lignes = affichage.innerHTML.split("<br>"); // Séparer les lignes de résultats en un tableau
  var totalCalories = 0; // Initialiser le total de calories
  for (var i = 0; i < lignes.length; i++) { // Pour chaque ligne
    if (lignes[i] != "") { // Si la ligne n'est pas vide
      var kcal = parseFloat(lignes[i].split("=")[1]); // Récupérer le nombre de calories en extrayant la partie après le signe "="
      totalCalories += kcal; // Ajouter les calories au total
    }
  }
  return totalCalories;     // Renvoyer le total de calories calculé
}
 

function afficherTotalCalories() {
  var totalCalories = document.getElementById("total-calories"); // Récupérer l'élément HTML pour afficher le total de calories
  totalCalories.innerHTML = "Le total de calories est de " + totalCal.toFixed(2) + " Kcal."; // Afficher le total de calories
}

//Mon code permet de calculer et d'afficher les calories d'un aliment sélectionné dans un menu déroulant, 
//en fonction de la quantité saisie par l'utilisateur. Il permet également de calculer le total de calories 
//de tous les aliments ajoutés et d'afficher ce total, il affiche une alerte si le total de calories dépasse un certain seuil.



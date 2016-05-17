function premiereCellule() {
  //
  var tableau = document.getElementById('tableau');
  var ligne1 = tableau.rows[0]; //on récupère la 1ère ligne du tableau
  var cellule = ligne1.cells; //on récupère les cellules de la 1ère ligne
  var nbLin = tableau.rows.length;
  var nbCol = cellule.length;
  alert("nombre lignes = " + nbLin);
  alert("nombre colonnes = " + nbCol);
  //
  //on remplace le contenu de la 1ère cellule :
  cellule[0].innerHTML='Bonjour';
  //on change le style de la 1ère cellule de la 1ère ligne :
  cellule[0].style.color = 'white';
  cellule[0].style.backgroundColor = 'red';
  cellule[0].style.textAlign = 'center';
  //on ajoute une bordure au tableau :
  tableau.style.border = '1px solid black';
  //on ajoute une bordure à chaque cellule du tableau :
  for (i=0;i<nbLin;i++) {
    for (j=0;j<nbCol;j++) {
        tableau.rows[i].cells[j].style.border = '1px dashed black';
    }
  }
  //
}
premiereCellule()

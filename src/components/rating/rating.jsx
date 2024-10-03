import React from "react";
import './rating.scss';

function Rating({rating}) {
  
  /*// Array(5), crée un tableau de 5 cases **non initialisées** (cases vides, sans valeur). keys() itère le tableau et génère des indices pour chaque entrée soit (de 0 à 4). [...Array(5).keys()] Le spread operator (...) prend les indices et rempli le tableau des indices (key). Puis map parcourt les indice (i) et crée un élément jsx <i> pour chaque indice 'i'
  const stars = [...Array(5).keys()].map(i => (
    <i key={i} className={`fa-solid fa-star ${(i + 1) <= rating ? '' : 'grey'}`}></i>
  ));

   // méthode classique avec boucle for
  for (let i = 1; i <= 5; i++) {
    const classI = i <= rating ? "fa-solid fa-star" : "fa-solid fa-star grey";
    stars.push(<i key={i} className={classI}></i>);
  }*/

  // Array.from({length:5}, crée un tableau de 5 cases **non initialisées** (cases vides, sans valeur), (comme Array(5)). le second argument de Array.from > (x, i) 'x' est la valeur de la donnée du tableau ici vide donc non utilisée et 'i' qui est l'indice de chaque case du tableau. Ensuite pour chaque indice 'i' du tableau, la fonction flechée est executée et retourne l'élément <i> les parenthèses sont utilisées après => cela équivaut à un {return ... }
  const stars = Array.from({ length: 5 }, (x, i) => (
    <i key={i} className={`fa-solid fa-star ${(i + 1) <= rating ? '' : 'grey'}`}></i>
  ));
  

  return (
    <div className="rate">
      {stars}
    </div>
  )
}

export default Rating;
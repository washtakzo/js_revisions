import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const responses = {
  response1: "default",
  response2: "default",
  response3: "default",
  response4: "default",
  response5: "default",
  response6: "default",
  response7: "default",
  response8: "default",
  response9: "default",
  response10: "default",
};

function App() {
  console.log(`Pour toutes les question Array, proposer une réponse la plus simple est lisible possible pour un developpeur ayant une bonne conaissance en JS. 
  Avant de répondre, annoncer votre méthode et si la méthode que vous compter utiliser va créer une nouvelle array et/ou modifier l'existante ainsi que ce que va return votre methode`);

  console.log("Question 1 :");
  const array1 = ["fraise", "banane", "orange"];
  console.log(
    "Insérer une pomme au début de cette array (sans utiliser d'index) :" +
      array1
  );
  console.log("Réponse 1 :");
  console.log("---------------------------------------------------------");

  console.log("Question 2 :");
  const array2 = ["fraise", "banane", "orange"];
  console.log(
    "Insérer une pomme à la fin de cette array (sans utiliser d'index) :" +
      array2
  );
  console.log("Réponse 2 :");
  console.log("---------------------------------------------------------");

  console.log("Question 3 :");
  const array3 = ["fraise", "banane", "orange"];
  console.log(
    "Insérer une pomme entre fraise et banane de cette array (en utilisant les index) :" +
      array3
  );
  console.log("Réponse 3 :");
  console.log("---------------------------------------------------------");

  console.log("Question 4 :");
  const array4 = ["fraise", "banane", "orange"];
  console.log(
    "Supprimer, en utilisant l'index, l'orange de cette array :" + array4
  );
  console.log("Réponse 4 :");
  console.log("---------------------------------------------------------");

  console.log("Question 5 :");
  const array5 = ["fraise", "banane", "orange"];
  console.log(
    "Suprimer, en utilisant l'index, la banane de cette array :" + array5
  );
  console.log("Réponse 5 :");
  console.log("---------------------------------------------------------");

  console.log("Question 6 :");
  const array6 = ["fraise", "banane", "orange"];
  console.log(
    "Suprimer, en utilisant l'index, la fraise de cette array :" + array6
  );
  console.log("Réponse 6 :");
  console.log("---------------------------------------------------------");

  console.log("Question 7 :");
  const array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  console.log(
    "Faites une nouvelle array qui ne contient que les nombres multiple de 3 :" +
      array7
  );
  console.log("Réponse 7 :");
  console.log("---------------------------------------------------------");

  console.log("Question 8 :");
  const array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  console.log(
    "Faites une nouvelle array qui pour les multiple de 3 remplace par Fizz et pour les nombre pair remplace par 'Buzz' :" +
      array8
  );
  console.log("exemple [1,2,3,4,5,6] -> [1,Buzz,Fizz,Buzz,5,Buzz]");
  console.log("Réponse 8 :");
  console.log("---------------------------------------------------------");

  console.log("Question 9 :");
  const array9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  console.log(
    "On veut cette array mais en retirant tous les nombre pair :" + array9
  );
  console.log("Réponse 9 :");
  console.log("---------------------------------------------------------");

  console.log("Question 10 :");
  const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  console.log(
    "Faite la somme de tous les nombre au carré présent dans l'array :" +
      array10
  );
  console.log("Réponse 10 :");
  console.log("---------------------------------------------------------");

  console.log("Question 11 :");
  console.log("Faite une array de 4 élément pleine de 0");
  console.log("Réponse 11 :");
  console.log("---------------------------------------------------------");

  console.log("Question 12 :");
  const array12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  console.log(
    "trouvez le premier nombre multiple de 7 mais qui ne soit pas 7 dans l'array :" +
      array12
  );
  console.log("Réponse 12 :");
  console.log("---------------------------------------------------------");

  console.log("Question 13 :");
  const array13 = [
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
  ];
  console.log("Trouvez l'index de la poire :" + array13);
  console.log("Réponse 13 :");
  console.log("---------------------------------------------------------");

  console.log("Question 14 :");
  const array14 = [
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    "banane",
    "pomme",
  ];
  console.log("Trouvez l'index de la dernière banane de l'array :" + array14);
  console.log("Réponse 14 :");
  console.log("---------------------------------------------------------");

  console.log("Question 15 :");
  const array15 = [
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    "banane",
    "pomme",
    "tommate cerise",
    "courgette",
  ];
  console.log(
    "Trouvez l'index du premier fruits qui à au moins 10 charactères dans l'array :" +
      array15
  );
  console.log("Réponse 15 :");
  console.log("---------------------------------------------------------");

  console.log("Question 16 :");
  const array16 = [
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    "banane",
    "pomme",
    "tommate cerise",
    "courgette",
  ];
  console.log("Testez si courgette ce trouve dans l'array :" + array16);
  console.log("Réponse 16 :");
  console.log("---------------------------------------------------------");

  console.log("Question 17 :");
  const array17 = [
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    "banane",
    "pomme",
    "tommate cerise",
    "courgette",
  ];
  console.log("Suprimmez le dernier element dans l'array :" + array17);
  console.log("Réponse 17 :");
  console.log("---------------------------------------------------------");

  console.log("Question 18 :");
  const array18 = [
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    "banane",
    "pomme",
    "tommate cerise",
    "courgette",
  ];
  console.log("Suprimmez le premier element dans l'array :" + array18);
  console.log("Réponse 18 :");
  console.log("---------------------------------------------------------");

  console.log("Question 19 :");
  const array19 = [
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    "banane",
    "pomme",
    "tommate cerise",
    "courgette",
  ];
  console.log(
    "Récupérez banane orange pomme dans une nouvelle array à partir de l'array :" +
      array19
  );
  console.log("Réponse 19 :");
  console.log("---------------------------------------------------------");

  console.log("Question 20 :");
  const array20 = [
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    "banane",
    "pomme",
    "tommate cerise",
    "courgette",
  ];
  console.log(
    "Générer une string tel que 'fraise / banane / orange / ...' à partir de l'array :" +
      array20
  );
  console.log("Réponse 20 :");
  console.log("---------------------------------------------------------");

  console.log("Question 21 :");
  const array21 = [
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    "banane",
    "pomme",
    "tommate cerise",
    "courgette",
  ];
  console.log("Inversez les élément de l'array :" + array21);
  console.log("Réponse 21 :");
  console.log("---------------------------------------------------------");

  console.log("Question 22 :");
  const array22 = [
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    "banane",
    "pomme",
    "tommate cerise",
    "courgette",
  ];
  console.log("Rangez dans l'ordre Alphabetique l'array :" + array22);
  console.log("Réponse 22 :");
  console.log("---------------------------------------------------------");

  console.log("Question 23 :");
  const array23 = [
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    "banane",
    "pomme",
    "tommate cerise",
    "courgette",
  ];
  console.log(
    "Testez si au moins une poire est présente dans l'array :" + array23
  );
  console.log("Réponse 23 :");
  console.log("---------------------------------------------------------");

  console.log("Question 24 :");
  const array24 = [
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    "banane",
    "pomme",
    "tommate cerise",
    "courgette",
  ];
  console.log(
    "Testez si tous les élément commencent par une lettre présente dans la premiere moitié de l'alphabet dans l'array :" +
      array24
  );
  console.log("Réponse 24 :");
  console.log("---------------------------------------------------------");

  console.log("Question 25 :");
  const set25 = new Set([
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    "banane",
    "pomme",
    "tommate cerise",
    "courgette",
  ]);
  console.log("créez un array à partir du set :" + set25);
  console.log("Réponse 25 :");
  console.log("---------------------------------------------------------");

  console.log("Question 26 :");
  const set26 = new Set([
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    "banane",
    "pomme",
    "tommate cerise",
    "courgette",
  ]);
  console.log("Testez si ce qui suit est une array :" + set26);
  console.log("Réponse 26 :");
  console.log("---------------------------------------------------------");

  console.log("Question 27 :");
  const array27 = [
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    "banane",
    "pomme",
    "tommate cerise",
    "courgette",
  ];
  console.log(
    "En utlisant les index, récupérer la clementine puis la courgette (avec une manière trés légèrement différente) dans l'array :" +
      array27
  );
  console.log("Réponse 27 :");
  console.log("---------------------------------------------------------");

  console.log("Question 28 :");
  const array28 = [
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    "banane",
    "pomme",
    "tommate cerise",
    "courgette",
  ];
  console.log(
    "faite une copie de la fraise qui sera placé juste avant la poire dans l'array :" +
      array28
  );
  console.log("Réponse 28 :");
  console.log("---------------------------------------------------------");

  console.log("Question 29 :");
  const array29 = [
    "fraise",
    "banane",
    "orange",
    "pomme",
    "poire",
    "clementine",
    ["pomme de terre", "carotte"],
    "banane",
    "pomme",
    "tommate cerise",
    "courgette",
  ];
  console.log(
    "Faites en sorte de n'avoir les élément dans une seul niveau d'inbriquation (pas d'array dans l'array) dans l'array :" +
      array29
  );
  console.log("Réponse 29 :");
  console.log("---------------------------------------------------------");

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Révision JavaScript</h1>
      <h2>Voir la console pour résultats</h2>
      <div className="card">
        <button>Button</button>
      </div>
    </div>
  );
}

export default App;

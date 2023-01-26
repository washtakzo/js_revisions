import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  console.log(`Pour toutes les question Array, proposer une réponse avec 
  modification de l'array donner dans la question et une réponse 
  en faisant une copie de l'array, si ma modification de l'array de l'énoncer 
  n'est pas possible en utilisant une méthode mutalble sur l'array alors ne 
  proposer que la solution avec une autre variable.`);

  console.log("Question 1 :");
  const array1 = ["fraise", "banane", "orange"];
  console.log("Insérer une pomme au début de cette array :" + array1);
  console.log("Réponse 1 :");
  console.log("---------------------------------------------------------");

  console.log("Question 2 :");
  const array2 = ["fraise", "banane", "orange"];
  console.log("Insérer une pomme à la fin de cette array :" + array2);
  console.log("Réponse 2 :");
  console.log("---------------------------------------------------------");

  console.log("Question 3 :");
  const array3 = ["fraise", "banane", "orange"];
  console.log(
    "Insérer une pomme entre fraise et banane de cette array :" + array3
  );
  console.log("Réponse 3 :");
  console.log("---------------------------------------------------------");

  console.log("Question 4 :");
  const array4 = ["fraise", "banane", "orange"];
  console.log("Supprimer l'orange de cette array :" + array4);
  console.log("Réponse 4 :");
  console.log("---------------------------------------------------------");

  console.log("Question 5 :");
  const array5 = ["fraise", "banane", "orange"];
  console.log("Suprimer la banane de cette array :" + array5);
  console.log("Réponse 5 :");
  console.log("---------------------------------------------------------");

  console.log("Question 6 :");
  const array6 = ["fraise", "banane", "orange"];
  console.log("Suprimer la fraise de cette array :" + array6);
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
    "Faite la somme de tous les nombre présent dans l'array :" + array10
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
  const array13 = ["fraise", "banane", "orange"];
  console.log("Suprimer la fraise de cette array :" + array13);
  console.log("Réponse 13 :");
  console.log(
    "---------------------------------------------------------en cours index of"
  );

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

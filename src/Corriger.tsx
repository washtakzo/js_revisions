import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

let responses: any[] = [];

function App() {
  console.log(`Pour toutes les question Array, proposer une réponse la plus simple est lisible possible pour un developpeur ayant une bonne conaissance en JS. 
  Avant de répondre, annoncer votre méthode et si la méthode que vous compter utiliser va créer une nouvelle array et/ou modifier l'existante ainsi que ce que va return votre methode`);

  console.log("Question 1 :"); //unshift
  const array1 = ["fraise", "banane", "orange"];
  console.log(
    "Insérer une pomme au début de cette array (sans utiliser d'index) :" +
      array1
  );
  console.log("Réponse 1 :");
  array1.unshift("pomme");
  console.log(array1);
  console.log("---------------------------------------------------------");

  console.log("Question 2 :"); //push
  const array2 = ["fraise", "banane", "orange"];
  console.log(
    "Insérer une pomme à la fin de cette array (sans utiliser d'index) :" +
      array2
  );
  console.log("Réponse 2 :");
  array2.push("pomme");
  console.log(array2);
  console.log("---------------------------------------------------------");

  console.log("Question 3 :"); //splice
  const array3 = ["fraise", "banane", "orange"];
  console.log(
    "Insérer une pomme entre fraise et banane de cette array (en utilisant les index) :" +
      array3
  );
  console.log("Réponse 3 :");
  array3.splice(1, 0, "pomme");
  console.log(array3);
  console.log("---------------------------------------------------------");

  console.log("Question 4 :"); //splice
  const array4 = ["fraise", "banane", "orange"];
  console.log(
    "Supprimer, en utilisant l'index, l'orange de cette array :" + array4
  );
  console.log("Réponse 4 :");
  array4.splice(2, 1);
  console.log(array4);
  console.log("---------------------------------------------------------");

  console.log("Question 5 :"); //splice
  const array5 = ["fraise", "banane", "orange"];
  console.log(
    "Suprimer, en utilisant l'index, la banane de cette array :" + array5
  );
  console.log("Réponse 5 :");
  array5.splice(1, 1);
  console.log(array5);
  console.log("---------------------------------------------------------");

  console.log("Question 6 :"); //splice
  const array6 = ["fraise", "banane", "orange"];
  console.log(
    "Suprimer, en utilisant l'index, la fraise et la banane de cette array :" +
      array6
  );
  console.log("Réponse 6 :");
  array6.splice(0, 2);
  console.log(array6);
  console.log("---------------------------------------------------------");

  console.log("Question 7 :"); //filter
  const array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  console.log(
    "Faites une nouvelle array qui ne contient que les nombres multiple de 3 :" +
      array7
  );
  console.log("Réponse 7 :");
  const reponse7 = array7.filter((el) => el % 3 === 0);
  console.log(reponse7);
  console.log("---------------------------------------------------------");

  console.log("Question 8 :"); //map
  const array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  console.log(
    "Faites une nouvelle array qui pour les multiple de 3 remplace par Fizz et pour les nombre pair remplace par 'Buzz' :" +
      array8
  );
  console.log("exemple [1,2,3,4,5,6] -> [1,Buzz,Fizz,Buzz,5,Buzz]");
  console.log("Réponse 8 :");
  const rep8 = array8.map((el) => {
    if (el % 3 === 0) return "Fizz";
    if (el % 2 === 0) return "Buzz";
    return el;
  });
  console.log(rep8);
  console.log("---------------------------------------------------------");

  console.log("Question 9 :"); //filter
  const array9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  console.log(
    "On veut cette array mais en retirant tous les nombre pair :" + array9
  );
  console.log("Réponse 9 :");
  const rep9 = array9.filter((el) => !(el % 2 === 0));
  console.log(rep9);
  console.log("---------------------------------------------------------");

  console.log("Question 10 :"); //reduce
  const array10 = [1, 2, 3, 4];
  console.log(
    "Faite la somme de tous les nombre au carré présent dans l'array :" +
      array10
  );
  console.log("Réponse 10 :");
  const rep10 = array10.reduce((acc, current) => acc + current ** 2, 0);
  console.log(rep10);
  console.log("---------------------------------------------------------");

  console.log("Question 11 :"); //fill
  console.log(
    "Faite une array de 4 élément pleine de 0 **********************"
  );
  console.log("Réponse 11 :");
  const rep11 = Array(4).fill(0);
  console.log(rep11);
  console.log("---------------------------------------------------------");

  console.log("Question 12 :"); //find
  const array12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  console.log(
    "trouvez le premier nombre multiple de 7 mais qui ne soit pas 7 dans l'array :" +
      array12
  );
  console.log("Réponse 12 :");
  const rep12 = array12.find((el) => el % 7 === 0 && el !== 7);
  console.log(rep12);
  console.log("---------------------------------------------------------");

  console.log("Question 13 :"); //indexOf
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
  const rep13 = array13.indexOf("poire");
  console.log(rep13);
  console.log("---------------------------------------------------------");

  console.log("Question 14 :"); //lastIndexOf
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
  const rep14 = array14.lastIndexOf("banane");
  console.log(rep14);
  console.log("---------------------------------------------------------");

  console.log("Question 15 :"); //findIndex
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
  const rep15 = array15.findIndex((el) => el.length >= 10);
  console.log(rep15);
  console.log("---------------------------------------------------------");

  console.log("Question 16 :"); //includes
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
  const rep16 = array16.includes("courgette");
  console.log(rep16);
  console.log("---------------------------------------------------------");

  console.log("Question 17 :"); //pop
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
  array17.pop();
  console.log(array17);
  console.log("---------------------------------------------------------");

  console.log("Question 18 :"); //shift
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
  array18.shift();
  console.log(array18);
  console.log("---------------------------------------------------------");

  console.log("Question 19 :"); //slice
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
    "Récupérez banane orange pomme dans une nouvelle array (en utilisant les index) à partir de l'array :" +
      array19
  );
  console.log("Réponse 19 :");
  const rep19 = array19.slice(1, 4);
  console.log(rep19);
  console.log("---------------------------------------------------------");

  console.log("Question 20 :"); //join
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
  const rep20 = array20.join(" / ");
  console.log(rep20);
  console.log("---------------------------------------------------------");

  console.log("Question 21 :"); //reverse
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
  array21.reverse();
  console.log(array21);
  console.log("---------------------------------------------------------");

  console.log("Question 22 :"); //sort
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
  array22.sort((a, b) => {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const alphaArray = alpha.split("");
    return alphaArray.indexOf(a[0]) - alphaArray.indexOf(b[0]);
  });
  console.log(array22);
  console.log("---------------------------------------------------------");

  console.log("Question 23 :"); //some
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
  const rep23 = array23.some((el) => el === "poire");
  console.log(rep23);
  console.log("---------------------------------------------------------");

  console.log("Question 24 :"); //every
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
  const rep24 = array24.every((el) => {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const alphaArray = alpha.split("");
    const firstLetterIndex = alphaArray.indexOf(el[0]);
    return firstLetterIndex <= 15 ? true : false;
  });
  console.log(rep24);
  console.log("---------------------------------------------------------");

  console.log("Question 24b :");
  const array24b = ["fraise", "banane", "clementine", "banane", "courgette"];
  console.log(
    "Testez si tous les élément commencent par une lettre présente dans la premiere moitié de l'alphabet dans l'array :" +
      array24b
  );
  console.log("Réponse 24b :"); //every
  const rep24b = array24b.every((el) => {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const alphaArray = alpha.split("");
    const firstLetterIndex = alphaArray.indexOf(el[0]);
    return firstLetterIndex <= 15 ? true : false;
  });
  console.log(rep24b);
  console.log("---------------------------------------------------------");

  console.log("Question 25 :"); //Array.from()
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
  const rep25 = Array.from(set25);
  console.log(rep25);
  console.log("est une array ? ", Array.isArray(rep25));
  console.log("---------------------------------------------------------");

  console.log("Question 26 :"); //Array.isArray()
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
  console.log("est une array ? ", Array.isArray(set26));
  console.log("---------------------------------------------------------");

  console.log("Question 27 :"); //[] & at
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
  console.log(array27[5]);
  console.log(array27.at(-1)); //les index negatif ne marchent qu'avec la method at.
  console.log("---------------------------------------------------------");

  console.log("Question 28 : *****************************"); //copyWithin
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
  array28.copyWithin(3, 0, 1);
  console.log(array28); //La fraise copiée est ici placé en lieu est place de la premiere pomme de l'array
  console.log("---------------------------------------------------------");

  console.log("Question 29 :"); //flat
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
    "Faites en sorte de n'avoir les élément dans une seul niveau d'inbriquation (pas d'array dans l'array) dans l'array :"
  );
  console.log(array29);
  console.log("Réponse 29 :");
  const rep29 = array29.flat(); //methode non mutable
  console.log(rep29);
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
        {responses.map((response, index) => (
          <button key={index} id={"response" + (index + 1)}>
            {response + index}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

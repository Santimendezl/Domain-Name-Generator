/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = domainNameGenerator();
};

function domainNameGenerator() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const ext = ".com";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        //  return pronoun[i] + adj[j] + noun[k] + ext;
        document.write(pronoun[i] + adj[j] + noun[k] + ext + "/n");
      }
      // const element = array[j];
    }
    // const element = array[index];
  }
}

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const ext = ".com";

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            // return pronoun[i] + adj[j] + noun[k] + ext;
            console.log(pronoun[i] + adj[j] + noun[k] + ext);
        }
    }
}
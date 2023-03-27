const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const ext = [".com", ".net", ".es", ".org"];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let n = 0; n < ext.length; n++) {
                console.log(pronoun[i] + adj[j] + noun[k] + ext[n]);

            }
        }
    }
}
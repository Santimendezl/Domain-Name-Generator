// const pronoun = ["the", "our"];
// const adj = ["great", "big"];
// const noun = ["jogger", "racoon"];
// const ext = ["com", "net", "es", "org"];

// for (let i = 0; i < pronoun.length; i++) {
//     for (let j = 0; j < adj.length; j++) {
//         for (let k = 0; k < noun.length; k++) {
//             for (let l = 0; l < ext.length; l++) {
//                 console.log(pronoun[i] + adj[j] + noun[k] + "." + ext[l]);

//             }
//         }
//     }
// }
const pronoun = ["the", "our", "my", "our"];
const adj = ["great", "big", "special", "perfect"];
const noun = ["stones", "cornet", "cyborg", "house"];
const ext = ["com", "net", "es", "org"];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < ext.length; l++) {
                if (noun[k].endsWith(ext[l])) {
                    let newNoun = noun[k].slice(0, noun[k].length - ext[l].length) + "." + ext[l];
                    console.log(pronoun[i] + adj[j] + newNoun);
                }

                console.log(pronoun[i] + adj[j] + noun[k] + "." + ext[l]);
            }
        }
    }
}
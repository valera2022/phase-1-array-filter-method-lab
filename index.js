// Code your solution here
function findMatching(d,string){
    return d.filter(x => x.toUpperCase() === string.toUpperCase()) 
   
}

function fuzzyMatch(d, string){
    return d.filter(x => x.indexOf(string) === 0) // bobby.indexOf(bob) index is 0(starting index)
// //let Nd = d.filter(function(x){
//     if (x === string){return Nd}
//     else if (string === string){
//         return x[0]
//     }
//     return Nd 
//  })
    
}

function matchName(d,string){
    return d.filter(a => a.name === string )

}



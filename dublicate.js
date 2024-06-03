const names = ['abul', 'babul','chabul','dadul','chabul','babul','gabul','abul','dadul']

function removeduplicate(names){
    const unique = [];
    // for(let i = 0; i < names.length; i++){
    //     const element = names[i];
    //     // console.log(element);
    // }
    for(const element of names){
        console.log(element);
        if(unique .indexOf(element)== -1){
            unique.push(element);
        }
    }
    return unique;
}
const uniquenames = removeduplicate(names);
console.log(uniquenames);
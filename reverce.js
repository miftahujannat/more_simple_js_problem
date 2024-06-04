const greetings = 'hello how are you?';

function reversestring(text){
    let reverse = '';
    for(const latter  of text){
        reverse = latter + reverse;
    }
    return reverse;
}
const reversed = reversestring(greetings);
console.log(reversed);
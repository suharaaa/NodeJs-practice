const person = {
    name : 'maz',
    age : 12,
    greet() {
        console.log('hey im '+ this.name);
    }
};

const hobbies = ['sports', 'cooking'];

console.log(hobbies.map(hobby => 'my :'+ hobby))

console.log(hobbies);

const addarr = (...args) => args;

console.log(addarr(1,2,3,4));
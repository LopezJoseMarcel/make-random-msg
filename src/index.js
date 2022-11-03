const messages = [
 "Good question - I am still trying to figure that out!",
 "I work in an office",
 "I do NOT work in an office",
 "Full time student and rockin' it!",
 "I am a traveler"
];

const random = ()=>{
    console.log(messages[Math.floor(Math.random() * messages.length)]);
}

module.exports = {
 random
};




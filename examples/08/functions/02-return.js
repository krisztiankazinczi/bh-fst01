function greet(age, limit) {
    if (age < limit) {
        return "szevasz, gyerek!";
    }
}

function smileBefore(sentence, mood) {
    return mood + sentence;
}

function smileAfter(sentence, mood) {
    return sentence + mood;
}

function moodModifier(greet, mood, smilingStrategy) {
    switch (mood) {
        case 'happy':
            return smilingStrategy(greet, ':)');
        case 'mad':
            return smilingStrategy(greet, '>:[');
        default:
            return smilingStrategy(greet, ':|');
    }
}

const limit = 18;
let age = process.argv[2];
let mood = process.argv[3];

let greeting = greet(age, limit);
greeting1 = moodModifier(greeting, mood, smileBefore);
greeting2 = moodModifier(greeting, mood, smileAfter);

console.log(greeting1);
console.log(greeting2);
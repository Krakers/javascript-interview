var questions = require('./questions.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
    all: questions.map((item) => {
        return item.question
    }),
    random: () => {
        var generator = uniqueRandomArray(questions);
        return generator().question;
    }
}
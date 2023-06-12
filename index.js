function introduction(name) {
    return `Hi, my name is ${name}.`
}
introduction(`Aki`);
    console.log(introduction);

function introductionWithLanguage(name,language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
    introductionWithLanguage(`Aki`,`Ember.js`);
    console.log(introductionWithLanguage);
    
function introductionWithLanguageOptional(name,language = "JavaScript") {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`
    }
    introductionWithLanguage(`Gracie`,language);
    console.log(introductionWithLanguageOptional);
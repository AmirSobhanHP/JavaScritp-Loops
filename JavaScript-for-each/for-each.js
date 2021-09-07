let persons = ["Amir","Abolfazl","Mahdy","Parham"];
persons.forEach(person => {
    console.log(`Person's  name : ${person}`);
});

console.log("-----------------------")

// if number of parametr > 1 do double parenthesis
persons.forEach((person,index) => {
    console.log(`${index + 1}. ${person}`);
});
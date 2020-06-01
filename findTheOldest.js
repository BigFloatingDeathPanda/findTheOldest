let findTheOldest = function(myArray) {
    const theirAge = myArray.map(people => {
        if (people.yearOfDeath == undefined) {
            people.yearOfDeath = new Date().getFullYear();
        };
        return people.yearOfDeath - people.yearOfBirth
    })

    const indexOfMaxAge = theirAge.indexOf(Math.max(...theirAge));
    
    

    return myArray[indexOfMaxAge];
};

module.exports = findTheOldest

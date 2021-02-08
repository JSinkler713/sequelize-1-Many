// access to database
const db = require('./models')

// firstName: DataTypes.STRING,
// lastName: DataTypes.STRING,
// age: DataTypes.INTEGER,
// email: DataTypes.STRING

// lets make some users
// db.user.create({
//     firstName: 'Aron',
//     lastName: 'Hernandez',
//     age: 29,
//     email: 'code@vim.org'
// })
// .then(newUser=> {
//     // make a pet associated with this user
//     // createASSOCIATEDMODELNAME()
//     // because we made an association, we get access to
//     // newUser.createBook({ title: 'The Hobbit'})
//     newUser.createPet({
//         name: 'Samson',
//         species: 'Dog'
//     })
//     .then(newAnimal=> {
//         console.log(newAnimal)
//     })
// })

db.user.findOne({ where: {id: 2}})
.then(user=> {
    // another built in method getTABLEPLURAL()
    // this will get all pets associated with that user
    user.getPets()
    .then(allPets=> {
        console.log(allPets[0].name)
    })
})
// db.pet.create({
//     name: 'Samson',
//     species: 'Dog',
//     userId: 2 
// })
const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteColor: "Elephant",
    },
  ];

function filter(collection, callback){
    let count = 0
    const newUsers = []

    for(const user of collection){
        if(callback(user)){
            newUsers.push(user)
            count++
        }
    }
    console.log(`Total name were :${count}`)
    return newUsers
}

console.log(filter(users, (user)=>{
    return user.favoriteAnimal === "Penguin" && user.favoriteColor === "Blue"
}))


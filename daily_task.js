// Rizatul Mas ulah - Daily Task 1

let person=[
    {
      "_id": "640b3d699b37b596b32fc344",
      "isActive": true,
      "age": 29,
      "eyeColor": "blue",
      "name": "Lenora Brown",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d69aa1610075cc70538",
      "isActive": true,
      "age": 25,
      "eyeColor": "green",
      "name": "Mae Davenport",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3d69d8d4a56507872889",
      "isActive": false,
      "age": 36,
      "eyeColor": "green",
      "name": "Courtney Mcintyre",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d692af34b493e1ff761",
      "isActive": false,
      "age": 23,
      "eyeColor": "green",
      "name": "Herrera Vaughn",
      "gender": "male",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3d69e802560521381251",
      "isActive": false,
      "age": 26,
      "eyeColor": "blue",
      "name": "Farrell Hale",
      "gender": "male",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3d69bf7da2bf44496463",
      "isActive": false,
      "age": 22,
      "eyeColor": "green",
      "name": "Mckee Hobbs",
      "gender": "male",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d69739dea8d209ba0d1",
      "isActive": false,
      "age": 37,
      "eyeColor": "blue",
      "name": "Middleton Saunders",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d6909aefbbe3605fbbb",
      "isActive": false,
      "age": 39,
      "eyeColor": "blue",
      "name": "Serrano Mitchell",
      "gender": "male",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3d69a97d065ab1aea956",
      "isActive": false,
      "age": 32,
      "eyeColor": "brown",
      "name": "Victoria Hoffman",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d69c338e557e1418768",
      "isActive": true,
      "age": 22,
      "eyeColor": "brown",
      "name": "Stefanie Frederick",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3d69c1f8be023c12fc2b",
      "isActive": true,
      "age": 31,
      "eyeColor": "brown",
      "name": "Olivia Crane",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d69aaff41a3bc663b55",
      "isActive": false,
      "age": 27,
      "eyeColor": "green",
      "name": "Ellen Hansen",
      "gender": "female",
      "favoriteFruit": "strawberry"
    }
  ]

// 1. print person yang suka buah apple dan warna mata nya biru
for(i=0; i<person.length; i++){
    if(person[i].favoriteFruit ==="apple"&& person[i].eyeColor==="blue"){
        console.log(person[i])
    }
}

// 2. print berapa jumlah person age diatas 30
let count = 0
for(let i = 0; i <person.length; i++) {
  if(person[i].age > 30) {
    count++
  }
}
console.log(count);

// 3. print person yang isActive true and  gender nya female
for (let i = 0; i<person.length; i++) {
  if(person[i].isActive === true && person[i].gender == "female") {
      console.log(person[i])
  }
}

// 4. print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue
for(i=0; i<person.length; i++){
    if(person[i].age>30||person[i].age<25){
      if(person[i].eyeColor==="blue"){
        console.log(person[i])
    }
  }
}

// 5) print person yang mengandung huruf W di name nya
for(let i = 0; i <person.length; i++) {
  if(person[i].name.includes("W")) {
    console.log(person[i])
  }
}

// 6) print person isActive false dan gender nya male dan age nya diatas 25
for (let i = 0; i<person.length; i++) {
  if(person[i].isActive === false && person[i].gender == "male"){
    if(person[i].age>25) {
      console.log(person[i])
    }
  }
}

// 7) print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana
for(i=0; i<person.length; i++){
  if(person[i].age<30||person[i].eyeColor==="brown"){
    if(person[i].favoriteFruit==="banana"){
      console.log(person[i])
  }
}
}

// 8) print person gender male
for(i=0; i<person.length; i++){
  if(person[i].gender==="male"){
      console.log(person)
  }
}

// 9) print person eyeColor Blue
for(i=0; i<person.length; i++){
  if(person[i].eyeColor==="blue"){
      console.log(person[i])
  }
}

// 10) print person age diatas 30
for(i=0; i<person.length; i++){
    if(person[i].age>30){
        console.log(person[i])
    }
}
//Will be used to randomly go through each array
function randomNumberGenerator (num) { 
   return Math.floor(Math.random()* num)
};

//All the information needed to create the random message
const generateGod = {
    godName: ['Praxis', 'Icarus', 'Thanatos', 'Nyx', 'Aegir', 'Darrow', 'Shoki', 'Izanagi', 'Amaterasu'],
    godPowers: ['Divinity', 'Darkness', 'Enlightenmenet', 'Light', 'Time Manipulation', 'Necromancy', 'Pyromancy', 'Sage', 'Elemental Magic', 'Metal'],
    godWeakness: ['Divinity', 'Darkness', 'Enlightenmenet', 'Light', 'Time Manipulation', 'Necromancy', 'Pyromancy', 'Sage', 'Elemental Magic', 'Metal']
};

//Space to store the final messages
let createdGod = []

//Going through the arrays
for(let god in generateGod) {
    let indexGod = randomNumberGenerator(generateGod[god].length)


//Customising the messages received

switch (god) {
    case 'godName':
        createdGod.push(`Your name in this life is ${generateGod[god][indexGod]}`)
        break;
    case 'godPowers':
        createdGod.push(`Your power in this life will be ${generateGod[god][indexGod]}`)
        break;
    case 'godWeakness': 
        createdGod.push(`However, even Gods have weaknesses, yours will be ${generateGod[god][indexGod]}`);
        break;
    }
};

//Joining the sentence together in the array
function joiningGod() {
    const joinedGod = createdGod.join('\n')
    console.log(joinedGod)
};

joiningGod();
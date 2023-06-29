/* 
  Given an array of people objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]

    Friend object keys:
    firstName[string]
    lastName[string]
    isSocialDistancing[bool]
    hasCovid[bool]

    Return a new array of the names of people (not friends) who are at high risk of infection

    A person is at high risk of catching the virus if they meet all the below criteria:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom hasCovid

    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    hasCovid: true,
}; //Risk

const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    hasCovid: true,
}; //Risk

const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    hasCovid: false,
};

const people = [
    {
        firstName: "Person",
        lastName: "One",
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },
    {
        firstName: "Person",
        lastName: "Two",
        isSocialDistancing: true,
        friends: [friend2, friend1],
    },
    {
        firstName: "Person",
        lastName: "Three",
        isSocialDistancing: false,
        friends: [friend2, friend1],
    },
];
const expected = ["Person One", "Person Three"];

/**
 * @typedef {Object} Friend
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 * @property {boolean} hasCovid
 *
 * @typedef {Object} Person
 * @property {Array<Friend>} friends
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 */

/**
 * Finds the people who are at risk of contracting Covid.
 * - Time O(?).
 * - Space O(?).
 * @param {Array<Person>} persons
 * @returns {Array<string>} An array of Person full names for those people who
 *    are at risk. A Person is at risk if:
 *    1. not practicing social distancing.
 *    2. have a friend who is not practicing social distancing whom hasCovid.
 */
// function coronaVirusAtRisk(persons) {
//     const risk = [];
//     for (let x = 0; x < persons.length; x ++) {
//         console.log("Current Person num: ", x + 1)
//         let fullName = "";
//         if (!(persons[x].isSocialDistancing)) {
//             let friendList = persons[x].friends;
//             for (let y = 0; y < friendList.length; y++) {
//                 if (friendList[y] == friend1 || friendList[y] == friend2) {
//                     fullName = persons[x].firstName + " " + persons[x].lastName;
//                     console.log(fullName)
//                     risk.push(fullName);
//                     break;
//                 }
//             }
//         }
//     }
//     return risk;
// }
// console.log("Answer: ", coronaVirusAtRisk(people), "Expected Answer: ", expected);

/**
 * - Time O(?).
 * - Space O(?).
 */
function functionalCoronaVirusAtRisk(persons) {
    return persons.filter(person => !person.isSocialDistancing && person.friends.some(friend => !friend.isSocialDistancing)).map(riskPerson => `${riskPerson.firstName} ${riskPerson.lastName}`)
}
console.log(functionalCoronaVirusAtRisk(people));

/*****************************************************************************/

// module.exports = { coronaVirusAtRisk, functionalCoronaVirusAtRisk };
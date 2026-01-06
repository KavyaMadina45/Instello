// const users = [
//   {
//     id: 1,
//     instelloId: "@kavya_sri",
//     username: "kavya_18",
//     name: "M Kavya",
//     image: "https://res.cloudinary.com/dwc7zolv7/image/upload/v1765722154/Screenshot_from_2025-12-14_19-44-15_qn9ovi.png",
//   },
//   {
//     id: 2,
//     instelloId: "@rowdy_baby",
//     username: "arjun_reddy",
//     name: "Arjun Reddy",
//     image: "https://res.cloudinary.com/dwc7zolv7/image/upload/v1765722099/Screenshot_from_2025-12-14_19-47-01_wdsab5.png",
//   },
//   {
//     id: 3,
//     instelloId: "junnu_345",
//     username: "junnupapa",
//     name: "Junnu",
//     image: "https://res.cloudinary.com/dwc7zolv7/image/upload/v1765722179/Screenshot_from_2025-12-14_19-42-26_l96mno.png",
//   },
// ];

// export default users;

// const alphabetNames = {
//   A: ["Aarav", "Ananya", "Akhil", "Aditi"],
//   B: ["Bhavya", "Bhanu", "Bharath", "Bhuvan"],
//   C: ["Charan", "Chaitanya", "Chinmay", "Chetan"],
//   D: ["Deepak", "Divya", "Darshan", "Dinesh"],
//   E: ["Esha", "Eshwar", "Ekta", "Emanuel"],
//   F: ["Farhan", "Faiza", "Firoz", "Fatima"],
//   G: ["Gaurav", "Geetha", "Ganesh", "Gowtham"],
//   H: ["Harsha", "Hema", "Hrithik", "Hitesh"],
//   I: ["Ishita", "Irfan", "Indu", "Imran"],
//   J: ["Junnu", "Jay", "Jyothi", "Jaswanth"],
//   K: ["Kavya", "Kiran", "Krishna", "Karthik"],
//   L: ["Lakshmi", "Lokesh", "Lavanya", "Lohith"],
//   M: ["Manoj", "Meghana", "Mahesh", "Mounika"],
//   N: ["Nikhil", "Neha", "Naveen", "Nandini"],
//   O: ["Omkar", "Ojas", "Olivia", "Osman"],
//   P: ["Prakash", "Pooja", "Pranav", "Preethi"],
//   Q: ["Qadir", "Qasim", "Queen", "Quincy"],
//   R: ["Rahul", "Ravi", "Ritika", "Rohit"],
//   S: ["Sai", "Sneha", "Suresh", "Shreya"],
//   T: ["Teja", "Tarun", "Tanvi", "Tanish"],
//   U: ["Uday", "Uma", "Umesh", "Uzair"],
//   V: ["Varun", "Vaishnavi", "Vijay", "Vamsi"],
//   W: ["Wasim", "Waseem", "William", "Wendy"],
//   X: ["Xavier", "Xena", "Xander", "Ximena"],
//   Y: ["Yash", "Yamini", "Yogesh", "Yuvika"],
//   Z: ["Zoya", "Zain", "Zeeshan", "Zara"],
// };

// const users = [];
// let id = 1;

// Object.keys(alphabetNames).forEach((letter) => {
//   for (let i = 1; i <= 40; i++) {
//     const baseName =
//       alphabetNames[letter][
//         Math.floor(Math.random() * alphabetNames[letter].length)
//       ];

//     users.push({
//       id: id++,
//       instelloId: `@${baseName.toLowerCase()}_${letter}${i}`,
//       username: `${baseName.toLowerCase()}_${i}`,
//       name: `${baseName} ${letter}`,
//       image: `https://i.pravatar.cc/150?img=${(id % 70) + 1}`,
//     });
//   }
// });

// export default users;


const firstNames = [
  "Aarav","Vivaan","Aditya","Vihaan","Arjun","Sai","Krishna","Rohan",
  "Ananya","Kavya","Pooja","Sneha","Divya","Ishita","Neha","Aditi",
  "Rahul","Ravi","Akhil","Kiran","Varun","Suman","Nikhil","Teja",
  "Harsha","Manoj","Ganesh","Suresh","Mahesh","Vamsi","Lokesh",
  "Fatima","Zoya","Ayaan","Irfan","Imran","Sameer","Uzair","Zain",
  "Shreya","Ritika","Tanvi","Meghana","Yash","Yamini","Pranav","Lakshmi","Sai","Sri","Ram","Rama","Krishna","Govind","Venkatesh","Balaji",
  "Teja","Tarun","Naveen","Karthik","Charan","Rohith","Mahesh",
  "Ramu","Suresh","Naresh","Lokesh","Vamsi","Harsha","Manoj",
  "Anjali","Kavya","Divya","Sneha","Sravani","Bhavya","Deepika",
  "Pooja","Aishwarya","Keerthi","Mounika","Lavanya","Siri",
  "Nandini","Gayatri","Swathi","Harini","Pranathi"
];

const lastNames = [
  "Reddy","Sharma","Verma","Patel","Gupta","Singh","Kumar","Rao",
  "Naidu","Iyer","Das","Malik","Sheikh","Khan","Mehta","Joshi",
  "Chowdary","Bansal","Agarwal","Ghosh","Banerjee","Mukherjee","lucky","Reddy","Naidu","Chowdary","Rao","Varma","Sharma","Kumar",
  "Goud","Yadav","Shetty","Iyer","Acharya","Murthy",
  "Babu","Das","Singh","Patel","Kolla","Maddala","Kandukuri"
];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomNumber = () => Math.floor(Math.random() * 900 + 100);

const users = [];

for (let i = 1; i <= 1000; i++) {
  const first = getRandom(firstNames);
  const last = getRandom(lastNames);
  const num = getRandomNumber();

  users.push({
    id: i,
    instelloId: `@${first.toLowerCase()}_${num}`,
    username: `${first.toLowerCase()}_${last.toLowerCase()}${num}`,
    name: `${first} ${last}`,
    image: `https://api.dicebear.com/7.x/personas/svg?seed=${first}${last}`,
 


  });
}

export default users;

//695a92fcbe7be9b03552bf81

const assert = require("chai").assert;

const names = [
  "Michael Daniel Jäger",
  "LINUS HARALD christer WAHLGREN",
  "Pippilotta Viktualia Rullgardina Krusmynta Efraimsdotter LÅNGSTRUMP",
  "Kalle Anka",
  "Ghandi",
];

const expected = [
  { first: "Michael", middle: ["Daniel"], last: "Jäger" },
  { first: "Linus", middle: ["Harald", "Christer"], last: "Wahlgren" },
  {
    first: "Pippilotta",
    middle: ["Viktualia", "Rullgardina", "Krusmynta", "Efraimsdotter"],
    last: "Långstrump",
  },
  { first: "Kalle", middle: [], last: "Anka" },
  { first: "Ghandi", middle: [], last: null },
];

const validate = (result) => {
  try {
    assert.deepEqual(result, expected);
  } catch (e) {
    console.error("Failed", e);
  }
};

// implement code generating result
const result = names.map((fullName)=>{
  const fullNameList = fullName.split(" ").map( (name) => toUpperCaseFirst(name));

  return {
    first: fullNameList[0],
    middle: fullNameList.filter((value, index)=> { return fullNameList.length > 0 && index > 0 && index < fullNameList.length-1}),
    last:fullNameList.length > 1 ? fullNameList[fullNameList.length-1] : null
  }
});

// At the end call validate
validate(result);


function toUpperCaseFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
// YYYY-MM-DD
function getAgeFromDate(stringDate) {
  try {
    const today = new Date();
    const date = new Date(stringDate);
    // Get age by years
    let age = today.getFullYear() - date.getFullYear();
    // Get the difference between the months
    const m = today.getMonth() - date.getMonth();
    // Check, if the month is less or equal, if equal check for day number
    return (m < 0 || (m === 0 && today.getDate() < date.getDate())) ? (age-1) : age;
  }
  catch(e) {
    console.log("Maybe an invalid format?", e.message);
  }
}

// Take data that cares
export function formatPlayersData(data) {
  return data.map(({position, name, nationality, dateOfBirth})=>({
    name, 
    position, 
    nationality, 
    age: getAgeFromDate(dateOfBirth).toString()
  })
)}
import "./App.css";
import Batch from "./classes/Batch";
import Education from "./classes/Education";
import PersonalDetails from "./classes/Personal Details";

function App() {
  let myBatch = new Batch();
  console.log(`Institution Name : ${myBatch.institutionName}`);
  console.log(`Batch ID : ${myBatch.batchCode}`);
 
  console.log('------------------------------------------');


  let aboutMe = new PersonalDetails();
  console.log(`Full Name : ${aboutMe.fullName}`);
  console.log(`DOB : ${aboutMe.DOB}`);
  console.log(`Gender : ${aboutMe.gender}`);
  aboutMe.goals();
  aboutMe.habits();


  let academics = new Education();
  console.log(`Qualificattion : ${academics.qualification}`);
  console.log(`Course : ${academics.course}`);
  console.log(`Year of Pass : ${academics.yearOfPassing}`);
  academics.result();
  academics.placeOfStudy();











  return (
    <div className="App">
     <h1>Venkatesh</h1>
     <p>My Details</p>
    </div>
  );
}

export default App;

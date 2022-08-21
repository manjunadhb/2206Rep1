import "./App.css";
import BRNbatch from "./classes/BRNbatch";
import Qualification from "./classes/Qualification";
import Student from "./classes/Student";

function App() {
  let BRN2206 = new BRNbatch();
  console.log(`BRN Batch :- ${BRN2206.batchID}`);
  console.log(`*-----------------*`);

  let sathwic = new Student();
  console.log(`Full Name : ${sathwic.fullName}`);
  console.log(`Father Name : ${sathwic.fatherName}`);
  console.log(`Date of Birth : ${sathwic.dateOfBirth}`);
  console.log(`Gender : ${sathwic.gender}`);
  sathwic.traits();

  let sathwicQualification = new Qualification();
  console.log(`Qualification : ${sathwicQualification.qualification}`);
  console.log(`Course : ${sathwicQualification.course}`);
  console.log(`Stream of Course : ${sathwicQualification.stream}`);
  sathwicQualification.grade();
  sathwicQualification.university();

  return (
    <div className="App">
      <h1>SATHWIC RAJ</h1>
    </div>
  );
}

export default App;

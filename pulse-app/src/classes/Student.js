class Student {
    constructor() {
        console.log(`Student Details`);
        this.fullName = "Sathwic Raj";
        this.fatherName = "Dhana Raj";
        this.dateOfBirth = "04/12/1997";
        this.gender = "Male";
    }

    traits = () => {
        console.log(
            `Curious, determined, open-minded and an Existential-nihilist. Always ready for adventures.`
        );
    };
}
export default Student;
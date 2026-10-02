function Student({
  name,
  age,
  faculty,
  marks,
  passed,
  subjects,
  greet,
}) {
  return (
    <div
      style={{
        border: "2px solid gray",
        padding: "15px",
        margin: "15px",
        borderRadius: "8px",
      }}
    >
      <h2>{name}</h2>

      <p>
        <strong>Age:</strong> {age}
      </p>

      <p>
        <strong>Faculty:</strong> {faculty}
      </p>

      <p>
        <strong>Marks:</strong> {marks}
      </p>

      <p>
        <strong>Status:</strong> {passed ? "✅ Passed" : "❌ Failed"}
      </p>

      <h4>Subjects</h4>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>

      <button onClick={() => greet(name)}>
        Greet Student
      </button>
    </div>
  );
}

function App() {
  const handleGreet = (studentName) => {
    alert(`Hello ${studentName}! Welcome to IEEE KEC Workshop.`);
  };

  const students = [
    {
      name: "Aaradhya Dev Tamrakar",
      age: 21,
      faculty: "Computer Engineering",
      marks: 88,
      passed: true,
      subjects: ["React.js", "Data Structures", "Computer Networks"],
    },
    {
      name: "Participant Student",
      age: 20,
      faculty: "Electronics & Communication",
      marks: 75,
      passed: true,
      subjects: ["Digital Logic", "Signals & Systems", "React Basics"],
    },
  ];

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Student Directory</h1>
      {students.map((student, idx) => (
        <Student key={idx} {...student} greet={handleGreet} />
      ))}
    </div>
  );
}

export default App;


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

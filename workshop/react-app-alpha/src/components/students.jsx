function Student({
  name,
  age,
  faculty,
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

      <button onClick={() => greet(name)}>
        Greet Student
      </button>
    </div>
  );
}

export default Student;
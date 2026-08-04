function Student({ name, age, faculty }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Faculty: {faculty}</p>
      <hr />
    </div>
  );
}

export default Student;
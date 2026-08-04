  import { useState } from "react";

  function App() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted email:", email);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
  }

  export default App;


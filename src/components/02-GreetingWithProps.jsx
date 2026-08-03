// DEMO 2 — Props
// Props let a parent pass data into a component. Read-only inside the child.

function GreetingWithProps({ name, role }) {
  return (
    <div className="demo-card">
      <h2>Hello, {name}!</h2>
      <p>Role: {role}</p>
    </div>
  )
}

// Usage:
// <GreetingWithProps name="Aaradhya" role="Vice Chair" />
// <GreetingWithProps name="Attendee" role="Workshop participant" />

export default GreetingWithProps

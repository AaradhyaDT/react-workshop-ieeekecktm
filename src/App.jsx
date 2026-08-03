import Greeting from './components/01-Greeting'
import GreetingWithProps from './components/02-GreetingWithProps'
import Counter from './components/03-Counter'
import Clock from './components/04-Clock'
import './App.css'

function App() {
  return (
    <div className="workshop">
      <header>
        <h1>How to React.js</h1>
        <p>IEEE KEC KTM &middot; Components, JSX, Props, State &amp; Hooks</p>
      </header>

      <section>
        <h3>1. Components &amp; JSX</h3>
        <Greeting />
      </section>

      <section>
        <h3>2. Props</h3>
        <GreetingWithProps name="Aaradhya" role="Vice Chair" />
        <GreetingWithProps name="Attendee" role="Workshop participant" />
      </section>

      <section>
        <h3>3. State (useState)</h3>
        <Counter />
      </section>

      <section>
        <h3>4. Hooks (useEffect)</h3>
        <Clock />
      </section>
    </div>
  )
}

export default App

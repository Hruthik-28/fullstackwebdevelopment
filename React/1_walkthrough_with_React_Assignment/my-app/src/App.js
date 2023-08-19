import { Person, Button, Header, List } from "./AppFunction";

function App() {
  const click = () => console.log("Button clicked");
  const listItems = ['Item 1','Item 2','Item 3','Item 4','Item 5'];
  return (
    <div className="App">
      <Person name="Hruthik" age="25"/>

      <Button text="Click here" onClick={click}/>

      <Header title="Konnichiwa"/>

      <List items={listItems}/>
    </div>
  );
}

export default App;

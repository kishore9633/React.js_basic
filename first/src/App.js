import './App.css';

function App(props) {
  return (

<div classname = "person">

  <h1>{props.name}</h1>
  <p>age:{props.age}</p>


</div>
    );
}

export default App;

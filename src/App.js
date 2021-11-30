import './App.css';
import Hello from './Hello';
import Article from './Article';
import Rendering from './Rendering'
import ListRendering from './ListRendering';
import SimpleEvent from './SimpleEvent';
import BlueButton from './BlueButton';
import Counter from './Counter';
import UncontrolledForm from './UncontrolledForm';
import ControlledForm from './ControlledForm';
import FormInput from './FormInput';

function App() {

  // const alert = () => window.alert(123)

  // const ubah = (obj) => {
  //   const btn = obj.target
  //   btn.innerText = 'Clicked'
  // }

  // const Event = () => {
  //   return <button onClick={ubah}>Info</button>
  // }

  // function onCustomClick() {
  //   alert('Yahahah')
  // }

  return (
    <div className="App">
      <header className="App-header">
        <FormInput />
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
    const divStyle = {
      color: 'red',
      backgroundColor: 'powerblue',
      fontSize: 'large',
    }
    const el = (
      <div style={divStyle}>Hello React</div>
    )
    return el
}

export default App;

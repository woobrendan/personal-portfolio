import './App.css';
import AboutMe from './components/About';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Brendan Woo</h1>
      <h3>Full Stack Developer</h3>
      <Sidebar />
      <AboutMe />
      <div id="Contact">
        Email Me
      </div>
    </div>
  );
}

export default App;

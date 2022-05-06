import './App.css';
import IconLinks from './components/Icon_links';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Brendan Woo</h1>
      <h3>Full Stack Developer</h3>
      {/* <IconLinks /> */}
      <Sidebar />
      <div id="Contact">
        Email Me
      </div>
    </div>
  );
}

export default App;

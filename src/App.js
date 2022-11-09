import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';

function App() {
  return (
    <div id="container-wrap">
        <Navbar />
        
          <Introduction></Introduction>
          {/* <About></About>
          <Timeline></Timeline> */}
        
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';

function App() {
  return (
    <div id="container-wrap">
      <div className='row'>
        <div className="col-sm-3" style={{padding : 0}}>
          <Navbar />
        </div>
        {/* <div className='header-buffer'></div> */}
        <div className='col-sm-9' style={{padding : 0}}>
          <Introduction></Introduction>
        {/* <About></About>
        <Timeline></Timeline> */}
        </div>
      </div>
    </div>
  );
}

export default App;

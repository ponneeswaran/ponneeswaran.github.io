import './App.css';
import Sidebar from './components/Sidebar';
import Introduction from './components/Introduction';

function App() {
  return (
    <div id="container-wrap">
      <div className='row'>
        <Sidebar />
        <div id="main-page" className='col-sm-10'>
          <Introduction></Introduction>
          {/* <About></About>
          <Timeline></Timeline> */}
        </div>
      </div>
    </div>
  );
}

export default App;

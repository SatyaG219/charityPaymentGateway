import Tb from "./components/Tb";
import Header from "./components/Header";
import Donate from "./components/Donate";
import "./App.css";


function App() {
  return (
    <div className="container" style={{backgroundImage: 'url("https://wallpaperaccess.com/full/1567666.png")'}}>
      <div className='c1'>
        
        <div className='s1'> 
          <Header title='SPARK FOUNDATION CHARITY' />
        </div>
        <div className='s2'> 
          <Donate msg='Donate to charity'/> 
        </div>
      </div>

      <div className='c2'>
        <Tb />
      </div>
      
    </div>
  );
}

export default App;

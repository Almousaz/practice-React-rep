import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/home'
import Articles from './pages/home/home';
import Aboutus from './pages/aboutUs/about';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Header />
      <Footer /> */}
      <Articles />
      {/* <Aboutus /> */}
      {/* <Navbar title = "Mahdi Blog"/> */}
      {/* <Footer />
      <Home /> */}

        
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

// function Navbar(){
//   return(
//     <div>
//       <h2>
//         Test
//       </h2>
//     </div>
//   );
// }

// function Header(){
//   return(
//     <div>
//       <h2>
//         hello reactjs
//       </h2>
//     </div>
//   );
// }

// function Footer() {
//   return(
//     <div>
//       <h1>
//         bye js
//       </h1>
//     </div>
//   );
// }





export default App;

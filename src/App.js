import React from "react"
import Course from "./components/course"
import "./App.css"
import witCrest from "./wit_crest.png"

const App = () => {
   // Substitute your module names here.
   const modules = [
    {
        name: "Web App Dev",
        noLectures: 1,
        noPracticals: 2
    },
    {
        name: "Legal",
        noLectures: 2,
        noPracticals: 3
    },
      {
        name: "Network Forensics",
        noLectures: 2,
        noPracticals: 2
    },
    {
        name: "DevOps",
        noLectures: 2,
        noPracticals: 2
    },
    {
        name: "NoSQL",
        noLectures: 2,
        noPracticals: 3
    }
   ];
  const name = "Applied" // Substitute

  return (
    <>
      <header className="App-header">
        <img className="center" src={witCrest} alt="logo" />
      </header>
      <div className="course">
        <Course title={name} modules={modules} />
      </div>
    </>
  );
};

export default App

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. 
//           Okay
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

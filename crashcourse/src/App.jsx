 import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import OurComponent from './OurComponent'
 import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       < OurComponent mood= "happy"/>
//       < OurComponent mood= "sad" />
//       < OurComponent mood= "hopeful"/>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null); // Changed from [] to null
  const [dataLoaded, setDataLoaded] = useState(false);
  const [formData, setFormData] = useState({ name:"", email:"",age:""})

  function handleClick() {
    setCount(prev => prev + 1);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted:", formData);
  }
  
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  

  function fetchData() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((json) => {
        console.log("Fetched joke:", json); // 🔥 See the full joke object in the console
        setData(json);
        setDataLoaded(true);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  // ✅ JSX must be inside return()
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleClick}>Increase Count</button>
      <button onClick={fetchData}>Fetch Joke</button>

      {/* ✅ Display joke only if data is loaded */}
      {dataLoaded && data && (
        <div>
          <h2>Joke:</h2>
          <p>{data.setup}</p>
          <p><strong>{data.punchline}</strong></p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
        Name:
        <input          
          name= "name"
          type= "text"
          value= {formData.name}
            onChange={handleChange}
            placeholder='Marcus'
          />
          
        </label>
        <br></br>
        <label>
        Email:
        <input          
           name= "email"
           type="email"
            value={formData.email}
            placeholder='name@gmail.com'
         onChange={handleChange}
         
          />
          <p>{formData.email}</p>
        </label>
        <br></br>
        <label>
          Age:
          <input      
           name= "age"
           type="number"
            value={formData.age}
            placeholder='18+'
         onChange={handleChange}
          />
          <p>{formData.age}</p>
        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

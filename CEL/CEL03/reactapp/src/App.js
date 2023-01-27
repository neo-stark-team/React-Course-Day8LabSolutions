import React from 'react';

const Category1Languages=()=>{
  return(
      <React.Fragment>
          <li>Bengali</li>
          <li>Gujarati</li>
          <li>Punjabi</li>
      </React.Fragment>
  )
}

const Category2Languages=()=>{
  return(
      <React.Fragment>
          <li>Dutch</li>
          <li>French</li>
          <li>Italian</li>
      </React.Fragment>
  )
}

const Category3Languages=()=>{
  return(
      <React.Fragment>
          <li>German</li>
          <li>Malay</li>
          <li>Arabic</li>
          <li>Korean</li>
      </React.Fragment>
  )
}

function App() {
  return (
    <>
    <h2>Render Multiple React Fragments </h2>
     <Category1Languages></Category1Languages>
     <Category2Languages></Category2Languages>
     <Category3Languages></Category3Languages>
    </> 
  );
}

export default App;
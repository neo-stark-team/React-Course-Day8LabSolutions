import React from 'react';
class App extends React.Component {
   render(){
     //Adjacent JSX HOC - Higher Order Component
      return (
        <React.Fragment>
            <h2>Header</h2>
            <p>Test</p>
        </React.Fragment>
   );
   }
  }
  export default App;

   //React Team has come up with this as built in feature in latest release
   //we also can use its shorter version
 /*   <>    <h2>Header</h2>
            <p>Test</p>
        </>
*/

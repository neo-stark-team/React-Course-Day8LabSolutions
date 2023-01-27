import React from 'react';
class App extends React.Component {
   render(){
     //throws error Adjacent JSX elements must be wrapped in an enclosing tag
      return (
        <div>
            <h2>Header</h2>
            <p>Test</p>
        </div>
   );
   //just adding one parent container it clears the error
}
}
export default App;
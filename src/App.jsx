import React, {Component} from 'react';
import { UserInput } from './Component/UserInput';
import { UserOutput } from './Component/UserOutput';

class App extends Component{
  render(){
    
    
   return(
    // display on the web
     <div>
     <UserOutput username="Dele"/>
     <UserInput/>
     <UserOutput username= "Bella"/>
     </div>

    
      )
  }
}




export default App;

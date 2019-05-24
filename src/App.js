import React,{Component} from 'react';
import formData from './formData';
import './App.css';
import DisplayData from './DisplayData';


class App extends Component {

  constructor(){
    super();
    this.state={
      stat:'no',
      finalVal:{
        Comments:'Enter valid Input'
      }     
    }
   
    this. handleSubmit =  this. handleSubmit.bind(this);
    this.handleEvent =  this.handleEvent.bind(this);
  }

  handleSubmit = (event) => {
   
    this.setState({stat:'submitted'});
         event.preventDefault();

  }

  handleEvent = (event) =>{
    const value = event.target.value;
    const inputName = event.target.name;
    this.setState(Object.assign(this.state.finalVal,{[inputName]:value}));
  }

  render(){
    return(
      <div>
      <h1 className="tc ttu"> Enter the Details </h1>
     
      <form className="mw7 center br3 pa5-ns mv2 ba b--white-20 shadow-5"onSubmit={this.handleSubmit}>
       {(formData.result.data.result).map(result=>{
        const name = result.fieldName;
        const type = result.inputType;
        switch(type){
          case "number":
          return(
            <div>
            <label >{name}:</label>
            <input type="number" key={name} name={name} onChange={this.handleEvent} />
            </div>
            );
          break;
          case "text":
          return(
            <div>
            <label>{name}:</label>
            <input type="text" key={name} name={name} onChange={this.handleEvent} /> 
            </div>);
          break;
          case "boolean":
          return(<div>
            <label >{name}:</label>
            <input type="checkbox" key={name} name={name} onChange={this.handleEvent} />
          </div>);
          break;
          case "select":
          return(<div>
            <label >{name}:</label>
            <select key={name} name={name} onClick={this.handleEvent}>
            {result.connectedListData.listManagementData.map((list)=>{
            return <option key={list.itemName} value= {list.itemName} > {list.itemName} </option>
            })}
             </select>
          </div>);
          break;
          case "date":
          return(<div>
            <label >{name}:</label>
            <input type="date" key={name} name={name} onChange={this.handleEvent} />
          </div>);
          break;
          default:
          break;
        }
       })

       }

      <input className="mh6 mv3 grow pointer" type="submit" value="Submit" />
       {(this.state.stat === 'submitted')
       ?
       <div>
       <h1 className="tc"> Form Submitted </h1>
      <DisplayData finalData={this.state.finalVal}  /> 
      </div>
      :
      <div>
      
      </div>
      }
       </form> 
      
</div>
   );
      
}
}

export default App;

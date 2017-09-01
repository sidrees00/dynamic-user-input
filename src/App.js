import React from 'react';

class Container extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      data: {
        "First Name": "Suhail",
        "Last Name": "Idrees",
        "Birth Date": "09/04/88",
        "Favorite Food": "Pizza",
        "Language": "English"
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.convert = this.convert.bind(this);
  };
  
  
  handleChange(event){ 
    let currData = this.state.data,
        updatedValue = event.target.value,
        name = event.target.name;
    
    currData[name] = updatedValue;
    
    this.setState({
      [name]: updatedValue
    });
  };
  
  convert(obj){
    let pageData = [];
    for(let key in obj){
      let value = obj[key]
      let component = (
        <div key={key + obj[key]}>
          <text style={styles.heading}>{key}</text>
          <br/>
          <input 
            type='text'
            style={styles.inputField}
            name={key}
            value={obj[key]}
            onChange={this.handleChange}></input>
        </div>
      )
      pageData.push(component)
    }
    return pageData;
  }
  

  render(){
    let data = this.state.data;
    let pageData = []
    
    for(let key in data){
      let value = data[key]
      
      if(Array.isArray(value)){
        let that = this;
        pageData.push(<h2>{key}</h2>)
          value.map(function(v,i){
            pageData.push(that.convert(v))
          })
      } else {
        pageData.push(this.convert(data))
        break;
      }
    };
      
    return (
      <div style={styles.container}>
        <form style={styles.formContainer}>
          <h1>User Information:</h1>
            {pageData}
        </form>
      </div>
    )
  }
}

const styles = {
  container: {
    backgroundColor: '#F2F3F4',
  },
  formContainer: {
    margin: 10,
  },
  heading: {
    color: '#5FAEE2',
    fontSize: 20,
    fontFamily: 'helvetica'
  },
  inputField: {
    borderRadius: 7,
    width: 250,
    fontSize: 15,
    height: 20,
    borderWidth: 2,
    borderColor: '#5FAEE2',
    marginBottom: 20,
    borderStyle: 'solid',
    paddingLeft: 5
  }
}

export default Container;
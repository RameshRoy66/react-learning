// import React, { useState } from 'react'

// export default function ConditionaRendering() {

//   let[login,serlogin]=useState(false)

//   //using if
// if(login){
//   return <h1>login</h1>
// }else{
//   return <h1>not login</h1>
// }

// }

//using class
import React, { Component } from 'react'

export default class ConditionaRendering extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       islogin:true
    }
  }
  render() 
  {
    if(this.state.islogin){
      return (
      <div>
      <h1>login</h1>
      <div><ConditionaRendering2/></div>
      </div>)
      

    }else{
      return <h1>not login</h1>
    }
  }
}

//you can also write it with elements,ternary,circuit

//using element
class ConditionaRendering2 extends ConditionaRendering {

  constructor(props) {
    super(props)
  
    this.state = {
       islogin2:false
    }
  }
  render() {
    let message
    if(this.state.islogin2){
      message=<h1>login</h1>
    }else{
      message=<h1>not login</h1>
    }
    return (
      <div>
        {message}
        <div><ConditionaRendering3/></div>
      </div>
    );
  }
}

//using ternary


class ConditionaRendering3 extends ConditionaRendering2 {
  constructor(props) {
    super(props)
  
    this.state = {
       islogin3:true
    }
  }
  render() {
    return (
     this.state.islogin3 ? (<div>login</div>) :(<div> not login</div>)
    );
  }
}


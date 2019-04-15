import React,{Component} from 'react';

export default class Child extends Component{
  render(){
    return(
      <div>
        <p>child</p>
        {this.props.msg}
      </div>
    )
  }
}

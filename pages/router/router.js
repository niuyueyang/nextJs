import Link from "next/link";
import React,{Component} from 'react';
import Router from 'next/router'
const linkStyle = {
  marginRight: 15
}
Router.events.on('routeChangeStart',(url)=>{
  if(url=='/about'){
    location.href='../common/noPermission'
  }
})
class Routers extends Component{
  render(){
    return(
      <div>
        <Link href="/home" prefetch>
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about" prefetch>
          <a style={linkStyle}>About</a>
        </Link>
      </div>
    )
  }
}
export default Routers;

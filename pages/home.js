/*
import React,{Component} from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router'
import Headers from  './header'
// import "../css/index.sass"
class Home extends Component{

  render(){
    const {router} = this.props
    console.log(router)
    return(
      <div>
        <Headers/>
        {router.query.name}
        <Head>
          <title>你好，2019</title>
          <meta charSet='utf-8'/>
        </Head>
        Hello,World111c
        <style jsx>{`
          h1{
            background:blue;
          }
        `}</style>
        <h1>style</h1>
      </div>
    )
  }
}
export default withRouter(Home)
*/
import React,{Component} from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router'
import Headers from  './header'
import Layout from './common/layout'

// import "../css/index.sass"
class Home extends Component{
  render(){
    const {router} = this.props
    console.log(router)
    return(
      <Layout>
      <div>
        Hello,World111c
        <style jsx>{`
          h1{
            background:blue;
          }
        `}</style>
        <h1>style</h1>
        <span style={{color:'blue'}}>span</span>
      </div>
      </Layout>
    )
  }
}
export default withRouter(Home)

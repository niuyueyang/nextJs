import React,{Component} from 'react';
import { withRouter } from 'next/router'
import Layout from './common/layout'
class About extends Component{
  render(){
    return(
      <Layout>
        <div className="about">
          about
        </div>
        <style jsx>{`
          .about{
            color:blue
          }
        `}</style>
        <style global-jsx="true">
          {`
            *{
            margin:0;
            padding:0;
            box-sizing:border-box
          }
          `}
        </style>
      </Layout>
    )
  }
}
export default withRouter(About);

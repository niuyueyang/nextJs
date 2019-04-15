import React,{Component} from 'react'
import axios from 'axios';
export default class Films extends Component {
  //getInitialProps服务器端渲染，没有跨域
  static async getInitialProps(){
    const res=await axios.get('https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8326610',{
      headers:{
        'X-Host': 'mall.film-ticket.film.list'
      }
    });
    console.log(res)
    return {
      films:res.data.data.films
    }
  }
  render(){
    return(
      <div>
        <h2>电影</h2>
        <ul>
          {this.props.films.map(item=>{
            return(
              <li key={item.filmId}>
                {item.name}
                <img src={item.poster}/>
                </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

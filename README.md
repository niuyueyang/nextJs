# nextJs
### 所有组件均在pages下才可以访问到
### 样式
- 在render函数里面进行
```javascript
<style jsx>{`
  h1{
    background:blue;
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
```
```javascript
<span style={{color:'blue'}}>span</span>
```
### 自定义头部或者公共样式
- common/layput.js
```javascript
import Head from 'next/head';
import Router from 'next/router'
import Routers from '../router/router'


//prefetch导航预加载
export default ({children})=>(
  <div>
    <Routers/>
    <Head>
      <title>共同头部测试</title>
    </Head>
    {children}
    <footer>未经允许，禁止使用</footer>
  </div>
)
```
```javascript
return(
      <Layout>
        ...
      </Layout>
)
```
- 自定义头部方式2
```javascript
import Head from 'next/head';
```
```javascript
<Head>
  <title>你好，2019</title>
  <meta charSet='utf-8'/>
</Head>
```
### 自定义路由
- router/router.js
```javascript
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

```
- 函数式跳转路由
```javascript
import Router from 'next/router'
<div onClick={()=>{Router.push({pathname:'/home',query:{name:'aaa'}})}}>home</div>
```
- 获取路由参数
```javascript
import { withRouter } from 'next/router'
const {router} = this.props
console.log(router.query.参数); //参数获取
export default withRouter(Home)
```
- getInitialProps服务器端渲染，没有跨域
```javascript
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
```
```javascript
{this.props.films.map(item=>{
  return(
    <li key={item.filmId}>
      {item.name}
      <img src={item.poster}/>
      </li>
  )
})}
```
- 自定义404页面（在pages文件夹下，新建_error.js）
```javascript
import React,{Component} from 'react';
export default class Error extends Component{
  render(){
    return(
      <div>
        404页面错误
      </div>
    )
  }
}
```
- 导航守卫
```javascript
import Router from 'next/router'
const linkStyle = {
  marginRight: 15
}
Router.events.on('routeChangeStart',(url)=>{
  if(url=='/about'){
    location.href='../common/noPermission'
  }
})
```
### common/noPermission.js
```javascript
import React,{Component} from 'react'
export default class NoPermission extends Component{
  render(){
    return(
      <div>
        对不起，你无权访问这个页面
      </div>
    )
  }
}
```

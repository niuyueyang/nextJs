import Head from 'next/head';
import Link from "next/link";
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

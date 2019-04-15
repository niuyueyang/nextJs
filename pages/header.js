/*
import Link from 'next/link'
import Router from 'next/router'


const Header = () => (
  <div>
    <Link as="a" href="/about">
      <a>about</a>
    </Link><br/>
    <div onClick={()=>{Router.push({pathname:'/home',query:{name:'aaa'}})}}>home</div>
  </div>
)

export default Header
*/
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/home">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)

export default Header

import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
import Image from 'next/image'
import myLogo from '../images/mylogo.png'
import 'antd/dist/antd.css';
import { UnorderedListOutlined,SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';



const Nav = () => {

  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.logo}>
      <Image
        src={myLogo}
        alt="Wiki-Game logo"
        width={180} 
        height={130} 
      />
      </div>
      <div className={navStyles.searchBar}>
        <SearchOutlined className={navStyles.searchIcon}/>
        <input type='text' placeholder='Search for games...'></input>
      </div>
        <div className={navStyles.rightLogo}>
          <Image
            src={myLogo}
            alt="Wiki-Game logo"
            width={180} 
            height={130} 
          />
      </div>
     
      
  </nav>
      
  )
}

export default Nav

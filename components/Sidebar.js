import sidebarStyles from '../styles/Sidebar.module.css'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div className={sidebarStyles.sidebarContainer}>
      
      <br></br>

        <ul className={sidebarStyles.sidebarContent}>
        <h3>Genres</h3>
         <li> <Link href=''>Action</Link> </li>
         <li> <Link href=''>Strategy</Link> </li>
         <li> <Link href=''>RPG</Link> </li>
         <li> <Link href=''>Shooter</Link> </li>
         <li> <Link href=''>Adventure</Link> </li>
         <li> <Link href=''>Puzzle</Link> </li>
         <li> <Link href=''>Racing</Link> </li>
         <li> <Link href=''>Sports</Link> </li>
        </ul>
    </div>
  )
}

export default Sidebar

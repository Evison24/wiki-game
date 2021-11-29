import sidebarStyles from '../styles/Sidebar.module.css'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div className={sidebarStyles.sidebarContainer}>
      
      <br></br>

        <ul className={sidebarStyles.sidebarContent}>
        <h3>Genres</h3>
          <Link href=''>Action</Link>
          <li>Strategy</li>
          <li>RPG</li>
          <li>Shooter</li>
          <li>Adventure</li>
          <li>Puzzle</li>
          <li>Racing</li>
          <li>Sports</li>
        </ul>
    </div>
  )
}

export default Sidebar

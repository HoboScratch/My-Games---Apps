import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGamepad, faMagnifyingGlass, faLayerGroup, faList, faFolder, faGear, faUser, faFilter } from '@fortawesome/free-solid-svg-icons'
export default function Header() {

    const user = "DaCoffeBean 52"
    return (
        <nav className="gamertag">
            <h2><FontAwesomeIcon icon={faUser} className='user-1' />{user}</h2>
            <div className='search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' /> 
                <input type='text' className='xbox-search' placeholder='Search' />
            </div>
            <ul className='side-bar'>
                <li className='bold'><FontAwesomeIcon icon={faGamepad} className='icon' />Games</li>
                <li className='bold'><FontAwesomeIcon icon={faFolder} className='icon' />Apps</li>
                <li className='bold'><FontAwesomeIcon icon={faList} className='icon' />Groups</li>
                <li className='bold'><FontAwesomeIcon icon={faLayerGroup} className='icon' />Full Libray</li>
                <hr className='line-break' />
                <li className='bold'><FontAwesomeIcon icon={faGear} className='icon' />Manage</li>
                <li className='no-icon'>Queue</li>
                <li className='no-icon'>Update</li>
            </ul>
            <aside className='aside'>
                <div>
                    <p>All Storage</p>
                    <p>300 GB free</p> 
                </div>
                <img src="../xbox-storage.jpg" alt="storage" className='storage-img' /> 
            </aside>
            
        </nav>
    )
}
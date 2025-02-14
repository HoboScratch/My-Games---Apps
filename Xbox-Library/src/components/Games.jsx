import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons'


export default function Games() {
    return (
        <section className="game-list">
            <div className="sort">
                <label htmlFor="sort-by"></label>
                <select name="sort-by" className="sort-by">
                    <option value="Recently played">Recently played</option>
                    <option value="Name(A-Z)">Name(A-Z)</option>
                    <option value="Name(Z-A)">Name(Z-A)</option>
                    <option value="Install size">Install size</option>
                    <option value="Genre">Genre</option>
                    <option value="Playtime">Playtime</option>
                </select>
                <h4>400 Games</h4>
                <h4 className="game-filter"><FontAwesomeIcon icon={faFilter} />Filters</h4>
            </div>
        </section>
    )
}
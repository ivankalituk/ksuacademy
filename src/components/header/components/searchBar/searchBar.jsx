import './searchBar.scss'

import search from '../../../../photos/search.svg'

function SearchBar(){
    return(
        <div className="searchBar">
            <input type="text" placeholder='Пошук'/>

            <button>
                <img src={search} alt="search" />
            </button>
        </div>
    )
}

export default SearchBar;
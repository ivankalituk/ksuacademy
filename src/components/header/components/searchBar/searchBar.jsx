import './searchBar.scss'

import Search from '../../../../assets/photos/Search.svg'

function SearchBar(){
    return(
        <div className="searchBar">
            <input type="text" placeholder='пошук'/>

            <button>
                <img src={Search} alt="search" />
            </button>
        </div>
    )
}

export default SearchBar
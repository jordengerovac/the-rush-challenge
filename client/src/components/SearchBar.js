import React from 'react';

export const SearchBar = ({searchText, handleSearch}) => {
    return (
        <div>
            <input className='search-bar' type="text" placeholder="Search.." onChange={handleSearch} value={searchText} />
        </div>
    )
}
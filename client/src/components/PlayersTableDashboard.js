import React, { useState, useContext, useEffect } from 'react';
import { ExportButton } from './ExportButton';
import { SearchBar } from './SearchBar';
import { PaginationBar } from './PaginationBar';
import { PlayersTable } from './PlayersTable';
import { UploadButton } from './UploadButton';
import { GlobalContext } from '../context/GlobalState';
import { returnPaginatedData, returnQueriedData, returnSortedData } from '../utils/dataUtil';

export const PlayersTableDashboard = () => {
    const [sortColumn, setSortColumn] = useState();
    const [sortType, setSortType] = useState();
    const [loading, setLoading] = useState(false);
    const [searchBarText, setSearchBarText] = useState('');
    const [query, setQuery] = useState('');
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const { playerStats, getPlayerStats } = useContext(GlobalContext);

    useEffect(() => {
        getPlayerStats();
    }, [])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setPage(1);
            setQuery(searchBarText)
        }, 400);
        return () => clearTimeout(timeoutId);
      }, [searchBarText]);

    const handleChangeLimit = (dataKey) => {
        setPage(1);
        setLimit(dataKey);
    };

    const getSortedData = (filteredData) => {
        return returnSortedData(filteredData, sortColumn, sortType);
    }

    const getQueriedData = (filteredData) => {
        return returnQueriedData(filteredData, query);
    }

    const getExportData = (filteredData) => {
        if (query !== '') {
            filteredData = getQueriedData(filteredData);
        }
        filteredData = getSortedData(filteredData);
        return filteredData;
    }

    const getPaginatedData = (filteredData) => {
        return returnPaginatedData(filteredData, limit, page);
    }

    const getFilteredData = () => {
        let filteredData = playerStats;
        filteredData = getExportData(filteredData);
        return getPaginatedData(filteredData);
    };

    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSortColumn(sortColumn);
            setSortType(sortType);
        }, 500);
    };

    const handleSearch = (e) => {
        setSearchBarText(e.target.value);
    }

    return (
        <div className='players-table-dashboard'>
            <h1>The Rush Challenge</h1>
            <div className='players-table-header'>
                <div className='button-group-header'>
                    <ExportButton data={getExportData(playerStats)}/>
                    <UploadButton />
                </div>
                <SearchBar searchBarText={searchBarText} handleSearch={handleSearch} />
            </div>
            <PlayersTable 
                getFilteredData={getFilteredData} 
                sortColumn={sortColumn} 
                sortType={sortType} 
                handleSortColumn={handleSortColumn} 
                loading={loading} 
            />
            <PaginationBar 
                limit={limit} 
                page={page} 
                setPage={setPage} 
                handleChangeLimit={handleChangeLimit} 
                data={playerStats} 
            />
        </div>
    );
};
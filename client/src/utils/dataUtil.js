export const returnQueriedData = (filteredData, query) => {
    filteredData = filteredData.filter((player) => {
        return player['player'].includes(query);
    })
    return filteredData;
}

export const returnSortedData = (filteredData, sortColumn, sortType) => {
    if (sortColumn && sortType) {
        filteredData = filteredData.sort((a, b) => {
            let x = a[sortColumn];
            let y = b[sortColumn];
            
            if (typeof x === 'string') {
                x = parseInt(x.replace(/,/g, ''), 10);
            }
            if (typeof y === 'string') {
                y = parseInt(y.replace(/,/g, ''), 10);
            }

            if (sortType === 'asc') {
                return x - y;
            } 
            else {
                return y - x;
            }
        });
    }
    return filteredData;
}

export const returnPaginatedData = (filteredData, limit, page) => {
    return filteredData.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });
}
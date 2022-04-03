import React from 'react';
import { CSVLink } from 'react-csv';

export const ExportButton = ({data}) => {
    return (
        <div>
            <CSVLink data={data}>
                <button className='export-btn'>
                    Export
                </button>
            </CSVLink>
        </div>
    )
}
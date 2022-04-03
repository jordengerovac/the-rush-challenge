import { CSVLink } from 'react-csv';

export const ExportButton = ({data}) => {
    return (
        <div>
            <button className='export-btn'>
                <CSVLink data={data}>
                    Export
                </CSVLink>
            </button>
        </div>
    )
}
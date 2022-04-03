import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { parseJson } from '../utils/jsonUtil';
import ClipLoader from 'react-spinners/ClipLoader'

export const UploadButton = () => {
    const [loading, setLoading] = useState(false);

    const { uploadPlayerStats } = useContext(GlobalContext);

    const handleChange = (e) => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");

        fileReader.onload = (e) => {
            let parsedFile = parseJson(e.target.result);
            waitForUploadedPlayerStats(parsedFile);
        };
    }

    async function waitForUploadedPlayerStats(parsedFile) {
        setLoading(true);
        await uploadPlayerStats(parsedFile);
        setLoading(false);
    }

    return (
        <div>
            <div style={{display: 'flex'}}>
            <input id='file' type='file' onChange={handleChange} hidden disabled={loading ? true : false} />
                <label className={loading ? 'upload-btn-label-disabled' : 'upload-btn-label'} for='file'>{loading ? 'Uploading...' : 'Upload'}</label>
                {loading ? 
                    <div className="clip-loader">
                        <ClipLoader color='#34C3FF' size={20} /> 
                    </div>
                    : null
                }
            </div>
        </div>
    )
}
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { parseJson } from '../utils/jsonUtil';
import ClipLoader from 'react-spinners/ClipLoader'

export const UploadButton = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { uploadPlayerStats } = useContext(GlobalContext);

    const handleChange = (e) => {
        if (e.target.files[0].type !== 'application/json') {
            setErrorMessage('File must be a json file')
        }
        else {
                const fileReader = new FileReader();
                fileReader.readAsText(e.target.files[0], "UTF-8");

                fileReader.onload = (e) => {
                    let parsedFile = {};
                    try {
                        parsedFile = parseJson(e.target.result);
                    } catch(err) {
                        setErrorMessage('An error occurred while processing the file')
                    }
                    if (Object.keys(parsedFile).length !== 0) {
                        waitForUploadedPlayerStats(parsedFile);
                    }
                };
        }
    }

    async function waitForUploadedPlayerStats(parsedFile) {
        setLoading(true);
        setErrorMessage('');
        try {
            await uploadPlayerStats(parsedFile);
        } catch(err) {
            setErrorMessage('An error occurred while uploading the file')
        }
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
                {errorMessage !== '' ? <p className='error-message'>{errorMessage}</p> : null}
            </div>
        </div>
    )
}
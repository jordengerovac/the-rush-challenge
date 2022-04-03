import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const UploadButton = () => {
    const [file, setFile] = useState("");

    const { uploadPlayerStats } = useContext(GlobalContext);

    const handleChange = (e) => {
        e.preventDefault();
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            console.log("e.target.result", e.target.result);
            setFile(e.target.result);
        };

        // TODO: here we parse the json
        const newPlayerStat = {
            "Player":"Joe Banyard 2",
            "Team":"JAX",
            "Pos":"RB",
            "Att":2,
            "Att/G":2,
            "Yds":7,
            "Avg":3.5,
            "Yds/G":7,
            "TD":0,
            "Lng":"7",
            "1st":0,
            "1st%":0,
            "20+":0,
            "40+":0,
            "FUM":0
        }

        uploadPlayerStats(newPlayerStat);
    }

    return (
        <div>
            <input id='file' type='file' onChange={handleChange} hidden />
            <label className='upload-btn-label' for='file'>Upload</label>
        </div>
    )
}
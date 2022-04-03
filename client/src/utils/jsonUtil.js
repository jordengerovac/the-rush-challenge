export const parseJson = (rawJsonString) => {
    try {
        let parsedJson = JSON.parse(rawJsonString)
        let result = [];
        for (var key in parsedJson) {
            result.push({
                player: parsedJson[key]['Player'],
                team: parsedJson[key]['Team'],
                pos: parsedJson[key]['Pos'],
                att: parsedJson[key]['Att'],
                attG: parsedJson[key]['Att/G'],
                yds: parsedJson[key]['Yds'],
                avg: parsedJson[key]['Avg'],
                ydsG: parsedJson[key]['Yds/G'],
                td: parsedJson[key]['TD'],
                lng: parsedJson[key]['Lng'],
                firstDowns: parsedJson[key]['1st'],
                firstDownsPercentage: parsedJson[key]['1st%'],
                twentyPlus: parsedJson[key]['20+'],
                fortyPlus: parsedJson[key]['40+'],
                fum: parsedJson[key]['FUM']
            })
        }
        return result;
    } catch(err) {
        throw err;
    }
}
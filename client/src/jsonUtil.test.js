import { parseJson } from './utils/jsonUtil';

test('parses json successfully', () => {
  const jsonString = '[{ "Player":"Joe Banyard","Team":"JAX","Pos":"RB","Att":2,"Att/G":2,"Yds":7,"Avg":3.5,"Yds/G":7,"TD":0,"Lng":"7","1st":0,"1st%":0,"20+":0,"40+":0,"FUM":0 }]';
  const parsedJson = parseJson(jsonString);
  const expected = [{
    player: "Joe Banyard",
    team: "JAX",
    pos: "RB",
    att: 2,
    attG: 2,
    yds: 7,
    avg: 3.5,
    ydsG: 7,
    td: 0,
    lng: "7",
    firstDowns: 0,
    firstDownsPercentage: 0,
    twentyPlus: 0,
    fortyPlus: 0,
    fum: 0
  }];
  expect(parsedJson).toEqual(expected);
});

test('throws error when parsing json', () => {
  const jsonString = '[{ {"Player":"Joe Banyard","Team":"JAX","Pos":"RB","Att":2,"Att/G":2,"Yds":7,"Avg":3.5,"Yds/G":7,"TD":0,"Lng":"7","1st":0,"1st%":0,"20+":0,"40+":0,"FUM":0 }]';
  expect(() => parseJson(jsonString)).toThrow(SyntaxError);
});




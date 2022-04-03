import { returnQueriedData, returnSortedData } from './utils/dataUtil';

test('returns queried data successfully', () => {
  const data = [{
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
  },
  {
    player: "Max Banyard",
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
  const filter = "Max";
  const queriedData = returnQueriedData(data, filter);
  expect(queriedData.length).toBe(1);
});

test('returns unqueried data successfully', () => {
  const data = [{
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
  },
  {
    player: "Max Banyard",
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
  const filter = "";
  const queriedData = returnQueriedData(data, filter);
  expect(queriedData.length).toBe(2);
});

test('returns ascending sorted yds data successfully', () => {
  const data = [{
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
  },
  {
    player: "Max Banyard",
    team: "JAX",
    pos: "RB",
    att: 2,
    attG: 2,
    yds: 3,
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
  const sortedData = returnSortedData(data, "yds", "asc");
  expect(sortedData[0].player).toBe("Max Banyard");
});

test('returns descending sorted yds data successfully', () => {
  const data = [{
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
  },
  {
    player: "Max Banyard",
    team: "JAX",
    pos: "RB",
    att: 2,
    attG: 2,
    yds: 3,
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
  const sortedData = returnSortedData(data, "yds", "desc");
  expect(sortedData[0].player).toBe("Joe Banyard");
});

test('returns ascending sorted td data successfully', () => {
  const data = [{
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
  },
  {
    player: "Max Banyard",
    team: "JAX",
    pos: "RB",
    att: 2,
    attG: 2,
    yds: 3,
    avg: 3.5,
    ydsG: 7,
    td: 10,
    lng: "7",
    firstDowns: 0,
    firstDownsPercentage: 0,
    twentyPlus: 0,
    fortyPlus: 0,
    fum: 0
  }];
  const sortedData = returnSortedData(data, "td", "asc");
  expect(sortedData[0].player).toBe("Joe Banyard");
});

test('returns descending sorted td data successfully', () => {
  const data = [{
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
  },
  {
    player: "Max Banyard",
    team: "JAX",
    pos: "RB",
    att: 2,
    attG: 2,
    yds: 3,
    avg: 3.5,
    ydsG: 7,
    td: 10,
    lng: "7",
    firstDowns: 0,
    firstDownsPercentage: 0,
    twentyPlus: 0,
    fortyPlus: 0,
    fum: 0
  }];
  const sortedData = returnSortedData(data, "td", "desc");
  expect(sortedData[0].player).toBe("Max Banyard");
});

test('returns ascending sorted lng data successfully', () => {
  const data = [{
    player: "Joe Banyard",
    team: "JAX",
    pos: "RB",
    att: 2,
    attG: 2,
    yds: 7,
    avg: 3.5,
    ydsG: 7,
    td: 0,
    lng: "10T",
    firstDowns: 0,
    firstDownsPercentage: 0,
    twentyPlus: 0,
    fortyPlus: 0,
    fum: 0
  },
  {
    player: "Max Banyard",
    team: "JAX",
    pos: "RB",
    att: 2,
    attG: 2,
    yds: 3,
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
  const sortedData = returnSortedData(data, "lng", "asc");
  expect(sortedData[0].player).toBe("Max Banyard");
});

test('returns descending sorted lng data successfully', () => {
  const data = [{
    player: "Joe Banyard",
    team: "JAX",
    pos: "RB",
    att: 2,
    attG: 2,
    yds: 7,
    avg: 3.5,
    ydsG: 7,
    td: 0,
    lng: "10T",
    firstDowns: 0,
    firstDownsPercentage: 0,
    twentyPlus: 0,
    fortyPlus: 0,
    fum: 0
  },
  {
    player: "Max Banyard",
    team: "JAX",
    pos: "RB",
    att: 2,
    attG: 2,
    yds: 3,
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
  const sortedData = returnSortedData(data, "lng", "desc");
  expect(sortedData[0].player).toBe("Joe Banyard");
});

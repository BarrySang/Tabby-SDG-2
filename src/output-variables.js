import data from './data.js';

var output = {data,
    impact: {currentlyInfected: null, infectionsByRequestedTime: null, severeCasesByRequestedTime: null, hospitalBedsByRequestedTime: null, casesForICUByRequestedTime: null,
        casesForVentilatorsByRequestedTime: null, dollarsInFlight: null},
    severeImpact: {currentlyInfected: null, infectionsByRequestedTime: null, severeCasesByRequestedTime: null, hospitalBedsByRequestedTime: null, casesForICUByRequestedTime: null,
        casesForVentilatorsByRequestedTime: null, dollarsInFlight: null}
    };

export default output;
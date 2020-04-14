import data from './data';

const output = {
  data,
  impact: {
    currentlyInfected: null,
    infecsByReqTime1: null,
    severeCasesByRequestedTime: null,
    hospitalBedsByRequestedTime: null,
    casesForICUByRequestedTime: null,
    casesForVentilatorsByRequestedTime: null,
    dollarsInFlight: null
  },
  severeImpact: {
    currentlyInfected: null,
    infecsByReqTime2: null,
    severeCasesByRequestedTime: null,
    hospitalBedsByRequestedTime: null,
    casesForICUByRequestedTime: null,
    casesForVentilatorsByRequestedTime: null,
    dollarsInFlight: null
  }
};

export default output;

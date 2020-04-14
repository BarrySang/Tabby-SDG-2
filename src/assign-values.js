import data from './data';
import output from './output-variables';


//  Functions
function durationInputNormalizer() {
  let newTimeToElapse;
  if (data.periodType === 'months') {
    newTimeToElapse = data.timeToElapse * 30;
  } else if (data.periodType === 'weeks') {
    newTimeToElapse = data.timeToElapse * 7;
  } else {
    newTimeToElapse = data.timeToElapse;
  }
  return newTimeToElapse;
}

function impactCurrentlyInfected() {
  return data.reportedCases * 10;
}

function sevImpactCurrentlyInfected() {
  return data.reportedCases * 50;
}

function infecByReqTime(currInfected) {
  const time = durationInputNormalizer();
  const infections = currInfected * (Math.pow(2, (time / 3)));
  return Math.trunc(infections);
}

function sevCasByReqTime(infecByReqTime) {
  return Math.trunc((15 / 100) * infecByReqTime);
}

function hospBedsByReqTime() {
  return Math.trunc((35 / 100) * data.totalHospitalBeds);
}

function casForICUByReqTime(infecByReqTime) {
  return Math.trunc((5 / 100) * infecByReqTime);
}

function casForVentByReqTime(infecByReqTime) {
  return Math.trunc((2 / 100) * infecByReqTime);
}

function dollarsInFlight(infecByReqTime) {
  return Math.trunc(infecByReqTime * (85 / 100) * 5 * 30); 
}

function assignValues() {
  output.impact.currentlyInfected = impactCurrentlyInfected();
  output.severeImpact.currentlyInfected = sevImpactCurrentlyInfected();
  output.impact.infectionsByRequestedTime = infecByReqTime(output.impact.currentlyInfected);
  output.severeImpact.infectionsByRequestedTime = infecByReqTime(output.severeImpact.currentlyInfected);
  output.impact.severeCasesByRequestedTime = sevCasByReqTime(output.impact.infectionsByRequestedTime);
  output.severeImpact.severeCasesByRequestedTime = sevCasByReqTime(output.severeImpact.infectionsByRequestedTime);
  output.impact.hospitalBedsByRequestedTime = hospBedsByReqTime();
  output.severeImpact.hospitalBedsByRequestedTime = hospBedsByReqTime();
  output.impact.casesForICUByRequestedTime = casForICUByReqTime(output.impact.infectionsByRequestedTime);
  output.severeImpact.casesForICUByRequestedTime = casForICUByReqTime(output.severeImpact.infectionsByRequestedTime);
  output.impact.casesForVentilatorsByRequestedTime = casForVentByReqTime(output.impact.infectionsByRequestedTime);
  output.severeImpact.casesForVentilatorsByRequestedTime = casForVentByReqTime(output.severeImpact.infectionsByRequestedTime);
  output.impact.dollarsInFlight = dollarsInFlight(output.impact.infectionsByRequestedTime);
  output.severeImpact.dollarsInFlight = dollarsInFlight(output.severeImpact.infectionsByRequestedTime);
}

export default assignValues;

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

function infectionsByRequestedTime(currInfected) {
    let time, infections;
    time = durationInputNormalizer();
    infections = currInfected * (2**(time / 3));
    return Math.trunc(infections);
}

function severeCasesByRequestedTime(infecByReqTime) {
    return Math.trunc((15 / 100) * infecByReqTime);
}

function hospitalBedsByRequestedTime() {
    return Math.trunc((35 / 100) * data.totalHospitalBeds);
}

function casesForICUByRequestedTime(infecByReqTime) {
    return Math.trunc((5 / 100) * infecByReqTime);
}

function casesForVentilatorsByRequestedTime(infecByReqTime) {
    return Math.trunc((2 / 100) * infecByReqTime);
}

function dollarsInFlight(infecByReqTime) {
    return Math.trunc(infecByReqTime * (85 / 100) * 5 *30); 
}

function assignValues() {
    output.impact.currentlyInfected = impactCurrentlyInfected();
    output.severeImpact.currentlyInfected = sevImpactCurrentlyInfected();
    output.impact.infectionsByRequestedTime = infectionsByRequestedTime(output.impact.currentlyInfected);
    output.severeImpact.infectionsByRequestedTime = infectionsByRequestedTime(output.severeImpact.currentlyInfected);
    output.impact.severeCasesByRequestedTime = severeCasesByRequestedTime(output.impact.infectionsByRequestedTime);
    output.severeImpact.severeCasesByRequestedTime = severeCasesByRequestedTime(output.severeImpact.infectionsByRequestedTime);
    output.impact.hospitalBedsByRequestedTime = hospitalBedsByRequestedTime();
    output.severeImpact.hospitalBedsByRequestedTime = hospitalBedsByRequestedTime();
    output.impact.casesForICUByRequestedTime = casesForICUByRequestedTime(output.impact.infectionsByRequestedTime);
    output.severeImpact.casesForICUByRequestedTime = casesForICUByRequestedTime(output.severeImpact.infectionsByRequestedTime);
    output.impact.casesForVentilatorsByRequestedTime = casesForVentilatorsByRequestedTime(output.impact.infectionsByRequestedTime);
    output.severeImpact.casesForVentilatorsByRequestedTime = casesForVentilatorsByRequestedTime(output.severeImpact.infectionsByRequestedTime);
    output.impact.dollarsInFlight = dollarsInFlight(output.impact.infectionsByRequestedTime);
    output.severeImpact.dollarsInFlight = dollarsInFlight(output.severeImpact.infectionsByRequestedTime);
}

export default assignValues;
import data from './data';
import output from './output-variables';

let op = output;

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

function infecs(currInfected) {
  const time = durationInputNormalizer();
  const infections = currInfected * (Math.pow(2, (time / 3)));
  return Math.trunc(infections);
}

function sevCases(infecByReqTime) {
  return Math.trunc((15 / 100) * infecByReqTime);
}

function beds() {
  return Math.trunc((35 / 100) * data.totalHospitalBeds);
}

function icu(infecByReqTime) {
  return Math.trunc((5 / 100) * infecByReqTime);
}

function ventilators(infecByReqTime) {
  return Math.trunc((2 / 100) * infecByReqTime);
}

function dollars(infecByReqTime) {
  return Math.trunc(infecByReqTime * (85 / 100) * 5 * 30);
}

function assignValues() {
  let infecsByReqTime1 = op.impact.infectionsByRequestedTime;
  let infecsByReqTime2 = op.severeImpact.infectionsByRequestedTime;
  op.impact.currentlyInfected = impactCurrentlyInfected();
  op.severeImpact.currentlyInfected = sevImpactCurrentlyInfected();
  infecsByReqTime2 = infecs(output.impact.currentlyInfected);
  infecsByReqTime2 = infecs(output.severeImpact.currentlyInfected);
  op.impact.severeCasesByRequestedTime = sevCases(infecsByReqTime1);
  op.severeImpact.severeCasesByRequestedTime = sevCases(infecByReqTime2);
  op.impact.hospitalBedsByRequestedTime = beds();
  op.severeImpact.hospitalBedsByRequestedTime = beds();
  op.impact.casesForICUByRequestedTime = icu(infecsByReqTime1);
  op.severeImpact.casesForICUByRequestedTime = icu(infecsByReqTime2);
  op.impact.casesForVentilatorsByRequestedTime = ventilators(infecsByReqTime1);
  op.severeImpact.casesForVentilatorsByRequestedTime = ventilators(infecsByReqTime2);
  op.impact.dollarsInFlight = dollars(output.impact.infectionsByRequestedTime);
  op.severeImpact.dollarsInFlight = dollars(output.severeImpact.infectionsByRequestedTime);
}

export default assignValues;

import data from './data';
import output from './output-variables';

const covid19ImpactEstimator = (data) => output;

let newData = data;

const inputForm = document.getElementById('input-form');


function submitHandler(event) {
  event.preventDefault();
  newData.population = document.getElementById('data-population').value;
  newData.timeToElapse = document.getElementById('data-time-to-elapse').value;
  newData.reportedCases = document.getElementById('data-reported-cases').value;
  newData.totalHospitalBeds = document.getElementById('data-total-hospital-beds').value;
  newData.periodType = document.getElementById('data-period-type').value;
  covid19ImpactEstimator(newData);
}

inputForm.onSubmit = submitHandler;

export default covid19ImpactEstimator;

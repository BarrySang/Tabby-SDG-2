import data from './data';
import output from './output-variables';

const covid19ImpactEstimator = (data) => output;

const inputForm = document.getElementById('input-form');


function submitHandler(event) {
  event.preventDefault();
  data.population = document.getElementById('data-population').value;
  data.timeToElapse = document.getElementById('data-time-to-elapse').value;
  data.reportedCases = document.getElementById('data-reported-cases').value;
  data.totalHospitalBeds = document.getElementById('data-total-hospital-beds').value;
  data.periodType = document.getElementById('data-period-type').value;
  covid19ImpactEstimator(data)
}

inputForm.onSubmit = submitHandler;

export default covid19ImpactEstimator;
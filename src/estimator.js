import data from './data';
import output from './output-variables';

const covid19ImpactEstimator = (data) => output;

const inputForm = document.getElementById('input-form');
inputForm.onSubmit = submitHandler;

function submitHandler() {
  event.preventDefault();
  data.population = document.getElementById('data-population').value;
  data.timeToElapse = document.getElementById('data-time-to-elapse').value;
  data.reportedCases = document.getElementById('data-reported-cases').value;
  data.totalHospitalBeds = document.getElementById('data-total-hospital-beds').value;
  data.periodType = document.getElementById('data-period-type').value;
  console.log(covid19ImpactEstimator(data));
}

export default covid19ImpactEstimator;
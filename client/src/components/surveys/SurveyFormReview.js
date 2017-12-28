// shows users their form inputs for reviews
import React from 'react';
import formFields from './formFields';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
        <div key={name}>
          <label>{label}</label>
          <div>
            {formValues[name]}
          </div>
        </div>
    );
  });
  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={ onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={ () => submitSurvey(formValues, history) }
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));

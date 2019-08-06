import React from 'react';

import './styles.scss';
import img_result from '../../../assets/result-img.png';
function Home() {
  const [result, actionResult] = React.useState(null);
  const [loading, actionLoading] = React.useState(false);

  function onSubmit(e) {
    e.preventDefault();
    actionLoading(true);
    fetch('http://127.0.0.1:5000/heart', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        age: e.target.age.value,
        sex: e.target.sex.value,
        cp: e.target.cp.value,
        trestbps: e.target.trestbps.value,
        chol: e.target.chol.value,
        fbs: e.target.fbs.value,
        restecg: e.target.restecg.value,
        thalach: e.target.thalach.value,
        exang: e.target.exang.value,
        oldpeak: e.target.oldpeak.value,
        slope: e.target.slope.value,
        ca: e.target.ca.value,
        thal: e.target.thal.value,
      }),
    })
      .then(response => response.json())
      .then(response => {
        actionResult(response.result);
        actionLoading(false);
      });
  }

  // React.useEffect(() => {
  //   return () => {
  //     console.log(loading);
  //     console.log(result);
  //   };

  // Regex Expresstion

  // const minAge = ^(?:[2][5-9]|(?:[3-9][0-9]+)|(?:[1-9][0-9][0-9]+))$;

  return (
    <div className="container pt-5 mt-5 pb-5 main">
      {loading === false && result === null ? (
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-5">
              <div className="form-group row">
                <label className="col-6 col-form-label">Age</label>
                <div className="col-6">
                  <input
                    className="form-control"
                    type="text"
                    name="age"
                    placeholder={'Min 25 Age'}
                    pattern="^(?:[2][5-9]|(?:[3-9][0-9]+)|(?:[1-9][0-9][0-9]+))$"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-6 col-form-label">Sex</label>
                <div className="col-6">
                  <select className="form-control" name="sex" required>
                    <option value="" disabled selected>
                      Select Type Sex
                    </option>
                    <option value="0">Femele</option>
                    <option value="1">Mele</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-6 col-form-label">Cp</label>
                <div className="col-6">
                  <select className="form-control" name="cp" required>
                    <option value="" disabled selected>
                      Select Chest Pain Type
                    </option>
                    <option value="0">Typical Angina</option>
                    <option value="1">Atypical Angina</option>
                    <option value="2">Non-Anginal Pain</option>
                    <option value="3">Asymptomatic</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-6 col-form-label">Trestbps </label>
                <div className="col-6">
                  <input
                    className="form-control"
                    name="trestbps"
                    type="text"
                    placeholder={'Range 90 - 200'}
                    pattern="^([9][0-9]|[01][0-9][0-9]|20[0-0])$"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-6 col-form-label">Chol</label>
                <div className="col-6">
                  <input
                    className="form-control"
                    name="chol"
                    type="text"
                    placeholder={'Range 120 - 600'}
                    pattern="(1[2-8][0-9]|19[0-9]|[2-5][0-9]{2}|600)"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-6 col-form-label">
                  Fbs (> 120 mg/dl)
                </label>
                <div className="col-4">
                  <select className="form-control" name="fbs" required>
                    <option value="" disabled selected>
                      Yes / No
                    </option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="offset-1 col-6">
              <div className="form-group row">
                <label className="col-6 col-form-label">Restecg</label>
                <div className="col-6">
                  <select className="form-control" name="restecg" required>
                    <option value="" disabled selected>
                      Select Type Resting ECG
                    </option>
                    <option value="0">Normal </option>
                    <option value="1">Having ST-T Wave Abnormality </option>
                    <option value="2">Left Ventricular Hypertrophy</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-6 col-form-label">Thalach</label>
                <div className="col-6">
                  <input
                    className="form-control"
                    name="thalach"
                    type="text"
                    placeholder={'Range 70 - 200'}
                    pattern="^([7-9][0-9]|[01][0-9][0-9]|20[0-0])$"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-6 col-form-label">Exang</label>
                <div className="col-6">
                  <select className="form-control" name="exang" required>
                    <option value="" disabled selected>
                      Yes / No
                    </option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-6 col-form-label">Old Peak</label>
                <div className="col-6">
                  <input
                    className="form-control"
                    name="oldpeak"
                    type="text"
                    placeholder={'Range 0 - 4'}
                    pattern="([0-4])"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-6 col-form-label">Slope</label>
                <div className="col-6">
                  <select className="form-control" name="slope" required>
                    <option value="" disabled selected>
                      Select Type Slope
                    </option>
                    <option value="0">Up Sloping</option>
                    <option value="1">Flat</option>
                    <option value="2">Down Sloping</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-6 col-form-label">Ca</label>
                <div className="col-6">
                  <select className="form-control" name="ca" required>
                    <option value="" disabled selected>
                      Select Number of Vessels Colored
                    </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-6 col-form-label">Thal</label>
                <div className="col-6">
                  <select className="form-control" name="thal" required>
                    <option value="" disabled selected>
                      Select Type Thalium stress
                    </option>
                    <option value="1">Normal</option>
                    <option value="2">Fixed Defect</option>
                    <option value="3">Reversable Defect</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 text-center pt-5">
            <button className="btn btn-primary" type="submit">
              Process Data
            </button>
          </div>
        </form>
      ) : loading === true && result === null ? (
        <Loading />
      ) : (
        <Result hasil={result} />
      )}
    </div>
  );
}

const Loading = () => {
  return <h1>Loding...</h1>;
};
const Result = ({hasil}) => {
  return (
    <div className="result">
      <div class="card" style={{width: '20em'}}>
        <img src={img_result} className="card-img-top" alt="result" />
        <div class="card-body">
          <p class="card-text">{hasil}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

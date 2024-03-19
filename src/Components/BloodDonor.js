import React, { Component } from 'react';
import './BloodDonor.css'; // Import CSS file with the new name

class DonorInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bloodGroup: '',
      city: '',
      state: '',
      availableHospitals: [],
      hospitalsData: {},
      isBloodGroupSelected: false, // Added state to track blood group selection
      isDataLoaded: false, // Added state to track if data is loaded
    };
  }

  handleBloodGroupChange = (e) => {
    this.setState({ bloodGroup: e.target.value, isBloodGroupSelected: true });
  };

  handleCityChange = (e) => {
    this.setState({ city: e.target.value });
  };

  handleStateChange = (e) => {
    this.setState({ state: e.target.value });
  };

  handleSearch = () => {

    const hospitalsData = {
     
      'Hyderabad': [
        {
          name: 'KIMS Hospitals Kondapur',
          address: '1-112 / 86, Survey No 5 / EE, beside Union Bank, near RTA Office, Kondapur, Telangana 500084',
          contact: '8398733770',
          image: './Photos/kims.png'
        },
        {
          name: 'Apollo Hospitals Jubilee Hills Hyderabad',
          address: 'Rd Number 72, opposite Bharatiya Vidya Bhavan School, Film Nagar, Hyderabad, Telangana 500033',
          contact: '9698733250',
          image: './Photos/apollo.png'
        },
    
      ],
      'Warangal': [
        {
          name: 'Jaya Hospital',
          address: 'MNO Road,Hanumakonda , Warangal, Telangana',
          contact: '7698735251',
          image: './Photos/jaya.png'
        },
        {
          name: 'Hospital N',
          address: 'PQR Street, Warangal, Telangana, Zip',
          contact: '+7766554433',
          image: 'https://example.com/hospital-n.jpg'
        }
      ]
    };

    const hospitals = hospitalsData[this.state.city] || [];

    if (hospitals.length > 0) {
      this.setState({
        availableHospitals: hospitals.map((hospital) => hospital.name),
        hospitalsData: hospitals.reduce((acc, hospital) => {
          acc[hospital.name] = hospital;
          return acc;
        }, {}),
        isDataLoaded: true,
      });
    } else {
      this.setState({
        availableHospitals: [],
        hospitalsData: {},
        isDataLoaded: true,
      });
    }
  };

  render() {
    const { bloodGroup, city, state, availableHospitals, hospitalsData, isBloodGroupSelected, isDataLoaded } = this.state;

    const citiesAndhraPradesh = ['Vijayawada', 'Visakhapatnam', 'Guntur'];
    const citiesTelangana = ['Hyderabad', 'Warangal', 'Karimnagar'];

    return (
      <div className="donor-container">
        <h1 className="donor-heading">Donor Information</h1>
        <div>
          <label className="donor-label" htmlFor="bloodGroup">Select Blood Group:</label>
          <select className="donor-select" id="bloodGroup" value={bloodGroup} onChange={this.handleBloodGroupChange}>
            <option value="">Select...</option>
            <option value="A+">A+</option>
        
            <option value="B+">B+</option>
           
            <option value="O+">O+</option>
 
          </select>
        </div>
        {isBloodGroupSelected && ( // Conditionally render the search button
          <div>
            <label className="donor-label" htmlFor="state">State:</label>
            <select className="donor-select" id="state" value={state} onChange={this.handleStateChange}>
              <option value="">Select State...</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Telangana">Telangana</option>
            </select>
          </div>
        )}
        {isBloodGroupSelected && state && ( // Conditionally render the city dropdown based on state selection
          <div>
            <label className="donor-label" htmlFor="city">City:</label>
            <select className="donor-select" id="city" value={city} onChange={this.handleCityChange}>
              <option value="">Select City...</option>
              {state === 'Andhra Pradesh' &&
                citiesAndhraPradesh.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              {state === 'Telangana' &&
                citiesTelangana.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>
        )}
        {isBloodGroupSelected && state && city && ( // Conditionally render the search button based on blood group, state, and city selection
          <button className="donor-button" onClick={this.handleSearch}>Search</button>
        )}
        <div>
          <h2 className="donor-heading">Available Hospitals:</h2>
          {isDataLoaded ? (
            availableHospitals.length > 0 ? (
              <ul className="donor-list">
                {availableHospitals.map((hospitalName, index) => (
                  <li className="donor-item" key={index}>
                    <img className="donor-img" src={hospitalsData[hospitalName]?.image} alt={hospitalName} />
                    <div className="donor-hospital-info">
                      <h3>{hospitalName}</h3>
                      <p>Address: {hospitalsData[hospitalName]?.address}</p>
                      <p>Contact: {hospitalsData[hospitalName]?.contact}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hospitals available</p>
            )
          ) : (
            <p>Please select criteria and click Search</p>
          )}
        </div>
      </div>
    );
  }
}

export default DonorInformation;

import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import '../css/form.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Button from 'react-bootstrap/Button';
import ReviewPage from './ReviewPage';
import {root} from '../index'


class ClaimForm extends Component {
    constructor(props) {
        super(props);
        //this.today= new Date();
        this.state = {
            fullName: "",
            phone: "",
            email: "",
            address: "",
            city: "",
            zip: "",
            stateVal: "",
            powerLoss: new Date(),
            lossAmount: "",
            insurance: "",

        }
    }




    componentDidMount(){
        if(this.props.fromScreen=="submit"){
            localStorage.removeItem("formData");
        }
        else{
        const reviewData = JSON.parse(localStorage.getItem("formData"));
        reviewData && this.setState({
            fullName: reviewData.fullName ||"",
            phone: reviewData.phone ||"",
            email: reviewData.email ||"",
            address: reviewData.address||"",
            city: reviewData.city ||"",
            zip: reviewData.zip||"",
            stateVal: reviewData.stateVal||"",
            lossAmount: reviewData.lossAmount||"",
            insurance: reviewData.insurance||"",
        })
    }
    }
    options = [
        { value: 'Texas', label: 'Texas' },
        { value: 'Louisiana', label: 'Louisiana' }
    ]
    startDate = () => { return new Date() }

    handleFullName = (e) => {
        this.setState({
            fullName: e.target.value
        })
    }

    handlePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    handleCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    handleZip = (e) => {
        this.setState({
            zip: e.target.value
        })
    }

    handleStateVal = (e) => {
        this.setState({
            stateVal: e
        })
    }

    handleLossAmount = (e) => {
        this.setState({
            lossAmount: e.target.value
        })
    }

    handleInsurance = (e) => {
        this.setState({
            insurance: e.target.value
        })
    }

    handleDate = (date) =>{
        this.setState({
            powerLoss: date
        })
    }

    handleReviewClick = () => {
        // <ReviewPage reviewInfo={this.state} />
        
        localStorage.setItem("formData",JSON.stringify(this.state));
        //const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                <ReviewPage reviewInfo={this.state} />
            </React.StrictMode>
        );

    }

    handleClear = () =>{
        localStorage.removeItem("formData");
        this.setState({
            fullName: "",
            phone: "",
            email: "",
            address: "",
            city: "",
            zip: "",
            stateVal: "",
            powerLoss: new Date(),
            lossAmount: "",
            insurance: "",
        })

    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>
                        Claim Form
                    </h1>
                </div>
                <div className="form-container">
                    <fieldset>
                        <legend>
                            Contact Information
                        </legend>
                        <label className="fullName-label">Full Name:</label>
                        <input type="text" value={this.state.fullName} onChange={this.handleFullName}></input> <br /><br />
                        <label className="phoneNumber-label">Phone number:</label>
                        <input type="text" value={this.state.phone} onChange={this.handlePhone}></input><br /><br />
                        <label className="email-label">Email:</label>
                        <input type="text" value={this.state.email} onChange={this.handleEmail}></input><br /><br />
                    </fieldset>
                    <fieldset>

                        <legend>
                            Property information
                        </legend>
                        <label className="address-label">Address:</label>
                        <input type="text" value={this.state.address} onChange={this.handleAddress}></input><br /><br />
                        <label className="city-label">City:</label>
                        <input type="text" value={this.state.city} onChange={this.handleCity}></input><br /><br />
                        <label className="zip-label">Zip Code: </label>
                        <input type="text" value={this.state.zip} onChange={this.handleZip}></input><br /><br />
                        <label>State</label>
                        <Select options={this.options} value={this.state.stateVal} onChange={this.handleStateVal} defaultValue={this.options[0]} /><br /><br />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Property information
                        </legend>
                        <label className="address-label">Date of Power Loss:</label>
                        <DatePicker selected={this.state.powerLoss} onChange={this.handleDate} /><br /><br />
                        <label className="city-label">loss Amount:</label>
                        <input type="text" value={this.state.lossAmount} onChange={this.handleLossAmount}></input><br /><br />
                        <label className="zip-label">insurance company: </label>
                        <input type="text" value={this.state.insurance} onChange={this.handleInsurance}></input><br /><br />

                    </fieldset>
                    <div className="Allbuttons">
                        <button className="ReviewButton" onClick={this.handleReviewClick}> Review</button>
                        <button className="ClearButton" onClick={this.handleClear}>Clear All</button>
                        {/* <Button variant="primary">Review</Button>
                        <Button variant="secondary">Review</Button> */}
                    </div>
                    {/* <Router>
                    <Link to="/ReviewPage" />

                    <Routes>
                        <Route exact path='/ReviewPage' element={<ReviewPage />}></Route>
                    </Routes>
                    {this.state.reviewFlag && 
                     (<Navigate to="/ReviewPage" replace={true} />)}
                    </Router> */}
                



                </div>
            </React.Fragment>
        )
    }
}

export default ClaimForm;
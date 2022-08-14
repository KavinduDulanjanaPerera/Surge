import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

class App extends Component {
    constructor (){
        super()
        this.state = {

            firstName:'',
            lastName:'',
            userName:'',
            email:'',
            password:'',
            dateOfBirth:'',
            mobile:'',
            Status:'',
            accountType:'',

        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
        this.changeemail = this.changeemail.bind(this)
        this.changepassword = this.changepassword.bind(this)
        this.changeDateOfBirth = this.changeDateOfBirth.bind(this)
        this.changeMobile = this.changeMobile.bind(this)
        this.changeStatus = this.changeStatus.bind(this)
        this.changeAccountType = this.changeAccountType.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    changeFirstName(event){
        this.setState({
            firstName: event.target.value
        })
    }

    changeLastName(event){
        this.setState({
            lastName: event.target.value
        })
    }

    changeUserName(event){
        this.setState({
            userName: event.target.value
        })
    }

    changeemail(event){
        this.setState({
            email: event.target.value
        })
    }

    changepassword(event){
        this.setState({
            password: event.target.value
        })
    }

    changeDateOfBirth(event){
        this.setState({
            dateOfBirth: event.target.value
        })
    }

    changeStatus(event){
        this.setState({
            Status: event.target.value
        })
    }

    changeMobile(event){
        this.setState({
            mobile: event.target.value
        })
    }

    changeAccountType(event){
        this.setState({
            accountType: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()
        const registered = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            email: this.state.userName,
            password: this.state.password,
            dateOfBirth: this.state.dateOfBirth,
            mobile: this.state.mobile,
            Status: this.state.Status,
            accountType: this.state.accountType, 
        }

        axios.post('http://localhost:4000/app/signup' , registered)
        .then(response => console.log(response.data)) 

        this.setState = {

            firstName:'',
            lastName:'',
            userName:'',
            email:'',
            password:'',
            dateOfBirth:'',
            mobile:'',
            Status:'',
            accountType:'',

        }
    }

    render (){
        return ( 
            <div>
                <div className='container'>
                    <div className='form-div'></div>
                    <form onSubmit={this.onSubmit}>

                        <input type = 'text'
                        placeholder='First Name'
                        onRateChange={this.changeFirstName}
                        value= {this.state.firstName}
                        className= 'form-control form-group'
                        />

                        <input type = 'text'
                        placeholder='Last Name'
                        onRateChange={this.changeLastName}
                        value= {this.state.lastName}
                        className= 'form-control form-group'
                        />

                        <input type = 'text'
                        placeholder='Username'
                        onRateChange={this.changeUserName}
                        value= {this.state.userName}
                        className= 'form-control form-group'
                        />

                        <input type = 'text'
                        placeholder='Email'
                        onRateChange={this.changeemail}
                        value= {this.state.email}
                        className= 'form-control form-group'
                        />

                        <input type = 'text'
                        placeholder='Password'
                        onRateChange={this.changepassword}
                        value= {this.state.password}
                        className= 'form-control form-group'
                        />

                        <input type = 'text'
                        placeholder='Date of Birth'
                        onRateChange={this.changeDateOfBirth}
                        value= {this.state.dateOfBirth}
                        className= 'form-control form-group'
                        />

                        <input type = 'text'
                        placeholder='Mobile Number'
                        onRateChange={this.changeMobile}
                        value= {this.state.mobile}
                        className= 'form-control form-group'
                        />

                        <input type = 'text'
                        placeholder='Status'
                        onRateChange={this.changeStatus}
                        value= {this.state.Status}
                        className= 'form-control form-group'
                        />

                        <input type = 'text'
                        placeholder='Account Type'
                        onRateChange={this.changeAccountType}
                        value= {this.state.accountType}
                        className= 'form-control form-group'
                        />

                        <input type = 'submit'
                        value= 'Submit'
                        className= 'btn btn-danger btn-block'
                        />

                    </form>
                </div>
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import { CONF, URLS } from '../config';
import { getQueryVariables } from '../utils';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = getQueryVariables();
        this.state.submitted = false;
    }

    render() {
        return (<form className="bftn-form call-action-form" onSubmit={ this.onSubmit.bind(this) }>

            <h4><strong>Sign to Tell Congress:</strong></h4>
            <h3>Oppose Trump FCC’s plan to destroy net neutrality and the open internet</h3>
            <p style={{color: 'white'}}><strong style={{ fontSize: "30px" }}>Time is running out before Trump’s FCC and Big Cable destroy net neutrality — but we can still stop them.</strong>
                <br/><br/>
                <strong>Trump-appointed FCC Chairman Ajit Pai, a former lawyer for Verizon, is expected to announce a vote on a plan to end net neutrality as soon as November 22, the day before Thanksgiving.</strong>
                <br/><br/>
                Add your name to send a message (below) to Congress:
            </p>
            <div style={{ 'display' : this.state.submitted ? 'none' : ''}}>
            <div className="flex">
                <input type="text" className="form-input" name="name" placeholder="Your Name" />
                <input type="email" className="form-input" name="email" placeholder="Your Email" />
            </div>
            <div className="flex">
                <input type="text" className="form-input" name="street" placeholder="Street Address" />
                <input type="text" className="form-input" name="zip" placeholder="Your Zipcode" />
            </div>
            <div className="flex">
                <button className="btn">
                    <span>Submit</span>
                </button>
            </div>
            </div>
            <p><i>One or more participating organizations (listed below) may email you about their campaigns.</i></p>
            <h4 style={{ 'display' : this.state.submitted ? '' : 'none'}}><strong>Thanks for signing!</strong></h4>
        </form>);
    }

    onSubmit(evt) {
        evt.preventDefault();

        const form = evt.target;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        const name = form.name;
        if (!name.value.trim()) {
            name.focus();
            alert('Please enter your name.');
            return;
        }


        const email = form.email;
        if (!email.value.trim()) {
            email.focus();
            alert('Please enter your email.');
            return;
        } else if (!emailRegex.test(email.value.trim())) {
            email.focus();
            alert('Please enter a valid email.');
            return;
        }

        const address1 = form.street;
        if (!address1.value.trim()) {
            address1.focus();
            alert("Please enter your address.");
            return;
        }

        const zip = form.zip;
        if (!zip.value.trim()) {
            zip.focus();
            alert('Please enter your Zipcode.');
            return;
        } else if (zip.value.length < 5 || zip.value.length > 5) {
            zip.focus();
            alert('Please enter a valid Zipcode.');
            return;
        }

        const fields = {
            'action_user_agent': navigator.userAgent,
            'country': 'United States',
            'email': email.value.trim(),
            'form_name': 'act-petition',
            'js': 1,
            'name': name.value.trim(),
            'address1': address1.value.trim(),
            'zip': zip.value.trim(),
            'opt_in': 1,
            'page': CONF.actionKitPageShortName,
            'source': this.state.source || 'website',
            'want_progress': 1
        };

        this.setState({ submitted: true });
        this.sendFormToActionKit(fields);
    }

    sendFormToActionKit(fields) {
        // iFrame
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.setAttribute('name', 'actionkit-iframe');
        document.body.appendChild(iframe);

        // Form
        const form = document.createElement('form');
        form.style.display = 'none';
        form.setAttribute('action', URLS.actionKit);
        form.setAttribute('method', 'post');
        form.setAttribute('target', 'actionkit-iframe');
        document.body.appendChild(form);

        Object.keys(fields).forEach(function(key) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = fields[key];
            form.appendChild(input);
        });

        form.submit()
    }

}

export default Form;
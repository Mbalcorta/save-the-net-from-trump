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
            <p><i>If implemented, the plan from Trump’s FCC Chairman Ajit Pai to end net neutrality would be catastrophic for the open internet.
                <br/><br/>
                Net neutrality is the core principle that protects our free speech on the internet, and ‘Title II’ of the Communications Act is what provides the legal foundation for <em>real net neutrality</em>. Without strong Title II net neutrality rules, Big Cable companies like Comcast and Verizon will be able to block, censor, and control what we see and do online.
                <br/><br/>
                Now is the time to stand up against this plan to destroy net neutrality — which would kill free expression and innovation online. Stand with your constituents, not Comcast.
                <br/><br/>
                As your constituent, I urge you to strongly and publicly oppose Pai’s plan to end Title II net neutrality protections.</i>
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
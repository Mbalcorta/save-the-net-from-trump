import React, { Component } from 'react';
import { CONF, URLS } from '../config';
import { getQueryVariables } from '../utils';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = getQueryVariables();
        this.state.submitted = false;
        this.state.countDown = 5;
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
            <div id="signThePetition" style={{ 'display' : this.state.submitted ? 'none' : ''}}>
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
            <span><i>One or more of the participating organizations (listed at bottom) may email you about their campaigns.</i></span>
            <div id="thanks" style={{ 'display' : this.state.submitted ? '' : 'none'}}>
                <h4>Thanks for signing.</h4>
                <p>
                    <strong style={{fontSize: '20px'}}>
                        Now, one of the most impactful things you can do to help save net neutrality before Nov. 22 is to make phone calls to Congress.
                    </strong>
                    <br/><br/>
                    If offices get more phone calls from constituents, we can persuade them to stop the catastrophic plan to repeal net neutrality.
                </p>
                <h4 style={{textAlign: 'right'}}>Please Call: <a href="tel:4243634877">424-363-4877</a></h4>
                <p>
                    We will connect you to the offices of your lawmakers.
                    <br/><br/>
                    You can use this script when talking to them -- <strong>just introduce yourself, be polite, and say</strong>:
                    <br/><br/>
                    <i style={{textAlign: 'center'}}>"I support 'Title Two' net neutrality rules and I urge you to oppose the FCC's plan to repeal them. Specifically, I'd like you to contact the FCC Chairman and demand he abandon his current plan."</i>
                </p>
            </div>
        </form>);
    }

    countDownToRedirect() {
        if (this.state.countDown <= 1) {
            window.location.href = "https://battleforthenet.com";
        }
        this.setState( { countDown: this.state.countDown - 1 });
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

        // setInterval(this.countDownToRedirect.bind(this), 1000);
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
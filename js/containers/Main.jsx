import React, { Component } from 'react';
import Form from './Form.jsx';

class Main extends Component {

    render() {
        return (<div className="unit">
            <div className="hero" id="bftn-action-form">
                <div className="">
                    <div>
                        <Form />
                    </div>

                </div>
                <div className="unit">
                    <p style={{color: 'white'}}>
                    <strong style={{ fontSize: "30px" }}>Time is running out before Trump’s FCC and Big Cable destroy net neutrality — but we can still stop them.</strong>
                    <br/><br/>
                    <strong>Trump-appointed FCC Chairman Ajit Pai, a former lawyer for Verizon, is expected to announce a vote on a plan to end net neutrality as soon as November 22, the day before Thanksgiving.</strong>
                    <br/><br/>
                    If Pai gets his way and ends net neutrality, Big Cable companies like his old employer Verizon, as well as Comcast and AT&T, will be able to slow down and block websites, or charge sites extra fees to reach an audience — fees that will get passed directly to people like you. Big Cable will be able to curtail free and open expression on the internet. This will affect online campaigning, especially among communities of color, who also rely on online media to share their stories.
                    <br/><br/>
                    The U.S. public overwhelmingly supports net neutrality, regardless of political affiliations. <strong>Now, we’re hearing that key lawmakers are considering taking action to slow Pai down — but they need to hear more from constituents to push them to act. That’s where you come in.</strong>
                    <br/><br/>
                    If we flood Congress with petitions and calls, there’s a chance we can still stop Trump’s hand-picked FCC Chair Ajit Pai and Big Cable before November 22. <strong>Will you sign the petition and call Congress to let your lawmakers know you want them to publicly oppose Pai’s plan to destroy net neutrality?</strong>
                    <br/><br/>
                    Without net neutrality, the Internet will look more like cable TV — where the content we see is controlled by corporations like Comcast and Verizon. We can’t afford to see the internet—a place where the exchange of ideas, democratic participation and the ability to organize has flourished—turn into cable TV. <strong>Sign the petition and call Congress today.</strong>
                    </p>
                </div>
            </div>
        </div>);
    }
}

export default Main;
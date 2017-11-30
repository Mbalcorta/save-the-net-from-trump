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
                    <p style={{color: 'white', textAlign: 'center'}}>
                        <h4>Here's the language that will be sent to Congress:</h4>
                    </p>
                    <p style={{color: 'white', textAlign: 'center'}}><i>
                        "If implemented, the plan from Trump’s FCC Chairman Ajit Pai to end net neutrality would be catastrophic for the open internet.
                        <br/><br/>
                        "Net neutrality is the core principle that protects our free speech on the internet, and ‘Title II’ of the Communications Act is what provides the legal foundation for real net neutrality. Without strong Title II net neutrality rules, Big Cable companies like Comcast and Verizon will be able to block, censor, and control what we see and do online.
                        <br/><br/>
                        "Now is the time to stand up against this plan to destroy net neutrality — which would kill free expression and innovation online. Stand with your constituents, not Comcast.
                        <br/><br/>
                        "As your constituent, I urge you to strongly and publicly oppose Pai’s plan to end Title II net neutrality protections."
                    </i></p>
                    <hr/>
                    <h4 style={{color: 'white', textAlign: 'center'}}>More information:</h4>
                    <p style={{ textAlign: 'center' }}>
                        If Pai gets his way and ends net neutrality, Big Cable companies like his old employer Verizon, as well as Comcast and AT&T, will be able to slow down and block websites, or charge sites extra fees to reach an audience — fees that will get passed directly to people like you. Big Cable will be able to curtail free and open expression on the internet. This will affect online campaigning, especially among communities of color, who also rely on online media to share their stories.
                        <br/><br/>
                        The U.S. public overwhelmingly supports net neutrality, regardless of political affiliations. <strong>Now, we’re hearing that key lawmakers are considering taking action to slow Pai down — but they need to hear more from constituents to push them to act. That’s where you come in.</strong>
                        <br/><br/>
                        If we flood Congress with petitions and calls, there’s a chance we can still stop Trump’s hand-picked FCC Chair Ajit Pai and Big Cable before December 14th. <strong>Will you sign the petition and call Congress to let your lawmakers know you want them to publicly oppose Pai’s plan to destroy net neutrality?</strong>
                        <br/><br/>
                        Without net neutrality, the Internet will look more like cable TV — where the content we see is controlled by corporations like Comcast and Verizon. We can’t afford to see the internet—a place where the exchange of ideas, democratic participation and the ability to organize has flourished—turn into cable TV.
                        <br/><br/>
                        <a className="back-to-form-link" href="#signThePetition">Sign the petition and call Congress today.</a>
                    </p>

                </div>
            </div>
        </div>);
    }
}

export default Main;
import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="unit">
                    <div className="logos">
                        <a target="_blank" href="https://www.dailykos.com/">
                            <img src="images/DailyKosLogo.png" />
                        </a>

                        <a target="_blank" href="https://www.lovearmy.org/">
                            <img src="images/Love Army 1.png" />
                        </a>

                        <a target="_blank" href="https://www.thenation.com/">
                            <img src="images/Nation.jpg" />
                        </a>

                        <a target="_blank" href="http://www.pfaw.org/">
                            <img src="images/PFAW.png" />
                        </a>

                        <a target="_blank" href="http://rootsaction.org/">
                            <img src="images/RootsAction.png" />
                        </a>

                        <a target="_blank" href="">
                            <img src="images/CMJ logo hi-res.jpg" />
                        </a>

                        <a target="_blank" href="">
                            <img src="images/CC_Logo_RBGWeb.jpg" />
                        </a>

                        <a target="_blank" href="">
                            <img src="images/pkname-large (4).png" />
                        </a>

                        <a target="_blank" href="">
                            <img src="images/IMG_9304.jpg" />
                        </a>

                        <a target="_blank" href="">
                            <img src="images/Pen_Box_lrg (1).jpg" />
                        </a>

                        <a target="_blank" href="http://www.peopledemandingaction.org/">
                            <img style={{maxWidth: '150px'}} src="images/Logo-PeopleDemandingAction.jpg" />
                        </a>
                    </div>
                    <div className="spacer"></div>
                    <div>
                        <div className="press-inquiries">
                            <h3>For Press inquiries, please contact us at:</h3>
                            <p>
                                <a className="no-em" href="tel://1-202-681-7582">202-681-7582</a> or <a href="mailto:press@demandprogress.org">press@demandprogress.org</a>
                            </p>

                            <br/>
                            <p>
                                <a href="https://demandprogress.org/privacy-policy/" target="_blank">Our privacy policy</a>
                            </p>
                        </div>
                        <div className="social-media">
                            <a className="twitter" href="https://twitter.com/intent/tweet?related=fightfortheftr&text=What%0A%0A%20if%0A%0A%20the%0A%0A%20Internet%0A%0A%20was%0A%0A%20so%0A%0A%20slow%0A%0A%20it%0A%0A%20loaded%0A%0A%20one%0A%0A%20word%0A%0A%20at%0A%0A%20a%0A%0A%20time?%0A%0A%20Defend%20%23NetNeutrality%20https://www.battleforthenet.com" target="_blank">
                                <img src="images/twitter_white.svg" />
                                <span>Share on twitter</span>
                            </a>
                            <a className="facebook" href="https://www.facebook.com/sharer.php?u=https://www.battleforthenet.com/" target="_blank">
                                <img src="images/facebook_white.svg" />
                                <span>Share on facebook</span>
                            </a>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    <div className="built-by">
                        <span>Built by:</span> <img src="images/demand-progress.png" />
                    </div>
                </div>
            </div>);
    }
}

export default Footer;
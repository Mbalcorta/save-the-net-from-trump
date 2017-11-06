import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="logos-unit">
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

                        <a target="_blank" href="">
                            <img src="images/IMG_8465.jpg" />
                        </a>

                        <a target="_blank" href="">
                            <img src="images/fp-actionfund.png" />
                        </a>

                        <a target="_blank" href="">
                            <img src="images/PC logo-high resolution.jpg" />
                        </a>

                        <a target="_blank" href="">
                            <img src="images/PresenteAction2016.png" />
                        </a>

                        <a target="_blank" href="">
                            <img src="images/PasAFV.png" />
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
                            <a className="twitter" href="https://twitter.com/intent/tweet?text=Call%20Congress!%20Time%27s%20running%20out%20before%20Trump%E2%80%99s%20FCC%20%26%20Big%20Cable%20destroy%20%23NetNeutrality%20%E2%80%94%20but%20we%20can%20still%20stop%20them%20https%3A%2F%2Fdemand-progress.github.io%2Fsave-the-net-from-trump%2F" target="_blank">
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
import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="unit">
                    <div className="logos">
                        <a className="fftf" href="https://www.fightforthefuture.org/">
                            <img src="/images/v2/footer-fftf-logo.png" srcSet="/images/v2/footer-fftf-logo-x2.png 2x" />
                        </a>
                        <a className="demandprogress" href="https://demandprogress.org/">
                            <img src="/images/v2/footer-demandprogress-logo.png" srcSet="/images/v2/footer-demandprogress-logo-x2.png 2x" />
                        </a>
                        <a className="freepress" href="https://www.freepress.net/">
                            <img src="/images/v2/footer-freepress-logo.png" srcSet="/images/v2/footer-freepress-logo-x2.png 2x" />
                        </a>
                    </div>
                    <div className="spacer"></div>
                    <div>
                        <div className="press-inquiries">
                            <h3>For Press inquiries, please contact us at:</h3>
                            <p>
                                <a href="tel://1-978-852-6457">978-852-6457</a> or <a href="tel://1-978-852-6457">978-852-6457</a> or <a href="mailto:press@fightforthefuture.org">press@fightforthefuture.org</a><br />
                                <a className="no-em" href="tel://1-201-533-8838">201-533-8838</a> or <a href="mailto:tkarr@freepress.net">tkarr@freepress.net</a><br />
                                <a className="no-em" href="tel://1-202-681-7582">202-681-7582</a> or <a href="mailto:press@demandprogress.org">press@demandprogress.org</a>
                            </p>
                            <p>All other inquiries, contact <a href="mailto:team@fightforthefuture.org">team@fightforthefuture.org</a></p>
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
                        <span>Built by:</span> <img src="/images/v2/credit-fftf.png" srcSet="/images/v2/credit-fftf-x2.png 2x" />
                    </div>
                </div>
            </footer>);
    }
}

export default Footer;
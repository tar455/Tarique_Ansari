import React from 'react';

export default function footer() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <footer className="footer-container">
                        <div>
                            Contact us
                            </div>
                        <div className="row flex-column">
                           <div className="col-sm">
                            <p>
                            <a btn="btn btn-social-icon btn-instagram" href="https://www.instagram.com/tarique_14_/"><i className="fab fa-instagram-square"></i></a>
                            <a btn="btn btn-social-icon btn-facebook" href="https://www.facebook.com/mdtarique.ansari.12/"><i className="fab fa-facebook-square"></i></a>
                            <a href="https://twitter.com/MDTariq66497417"><i className="fab fa-twitter-square"></i></a>
                            <a href="mailto: tariqueansari455@gmail.com"><i className="fas fa-envelope"></i></a>
                            <label htmlFor="num">
                                Contact No:
                            </label>
                            <a href="tel:+91 7679773244" id="num">
                                +91 7679773244
                                </a>
                            </p>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <p>© Copyright 2021</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

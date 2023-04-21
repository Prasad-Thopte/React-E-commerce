import React from 'react'
import './css/style.css'


function Footer() {
    const date = new Date().getFullYear();
    return (
        <>

            <footer class="section bg-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="">
                                <h6 class="footer-heading text-uppercase text-white">Information</h6>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li><a href="Page">Pages</a></li>
                                    <li><a href="Page">Our Team</a></li>
                                    <li><a href="Page">Feuchers</a></li>
                                    <li><a href="Page">Pricing</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3">
                            <div class="">
                                <h6 class="footer-heading text-uppercase text-white">Ressources</h6>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li><a href="Page">Monitoring Grader </a></li>
                                    <li><a href="Page">Video Tutorial</a></li>
                                    <li><a href="Page">Term &amp; Service</a></li>

                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-2">
                            <div class="">
                                <h6 class="footer-heading text-uppercase text-white">Help</h6>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li><a href="Page">Login</a></li>
                                    <li><a href="Page">Terms of Services</a></li>
                                    <li><a href="Page">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="">
                                <h6 class="footer-heading text-uppercase text-white">Contact Us</h6>
                                <p class="contact-info mt-4">Contact us if need help withanything</p>
                                <p class="contact-info">+01 123-456-7890</p>
                                <div class="mt-5">
                                    <ul class="list-inline">
                                        <li class="list-inline-item" /><i class="fab facebook footer-social-icon fa-facebook-f" />
                                        <li class="list-inline-item" /><i class="fab twitter footer-social-icon fa-twitter" />
                                        <li class="list-inline-item" /><i class="fab google footer-social-icon fa-google" />
                                        <li class="list-inline-item" /><i class="fab apple footer-social-icon fa-apple" />
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="text-center mt-5">
                    <p class="footer-alt mb-0 f-14">{date} © Persians, All Rights Reserved</p>
                </div>
            </footer>

        </>

    )
}

export default Footer
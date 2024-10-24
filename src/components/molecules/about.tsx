import React from "react";
import Image from "next/image";
import help1 from "../../../public/img/help/1.png";
import help6 from "../../../public/img/help/6.jpg";
import help7 from "../../../public/img/help/7.webp";
import help8 from "../../../public/img/help/8.webp";
import help10 from "../../../public/img/help/10.webp";
const About = () => {
    return (
        <div className="reson_area mt-10">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section_title text-center mb-55">
                            <h3>
                                <span>Utsaah Foundation: Supporting Cancer Patients</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <section className="utsaah-foundation-section">
                        <div className="container text-center">
                            <div className="quote_section text-center">
                                <blockquote className="quote_text">
                                    <p>
                                        <em>
                                            "Strive constantly to serve the welfare of the world; by devotion to
                                            selfless work, one attains the supreme goal of life"
                                        </em>
                                    </p>
                                    <footer>
                                        <strong>– BHAGAVAD GITA</strong>
                                    </footer>
                                </blockquote>
                            </div>
                            <p>
                                Cancer affects everyone—regardless of age, gender, or background. It places a tremendous burden on patients, families, and society. As one of the leading causes of death worldwide, cancer brings emotional and financial challenges that can be overwhelming.
                            </p>
                            <p>
                                Since 2015, <strong>Utsaah Foundation</strong> has been a beacon of hope for cancer patients, especially those at <strong>Tata Memorial Hospital</strong> and other institutions. We connect patients with vital resources, helping them navigate their treatment journey with dignity and support.
                            </p>
                            <a href="/about-us" className="learn-more-btn">
                                Learn More
                            </a>
                        </div>
                    </section>
                </div>


            </div>
        </div>
    );
};

export default About;

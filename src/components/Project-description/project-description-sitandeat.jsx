import React from "react";

const ProjectDescriptionSitAndEat = ({ projectDescriptionDataSitAndEat }) => {
    return (
        <section className="intro-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-lg-4">
                        <div className="htit">
                            <h4>
                                <span>02 </span> Project Summary
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-11 offset-lg-1 col-lg-8">
                        <div className="text js-scroll__content">
                            <p className="extra-text">{projectDescriptionDataSitAndEat.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDescriptionSitAndEat;

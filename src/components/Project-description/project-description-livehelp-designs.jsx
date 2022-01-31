import React from "react";

const ProjectDescriptionLiveHelpDesigns = ({ projectDescriptionDataLiveHelp }) => {
    return (
        <section className="intro-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-lg-6">
                        <div className="htit">
                            <h4>
                                <span>03 </span> Responsive Designs:
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-11 offset-md-1 col-lg-8">
                        <div className="text js-scroll__content">
                            <p className="extra-text">{projectDescriptionDataLiveHelp.extracontent}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDescriptionLiveHelpDesigns;

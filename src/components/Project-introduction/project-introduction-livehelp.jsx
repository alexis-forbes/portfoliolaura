import React from "react";

const ProjectIntroductionLiveHelp = ({ projectIntroductionDataLiveHelp }) => {
    return (
        <section className="intro-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-lg-4">
                        <div className="htit">
                            <h4>
                                <span>01 </span> Project Overview
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-11 offset-lg-1 col-md-8">
                        <div className="text js-scroll__content">
                            <p className="extra-text">
                                {projectIntroductionDataLiveHelp.content}
                            </p>
                            <ul className="smp-list mt-30">
                                {projectIntroductionDataLiveHelp.spmList.map((item) => (
                                    <li key={item.id}>{item.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectIntroductionLiveHelp;

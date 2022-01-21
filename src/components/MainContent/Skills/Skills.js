import React from 'react';

function Skills(props) {
    if (!props.skillItems || props.skillItems.length === 0) {
        return null;
    }

    let skills = props.skillItems.map((item, index) => {
        
        return (
            <div key={index} className="item">
                <h3 className="level-title" >{item.name}</h3>
                                 
            </div>
        )
    });

    return (
        <section className="skills-section section">
            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Frameworks</h2>
            <div className="skillset">
                {skills}
            </div>
        </section>
    );
}

export default Skills;

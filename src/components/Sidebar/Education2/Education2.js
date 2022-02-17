import React from 'react'

function Education2(props) {

    const educationItem2 = (item, index) => {
        return (
            <div key={index} className="item">
                <h4 className="degree">{item.degree2}</h4>
                <h5 className="meta">{item.school2}</h5>
                    <div className="time">{item.time2}</div>
            </div>
        )
    }

    return (
        <div className="education-container container-block">
            {props.educationItems2.map(educationItem2)}
        </div>
    )
}

export default Education2
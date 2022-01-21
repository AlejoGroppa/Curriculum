import React from 'react'

function Contact(props){
    const listItem = (prop, name, faClass, href, blank, text) => {
        if (prop) {
            return (
                <li className={name}>
                    <i className={faClass}></i>
                    {blank ? 
                        <a href={href} rel="noopener noreferrer" target="_blank">{text}</a>
                        :
                        <a href={href}>{text}</a>
                    }
                </li>
            )
        } else {
            return null;
        }
    }

    let email = listItem(props.email, "email", "fas fa-envelope", `mailto: ${props.email}`, false, props.email);
    let phone = listItem(props.phone, "phone", "fas fa-phone", `tel:${props.phone}`, false, props.phone);
    let linkedin = listItem(props.linkedin, "linkedin", "fab fa-linkedin-in", `https://linkedin.com/in/alejo-groppa-6828a6158`, true, props.linkedin);
    

    return (
        <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
                {email}
                {phone}
                {linkedin}
            </ul>
        </div>
    )
}

export default Contact
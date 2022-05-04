import React from 'react'
import data from "./data";

const TeamOne = (props) => {
    const itemSlice = data.slice(0 , props.item)
    return (
        <div className="row">
            {itemSlice.map((value , i ) => (
                <div className={`${props.column}`} key={i}>
                    
                    <div className={`team ${props.teamStyle}`}>
                        <div className="thumbnail">
                            <img src={`/assets/images/projects/project-${value.images}.jpg`} alt="Blog Images"/>
                        </div>
                        <div className="content">
                            <h4 className="title">{value.title}</h4>
                            <p className="designation">{value.designation}</p>
                            <div className="portfolio-button">
                                <a className="rn-btn" href={value.link} target="_blank" rel="noreferrer noopener">View on BEHANCE</a>
                            </div>
                        </div>
                        <ul className="social-icon" >
                            {value.socialNetwork.map((social, index) =>
                                <li key={index}><a href={`${social.url}`} target="_blank" rel="noreferrer noopener">{social.icon}</a></li>
                            )}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default TeamOne

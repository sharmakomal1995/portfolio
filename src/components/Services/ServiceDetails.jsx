import React from "react";
import { useParams, Link } from "react-router-dom";
import Services_Data from "../../assets/Services_data";

const ServiceDetails = () => {
    const { id } = useParams();

    const service = Services_Data.find(s => Number(s.s_no) === Number(id));

    if (!service) {
        return (
            <div style={{color: "white", padding: "40px"}}>
            <h2>Service Not Found</h2>
                 <Link to="/">Go Back</Link>
             </div>
        );
    }
    return (
        <div style={{color: "white", padding: "40px"}}>
            <h1>{service.title}</h1>
            <p>{service.desc}</p>
            <p>{service.details}</p>
            <Link to="/">Back to Services</Link>
        </div>
    );
}

export default ServiceDetails;
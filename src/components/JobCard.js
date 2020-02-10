import React, {Component} from 'react';
import Job from "./Job";
import {Link} from "react-router-dom";


class JobCard extends Component {
    render() {
        const job = this.props.job;
        return (

            <article className="job">
                <h2>{job.name}</h2>
                <Link to={"/job" + job.id}>Afficher</Link>
            </article>

        );
    }
}

export default JobCard;
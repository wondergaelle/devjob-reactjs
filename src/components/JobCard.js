import React, {Component} from 'react';
import PageJobs from "./PageJobs";
import {Link} from "react-router-dom";


class JobCard extends Component {
    render() {
        const job = this.props.job;
        return (

            <article className="job">
                <h2>{job.title}</h2>

                <Link to={"/jobs/" + job.slug}>Afficher</Link>
            </article>

        );
    }
}

export default JobCard;
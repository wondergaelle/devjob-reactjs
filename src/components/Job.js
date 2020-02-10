import React, {Component} from 'react';
import {Link} from "react-router-dom";



class Job extends Component {


    render() {

        const {job} = this.props;

        return (
            <article className="job">
                <h2>{job.name}</h2>
                <Link to={"/job" + job.id}>Afficher</Link>
            </article>
        );
    }
}

export default Job;
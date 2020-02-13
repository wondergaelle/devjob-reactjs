import React, {Component} from 'react';
import {Link} from "react-router-dom";
import JobList from "./JobList";


class PageJobs extends Component {

    render() {

        const {jobs} = this.props;


        return (
            <div>
                <h1>Offres d'emploi</h1>

                    <JobList jobs={jobs}/>

            </div>
        );
    }
}

export default PageJobs;
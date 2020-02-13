import React, {Component} from 'react';
import {Link} from "react-router-dom";
import moment from "moment";
import "moment/locale/fr";
import SkillLi from "./SkillLi";
import {Route} from "react-router";
import "./Job.scss";


class JobCard extends Component {


    render() {
        const job = this.props.job;

        const skillsLi = job.skills.map((skill, key) => <div className="list-skills"><span
            className="badge badge-primary"> <div key={key}><SkillLi skill={skill}/></div> </span></div>)


        return (

            <div >
                <div >
                    <div class="card">
                        <div >
                            <h5 >{job.title}</h5>

                            <div className="company badge badge-warning">{job.company}</div>

                            <div class="row col">{skillsLi}</div>


                            <div class="card-footer text-muted">Offre ajoutée le
                                :{moment(job.createdAt).fromNow()}</div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default JobCard;
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import moment from "moment";
import "moment/locale/fr";
import SkillLi from "./SkillLi";
import {Route} from "react-router";


class JobCard extends Component {
    render() {
        const job = this.props.job;

        const skillsLi = job.skills.map((skill, key) => <li key={key}><SkillLi skill={skill}/></li>)


        return (

            <article className="job">


                <h1>{job.title}</h1>
                <div>
                    <h3>{job.company}</h3>
                    <ul>{skillsLi}</ul>

                </div>
                <h3>Offre ajoutée le :{moment(job.createdAt).fromNow()}</h3>



            </article>

        );
    }
}

export default JobCard;
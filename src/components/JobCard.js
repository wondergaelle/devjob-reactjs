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
                <h2>{job.title}</h2>

                <p>{moment(job.createdAt).fromNow()}</p>
                <div className="">
                    <ul className="" >
                        {skillsLi}
                    </ul>
                </div>

                <Link to={"/job/" + job.slug}>Voir plus </Link>
                <Route path="/job/" component={JobCard}/>

            </article>

        );
    }
}

export default JobCard;
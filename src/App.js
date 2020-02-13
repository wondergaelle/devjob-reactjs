import React, {Component} from 'react';
import './App.scss';
import {NavLink} from "react-router-dom";
import {render} from "react-dom";
import {Route} from "react-router";
import PageJobs from "./components/PageJobs";
import JobCard from "./components/JobCard";
import AddJob from "./components/AddJob";
import PageHome from "./components/PageHome";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            skills: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch('https://127.0.0.1:8000/api/jobs')
            .then(response => response.json())
            .then(data => this.setState({jobs: data["hydra:member"], loading: false}));

        fetch('https://127.0.0.1:8000/api/skills')
            .then(response => response.json())
            .then(data => this.setState({skills: data["hydra:member"], loading: false}))
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }

        return (

            <main className="main-container">

                <nav>
                    <ul className="nav nav-fill">
                        <li className="nav-item"><NavLink to="/pagehome" className="nav-link active">Accueil</NavLink>
                        </li>
                        <li className="nav-item"><NavLink to="/jobs" className="nav-link active">Offres
                            d'emploi</NavLink></li>
                        <li className="nav-item"><NavLink to="/addjob" className="nav-link active">Ajouter un
                            emploi</NavLink></li>
                    </ul>
                </nav>
                <div className="page-container">
                    <Route path="/pagehome" component={PageHome}/>
                    <Route path="/addjob">
                        <AddJob skills={this.state.skills}/>
                    </Route>
                    <Route path="/jobs">
                        <PageJobs jobs={this.state.jobs}/>
                    </Route>
                </div>

            </main>
        );
    }
}


export default App;

import React, {Component} from 'react';
import './App.scss';
import {NavLink} from "react-router-dom";
import {render} from "react-dom";
import{Route} from "react-router";
import Job from "./components/Job";
import JobCard from "./components/JobCard";
import AddJob from "./components/AddJob";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch('https://127.0.0.1:8000/api/jobs/')
            .then(response => response.json())
            .then(data => this.setState({jobs: data["hydra:member"], loading: false }))
    }

    render() {
        if (this.state.loading){
            return <div>Loading...</div>;
        }

        return (


            <main className="main-container">
                <h1>Liste des offres d'emploi</h1>

                <nav>
                    <ul>
                        <li><NavLink to="/">Accueil</NavLink></li>
                        <li><NavLink to="/job">Offres d'emploi</NavLink></li>
                        <li><NavLink to="/addjob">Ajouter un emploi</NavLink></li>
                    </ul>
                </nav>

                <div className="page-container">

                    <Route path="/addjob" component={AddJob}/>


                </div>


            </main>
        );
    }
}


export default App;

import React, {Component} from 'react';


class AddJob extends Component {

    state = {
        titre: null,
        entreprise: null,
        competences: [],
        url: null,
        description: null,
    };


    change = e => {
        if(e.target.id === "competences")
        {
            this.state.competences = [].filter.call(e.target.options, o => o.selected).map(o => o.value);
        } else {
            this.setState({
                [e.target.id]: e.target.value
            });
        }
        console.log(this.state)
    };

    submit = e => {
        e.preventDefault();
        console.log(this.state);

        fetch('https://127.0.0.1:8000/api/jobs',{ method:"POST", headers: {'Content-Type':'application/json'}, body:JSON.stringify({
                "title": this.state.titre,
                "company": this.state.entreprise,
                "skills": this.state.competences,
                "url": this.state.url,
                "description": this.state.description,
            })
        })
    }

    render() {

        const skills = this.props.skills.map(skill => <option value={"/api/skills/"+skill.id} key={skill.id}>{ skill.name }</option> );
        console.log(this.submit)
        return (
            <div className="offset-3 col-8">

                <form className="mx-auto" onSubmit={this.submit}>
                    <div className="form-group col-8">
                        <label htmlFor="titre">Titre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="titre"
                            onChange={this.change}
                               placeholder=""/>
                    </div>
                    <div className="form-group col-8">
                        <label htmlFor="entreprise">Entreprise</label>
                        <input
                            type="text"
                            className="form-control"
                            id="entreprise"
                            onChange={this.change}
                               placeholder=""/>
                    </div>
                    <div className="form-group col-8">
                        <label htmlFor="exampleFormControlSelect2">Compétences</label>
                        <select class="form-control" id="competences" multiple="oui" onChange={this.change}>
                            {skills}
                        </select>
                    </div>

                    <div className="form-group col-8">
                        <label htmlFor="url">URL</label>
                        <input type="text"
                               className="form-control"
                               id="url"
                               onChange={this.change}
                               placeholder=""/>
                    </div>
                    <div className="form-group col-8">
                        <label htmlFor="exampleFormControlTextarea1">description</label>

                        <input type="textarea"
                               className="form-control"
                               rows="8"
                               id="description"
                               onChange={this.change}
                             />
                    </div>
                    <button  className="btn btn-danger offset-4" >Envoyer</button>
                </form>
            </div>

        );

    }
}

export default AddJob;
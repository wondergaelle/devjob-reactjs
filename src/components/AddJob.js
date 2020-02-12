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
                    <div className="form-group col-4">
                        <label htmlFor="titre">Titre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="titre"
                            onChange={this.change}
                               placeholder=""/>
                    </div>

                    <div className="form-group col-4">
                        <label htmlFor="entreprise">Entreprise</label>
                        <input
                            type="text"
                            className="form-control"
                            id="entreprise"
                            onChange={this.change}
                               placeholder=""/>
                    </div>

                    <div className="form-group col-4">
                        <label htmlFor="competences">Compétences</label>
                        <select name="" id="competences" onChange={this.change}>
                            {skills}
                        </select>
                    </div>

                    <div className="form-group col-4">
                        <label htmlFor="url">URL</label>
                        <input type="text"
                               className="form-control"
                               id="url"
                               onChange={this.change}
                               placeholder=""/>
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="description">description</label>
                        <input type="textarea"
                               className="form-control"
                               id="description"
                               onChange={this.change}
                               placeholder=""/>
                    </div>
                    <button  className="btn btn-primary">Submit</button>
                </form>


            </div>

        );

    }
}

export default AddJob;
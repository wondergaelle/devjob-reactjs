import React, {Component} from 'react';

class AddJob extends Component {

    render() {
        return (
            <div>

                    <form className="mx-auto">
                        <div className="form-group col-4">
                            <label htmlFor="formGroupExampleInput">Titre</label>
                            <input type="text" className="form-control" id="formGroupExampleInput"
                                   placeholder=""/>
                        </div>
                        <div className="form-group col-4">
                            <label htmlFor="formGroupExampleInput">Entreprise</label>
                            <input type="text" className="form-control" id="formGroupExampleInput"
                                   placeholder=""/>
                        </div>
                        <div className="form-group col-4">
                            <label htmlFor="formGroupExampleInput">Compétence</label>
                            <input type="text" className="form-control" id="formGroupExampleInput"
                                   placeholder=""/>
                        </div>
                        <div className="form-group col-4">
                            <label htmlFor="formGroupExampleInput">URL</label>
                            <input type="text" className="form-control" id="formGroupExampleInput"
                                   placeholder=""/>
                        </div>
                    </form>
                    <button type="submit" className="btn btn-primary">Submit</button>

            </div>
        );
    }
}

export default AddJob;
import React, { Component } from 'react'
import ProfessionalService from '../services/ProfessionalService';

class ListProfessionalComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            professional: []
        }
        this.addProfessional = this.addProfessional.bind(this);
        this.editProfessional = this.editProfessional.bind(this);
        this.deleteProfessional = this.deleteProfessional.bind(this)
    }

    deleteProfessional(id){
        ProfessionalService.delateProfessional(id).then( res => {
            this.setState({professional: this.state.professional.filter(professionals => professionals.id !== id)});
        });
    }

    viewProfessional(id){
        this.props.history.push(`/view-professionals/${id}`);
    }

    editProfessional(id){
        this.props.history.push(`/update-professional/${id}`);
    }

    componentDidMount(){
        ProfessionalService.getProfessional().then((res) => {
            this.setState({ professional: res.data });
        });
    }

    addProfessional(){
        this.props.history.push('/add-professionals/');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Professional List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProfessional}> Add Professional</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> ID</th>
                                    <th> Email</th>
                                    <th> Nombre</th>
                                    <th> Apellido</th>
                                    <th> Nº local</th>
                                    <th> Carrera</th>
                                    <th> Dirección</th>
                                    <th> Imagen</th>
                                    <th> Descripción</th>
                                    <th> Tipo</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.professional.map(professionals => (
                                        <tr key = {professionals.id}>
                                             <td>{professionals.id}</td>
                                             <td>{professionals.email}</td>
                                             <td>{professionals.first_name}</td>
                                             <td>{professionals.last_name}</td>
                                             <td>{professionals.local_number}</td>
                                             <td>{professionals.licensed}</td>
                                             <td>{professionals.address}</td>
                                             <td>{professionals.image}</td>
                                             <td>{professionals.description}</td>
                                             <td>{professionals.type}</td>
                                             <td>
                                                 <button onClick={ () => this.editProfessional(professionals.id)} className="btn btn-info">Editar</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProfessional(professionals.id)} className="btn btn-danger">Borrar</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProfessional(professionals.id)} className="btn btn-info">Detalle</button>
                                             </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }

}

export default ListProfessionalComponent
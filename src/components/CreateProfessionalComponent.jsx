import React, { Component } from 'react'
import ProfessionalService from '../services/ProfessionalService';

class CreateProfessionalComponent extends Component {
    state = {
        email: '',
        first_name: '',
        last_name: '',
        local_number: '',
        licensed: '',
        address: '',
        image: null,
        description: '',
        type: ''
    };

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    };

    handleImageChange = (e) => {
        this.setState({
          image: e.target.files[0]
        })
    };

    saveOrUpdateProfeesional = (e) => {

        e.preventDefault();
        console.log(this.state);
        let professional = new FormData();
        professional.append('email', this.state.email);
        professional.append('first_name', this.state.first_name);
        professional.append('last_name', this.state.last_name);
        professional.append('local_number', this.state.local_number);
        professional.append('licensed', this.state.licensed);
        professional.append('address', this.state.address);
        professional.append('image', this.state.image);
        professional.append('description', this.state.description);
        professional.append('type', this.state.type);

        ProfessionalService.createProfessional(professional).then(res => {
            this.props.history.push('/professional');
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))

    };

    cancel(){
        this.props.history.push('/professional')
    }

    getTitle(){
        return <h3 className="text-center"> Añadir </h3>
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form onSubmit={this.saveOrUpdateProfeesional}>

                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input type="email" id="email" className="form-control" 
                                                value={this.state.email} onChange={this.handleChange}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Nombre: </label>
                                            <input placeholder="Nombre" id="first_name" className="form-control" 
                                                value={this.state.first_name} onChange={this.handleChange}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Apellido: </label>
                                            <input placeholder="Apellido" id="last_name" className="form-control" 
                                                value={this.state.last_name} onChange={this.handleChange}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Nº local: </label>
                                            <input type="number" id="local_number" className="form-control" 
                                                value={this.state.local_number} onChange={this.handleChange}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Carrera: </label>
                                            <input placeholder="Cerrara" id="licensed" className="form-control" 
                                                value={this.state.licensed} onChange={this.handleChange}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Dirección: </label>
                                            <input placeholder="Dirección" id="address" className="form-control" 
                                                value={this.state.address} onChange={this.handleChange}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Imagen: </label>
                                            <input type="file" 
                                            name="image" 
                                            className="form-control" 
                                            onChange={this.handleImageChange}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Descripción: </label>
                                            <input placeholder="Descripción" id="description" className="form-control" 
                                                value={this.state.description} onChange={this.handleChange}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Tipo: </label>
                                            <input placeholder="Tipo" id="type" className="form-control" 
                                                value={this.state.type} onChange={this.handleChange}/>
                                        </div>

                                        <button type="submit" className="btn btn-success">Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }

}

export default CreateProfessionalComponent
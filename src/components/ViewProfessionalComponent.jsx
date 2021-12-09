import React, { Component } from 'react'
import ProfessionalService from '../services/ProfessionalService'

class ViewProfessionalComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            professional: {}
        }
    }

    componentDidMount() {
        ProfessionalService.getProfessionalById(this.state.id).then( res => {
            this.setState({ professional: res.data });
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Professional Details</h3>
                    <div className = "card-body">

                        <div className = "row">
                            <label> Profesional Email: </label>
                            <div> { this.state.professional.email }</div>
                        </div>

                        <div className = "row">
                            <label> Profesional Nombre: </label>
                            <div> { this.state.professional.first_name }</div>
                        </div>

                        <div className = "row">
                            <label> Profesional Apellido: </label>
                            <div> { this.state.professional.last_name }</div>
                        </div>

                        <div className = "row">
                            <label> Professional Nº Local: </label>
                            <div> { this.state.professional.local_number }</div>
                        </div>

                        <div className = "row">
                            <label> Profesional Carrera: </label>
                            <div> { this.state.professional.licensed }</div>
                        </div>

                        <div className = "row">
                            <label> Profesional Dirección: </label>
                            <div> { this.state.professional.address }</div>
                        </div>

                        <div className = "row">
                            <label> Profesional Imagen: </label>
                            <div> <img src={`http://127.0.0.1:8000${this.state.professional.image}`} alt="" /> </div>
                        </div>

                        <div className = "row">
                            <label> Profesional Descripción: </label>
                            <div> { this.state.professional.description }</div>
                        </div>

                        <div className = "row">
                            <label> Profesional Tipo: </label>
                            <div> { this.state.professional.type }</div>
                        </div>

                    </div>

                </div>
            </div>
        )
    } 

}

export default ViewProfessionalComponent
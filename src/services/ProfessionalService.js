import axios from 'axios';

const PROFESSIONAL_API_BASE_URL = "http://localhost:8000/api/odebrecht/professional"

class ProfessionalService { 

    getProfessional(){
        return axios.get(PROFESSIONAL_API_BASE_URL);
    }

    createProfessional(professional){
        return axios.post(PROFESSIONAL_API_BASE_URL, professional, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
    }

    getProfessionalById(professionalId){
        return axios.get(PROFESSIONAL_API_BASE_URL + '/' + professionalId);
    }

    updateProfessional(professional, professionalId) {
        return axios.put(PROFESSIONAL_API_BASE_URL + '/' + professionalId, professional, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
    }

    delateProfessional(professionalId) {
        return axios.delete(PROFESSIONAL_API_BASE_URL + '/' + professionalId);
    }

}

export default new ProfessionalService()
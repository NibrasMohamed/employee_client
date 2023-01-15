import axios from "axios";

export const getCompanies = (data:any) => axios.get('http://127.0.0.1:8000/api/companies');

export const getCompany = (data:any) => axios.get('http://127.0.0.1:8000/api/company/'+data.id);

export const updateCompany = (data:any) => axios.post('http://127.0.0.1:8000/api/company/'+data.id, data)
import axios from 'axios';

const url = "http://localhost:5000";

export const getApplicationById = async (id) => {
  return await axios.get(`${url}/hostelApplicants/${id}`);
}

export const getApplications = async () => {
  return await axios.get(`${url}/hostelApplicants`);
}

export const createApplication = async (applicantData) => {
  return await axios.post(`${url}/hostelApplicants`, applicantData);
}

export const updateApplicationById = async (id, applicantData) => {
  return await axios.put(`${url}/hostelApplicants/${id}`, applicantData);
}

export const deleteApplicationById = async (id) => {
  return await axios.delete(`${url}/hostelApplicants/${id}`);
}







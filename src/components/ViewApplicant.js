import { getApplications, deleteApplicationById } from "../Service/api";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const ViewApplicant = () => {
  
  const navigate = useNavigate();

  const [ applicantData, setApplicantData ] = useState([]);

  useEffect(() => {
    getApplicatsDetails();
  },[]);

  const getApplicatsDetails = async () => {
    const result = await getApplications();
    setApplicantData(result.data);
  }

  const deleteApplicatDetails = async (id) => {
    const result = await deleteApplicationById(id);
    setApplicantData(applicantData.filter(data => data._id != id));
  }

  const editApplicatDetails = (id) => {
    navigate(`/editApplicants/${id}`);
  }

  return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Registration Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {applicantData.map((details, i) => (
            <tr key={i}>
              <td>{details.studentName}</td>
              <td>{details.registrationNumber}</td>
              <td><button onClick={()=> {deleteApplicatDetails(details._id)}}>Delete</button></td>
              <td><button onClick={()=> {editApplicatDetails(details._id)}}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplicant;

import { getApplicationById } from "../Service/api";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const ViewApplicantData = () => {
  
  let parems = useParams();
  const navigate = useNavigate();

  const [ applicantData, setApplicantData ] = useState({
    studentName: "",
    registrationNumber: "",
    studentGender: "Male",
    preferedHostel: "Johar Hall",
    imageUrl: "",
  });

  useEffect(() => {
    getApplicantDetails(parems.id);
  } ,[]);

  const getApplicantDetails = async (id) => {
    let data = await getApplicationById(id);
    setApplicantData(data.data);
  }

  return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
      <div className="row">
        <div className="col-4">
          <img src= {applicantData.imageUrl} alt="Student Image" width={"200px"}></img>
        </div>
        <div className="col-8">
          <h5 scope="col">ID: {applicantData._id}</h5>
          <h5 scope="col">Student Name: {applicantData.studentName}</h5>
          <h5 scope="col">Registration Number: {applicantData.registrationNumber}</h5>
          <h5 scope="col">Studetn Gender: {applicantData.studentGender}</h5>
          <h5 scope="col">Prefered Hostel: {applicantData.preferedHostel}</h5>
        </div>
      </div>
   
    </div>
  );
};

export default ViewApplicantData;

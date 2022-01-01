import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getApplicationById, updateApplicationById } from "../Service/api";

const EditApplicant = () => {

  let parems = useParams();

    const [ applicantData, setApplicantData] = useState({
        studentName: "",
        registrationNumber: ""
    })

    useEffect(() => {
      getApplicantDetails(parems.id);
    } ,[]);

    const { studentName, registrationNumber } = applicantData;

    const handleChannge = (e) => {
        setApplicantData( {...applicantData, [e.target.name]: e.target.value } )
    }

    const getApplicantDetails = async (id) => {
      let data = await getApplicationById(id);
      setApplicantData(data.data);
    }

    const updateDetails = async (e) => {
      e.preventDefault();
      await updateApplicationById(parems.id, applicantData);
    }

    return (
      <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
       <form>
        <label className="mb-2">Student Name</label>
        <input
          type="text"
          className="form-control mb-3"
          value={applicantData.studentName}
          name="studentName"
          onChange={(e) => handleChannge(e)}
        />

        <label className="mb-2">Registration Number</label>
        <input
          type="text"
          className="form-control mb-3"
          value={applicantData.registrationNumber}
          name="registrationNumber"
          onChange={(e) => handleChannge(e)}
        />

        <button className="btn btn-primary form-control" onClick={(e) => updateDetails(e)}>Update</button>
       </form>
      </div>
    );
}

export default EditApplicant;
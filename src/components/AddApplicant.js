import { useState } from "react";
import { createApplication } from "../Service/api";

const AddApplicant = () => {

    const [ applicantData, setApplicantData] = useState({
        studentName: "",
        registrationNumber: "",
        studentGender: "Male",
        preferedHostel: "Johar Hall",
        imageUrl: "",
    })

    const { studentName, registrationNumber, studentGender, preferedHostel, imageUrl } = applicantData;

    const handleChannge = (e) => {
        setApplicantData( {...applicantData, [e.target.name]: e.target.value } )
    }

    const addDetails = async (e) => {
      e.preventDefault();
      await createApplication(applicantData);
    }

    return (
      <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
       <form>
        <label className="mb-2">Student Name</label>
        <input
          type="text"
          className="form-control mb-3"
          name="studentName"
          onChange={(e) => handleChannge(e)}
        />

        <label className="mb-2">Registration Number</label>
        <input
          type="text"
          className="form-control mb-3"
          name="registrationNumber"
          onChange={(e) => handleChannge(e)}
        />

        <label className="mb-2">Student Gender</label>
        <select
          className="form-select"
          name="studentGender"
          onChange={(e) => handleChannge(e)}
        >
          <option selected value="Male">Male</option>
          <option value="Female">Female</option>
        </select><br/>

        <label className="mb-2">Preffered Hostel</label>
        <select
          className="form-select"
          name="preferedHostel"
          onChange={(e) => handleChannge(e)}
        >
          <option selected value="Johar Hall">Johar Hall</option>
          <option value="MA Jinah Hall">MA Jinah Hall</option>
          <option value="Jupiter Hall">Jupiter Hall</option>
        </select><br/>

        <label className="mb-2">Image URl</label>
        <input
          type="text"
          className="form-control mb-3"
          name="imageUrl"
          onChange={(e) => handleChannge(e)}
        />

        <button className="btn btn-primary form-control" onClick={(e) => addDetails(e)}>Apply</button>
       </form>
      </div>
    );
}

export default AddApplicant;
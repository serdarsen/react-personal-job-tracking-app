import React, { useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Select from "react-select";
import {
  createPriorityOptions,
  defaultPriorityOption,
} from "../factory/PriorityFactory";
import Footer from "./Footer";
import "./jobForm.css";

const JobForm = ({ onCancel, onSubmit }) => {
  const [name, setName] = useState("");
  const [option, setOption] = useState(defaultPriorityOption);

  const resetForm = () => {
    setName("");
    setOption(defaultPriorityOption);
  };

  const onSubmitJobForm = (e) => {
    e.preventDefault();
    onSubmit({ name: name, priority: option.value });
    resetForm();
  };

  return (
    <form className="app__jobform" onSubmit={onSubmitJobForm}>
      <div className="app__jobform-content">
        <div className="app__jobform-name">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            maxLength={255}
            title={name}
          />
        </div>
        <div className="app__jobform-priority">
          <Select
            options={createPriorityOptions()}
            isClearable={false}
            value={option}
            onChange={setOption}
          />
        </div>
      </div>
      <Footer onCancel={onCancel} cancelLabel="Cancel" submitLabel="Save" />
    </form>
  );
};

export default JobForm;

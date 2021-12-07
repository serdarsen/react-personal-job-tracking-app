import React, { useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Select from "react-select";
import "./jobForm.css";
import {
  createPriorityOptions,
  defaultPriorityOption,
} from "./PriorityFactory";

const JobForm = () => {
  const [name, setName] = useState("");
  const [option, setOption] = useState(defaultPriorityOption);

  return (
    <form className="app__jobform">
      <div className="app__jobform-name">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
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
    </form>
  );
};

export default JobForm;

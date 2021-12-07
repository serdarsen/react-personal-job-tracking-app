import React, { useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import JobForm from "./JobForm";
import "./jobMainPage.css";
import JobTable from "./JobTable";
import Modal from "./Modal";

const JobMainPage = () => {
  const [isOpen, setIsOpen] = useState();

  const onReject = () => {
    setIsOpen(false);
  };

  const onResolve = () => {};

  const onClickNew = () => {
    setIsOpen(true);
  };

  return (
    <div className="app__jobmainpage">
      <Modal
        isOpen={isOpen}
        onReject={onReject}
        onResolve={onResolve}
        rejectLabel="Cancel"
        resolveLabel="Save"
      >
        <JobForm />
      </Modal>
      <JobTable onClickNew={onClickNew} />
    </div>
  );
};

export default JobMainPage;

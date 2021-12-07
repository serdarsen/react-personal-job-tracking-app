import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import CreateModal from "./CreateModal";
import DeleteModal from "./DeleteModal";
import "./jobMainPage.css";
import JobService from "./JobService";
import JobTable from "./JobTable";

const JobMainPage = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState();
  const [jobs, setJobs] = useState([]);
  const [jobToDelete, setJobToDelete] = useState();

  const onCancelCreateModal = () => {
    setIsOpenCreateModal(false);
  };

  const onSubmitCreateModal = (job) => {
    let lastId = JobService.findLastId();
    job.id = lastId++;
    jobs.push(job);
    JobService.saveLastId(lastId);
    JobService.saveJobs(jobs);

    setJobs(jobs);
    setIsOpenCreateModal(false);
  };

  const onCancelDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  const onSubmitDeleteModal = () => {
    const tempJobs = jobs.filter((job) => jobToDelete.id !== job.id);
    JobService.saveJobs(tempJobs);

    setJobs(tempJobs);
    setIsOpenDeleteModal(false);
  };

  const onClickNew = () => {
    setIsOpenCreateModal(true);
  };

  const deleteJob = (job) => {
    setJobToDelete(job);
    setIsOpenDeleteModal(true);
  };

  useEffect(() => {
    const jobs = JobService.findJobs();
    setJobs(jobs);
  }, []);

  return (
    <div className="app__jobmainpage">
      <CreateModal
        isOpen={isOpenCreateModal}
        onCancel={onCancelCreateModal}
        onSubmit={onSubmitCreateModal}
      />
      <DeleteModal
        isOpen={isOpenDeleteModal}
        onCancel={onCancelDeleteModal}
        onSubmit={onSubmitDeleteModal}
        jobToDeleteLabel={jobToDelete?.name}
      />
      <JobTable jobs={jobs} onClickNew={onClickNew} deleteJob={deleteJob} />
    </div>
  );
};

export default JobMainPage;

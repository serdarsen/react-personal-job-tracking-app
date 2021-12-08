import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ChangeModal from "./ChangeModal";
import CreateModal from "./CreateModal";
import DeleteModal from "./DeleteModal";
import "./jobMainPage.css";
import JobService from "./JobService";
import JobTable from "./JobTable";
import { priorities } from "./PriorityFactory";

const JobMainPage = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState();
  const [isOpenChangeModal, setIsOpenChangeModal] = useState();

  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState();

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
    const filteredJobs = jobs.filter((job) => currentJob.id !== job.id);
    JobService.saveJobs(filteredJobs);

    setJobs(filteredJobs);
    setIsOpenDeleteModal(false);
  };

  const onCancelChangeModal = () => {
    const jobs = JobService.findJobs();
    setJobs(jobs);
    setIsOpenChangeModal(false);
  };

  const onSubmitChangeModal = () => {
    const filteredJobs = jobs.filter((job) => job.id !== currentJob.id);
    filteredJobs.push(currentJob);
    JobService.saveJobs(filteredJobs);
    setJobs(filteredJobs);
    setIsOpenChangeModal(false);
  };

  const onClickNew = () => {
    setIsOpenCreateModal(true);
  };

  const deleteJob = (job) => {
    setCurrentJob(job);
    setIsOpenDeleteModal(true);
  };

  const changePriority = ({ oldPriority, newPriority, currentJob }) => {
    if (oldPriority === newPriority) {
      return;
    }

    currentJob.priority = newPriority;
    setCurrentJob(currentJob);
    setIsOpenChangeModal(true);
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
        text={<span>Delete {currentJob?.name} ?</span>}
      />
      <ChangeModal
        isOpen={isOpenChangeModal}
        onCancel={onCancelChangeModal}
        onSubmit={onSubmitChangeModal}
        text={
          <span>
            Change {currentJob?.name} priority to{" "}
            {priorities[currentJob?.priority]?.label} ?
          </span>
        }
      />
      <JobTable
        jobs={jobs}
        onClickNew={onClickNew}
        deleteJob={deleteJob}
        changePriority={changePriority}
      />
    </div>
  );
};

export default JobMainPage;

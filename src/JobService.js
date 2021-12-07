const JOBS_LOCAL_STORAGE_LAST_ID_NAME = "jobs-local-storage-last-id";
const JOBS_LOCAL_STORAGE_DATA_NAME = "jobs-local-storage-data";

const JobService = {
  findJobs: () => {
    const json = localStorage.getItem(JOBS_LOCAL_STORAGE_DATA_NAME);
    const notes = json ? JSON.parse(json) : [];

    return notes;
  },
  saveJobs: (jobs) => {
    const json = JSON.stringify(jobs);
    localStorage.setItem(JOBS_LOCAL_STORAGE_DATA_NAME, json);
  },
  saveLastId: (lastId) => {
    localStorage.setItem(JOBS_LOCAL_STORAGE_LAST_ID_NAME, lastId);
  },
  findLastId: () => {
    const lastId = localStorage.getItem(JOBS_LOCAL_STORAGE_LAST_ID_NAME);

    return parseInt(lastId ?? 0);
  },
};

export default JobService;

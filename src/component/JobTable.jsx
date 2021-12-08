import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import { FaTrashAlt } from "react-icons/fa";
import { createPriorityOptions, priorities } from "../factory/PriorityFactory";
import "./jobTable.css";

const JobTable = ({ jobs, onClickNew, deleteJob, changePriority }) => {
  const columns = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
      type: "string",
      headerClasses: "app__jobtable-name_col_header",
      classes: (cell, row) =>
        `${priorities[row.priority].classes} app__jobtable-name_col_cell`,
      formatter: (cell) => <span title={cell}>{cell}</span>,
      editable: false,
    },
    {
      dataField: "priority",
      text: "Priority",
      sort: true,
      type: "string",
      headerClasses: "app__jobtable-priority_col_header",
      classes: (cell, row) =>
        `${priorities[row.priority].classes} app__jobtable-priority_col_cell`,
      formatter: (cell) => priorities[cell].label,
      editor: {
        type: Type.SELECT,
        options: createPriorityOptions(),
      },
      sortFunc: (a, b, order) => {
        if (order === "asc") {
          return priorities[b].level - priorities[a].level;
        }
        return priorities[a].level - priorities[b].level; // desc
      },
    },
    {
      dataField: "id",
      text: "Action",
      sort: false,
      type: "number",
      headerClasses: "app__jobtable-id_col_header",
      classes: "app__jobtable-id_col_cell",
      editable: false,
      formatter: (cell, row) => (
        <div className="app__jobtable-action">
          <FaTrashAlt
            className="fa-clickable-red"
            size={24}
            onClick={() => deleteJob(row)}
            title={"Delete"}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="app__jobtable">
      <div className="app__jobtable-content">
        <div className="app__jobtable-heading">
          <div className="app__jobtable-title">Jobs</div>
          <button
            type="button"
            className="btn btn-success"
            onClick={onClickNew}
            title={"Add new job record"}
          >
            New
          </button>
        </div>
        <BootstrapTable
          bootstrap4
          bordered={false}
          keyField="id"
          data={jobs}
          columns={columns}
          cellEdit={cellEditFactory({
            mode: "click",
            blurToSave: true,
            beforeSaveCell: (oldPriority, newPriority, currentJob) => {
              changePriority({ oldPriority, newPriority, currentJob });
            },
          })}
        />
      </div>
    </div>
  );
};

export default JobTable;

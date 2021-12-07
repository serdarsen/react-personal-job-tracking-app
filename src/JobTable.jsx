import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import { FaTrashAlt } from "react-icons/fa";
import "./jobTable.css";
import { createPriorityOptions, priorities } from "./PriorityFactory";

const JobTable = ({ jobs, onClickNew, deleteJob }) => {
  const columnWidths = ["65%", "25%", "10%"];

  const columns = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
      headerStyle: { width: columnWidths[0] },
      style: { width: columnWidths[0] },
      type: "string",
      classes: (cell, row) => priorities[row.priority].classes,
      editable: false,
    },
    {
      dataField: "priority",
      text: "Priority",
      sort: true,
      headerStyle: { width: columnWidths[1] },
      style: { width: columnWidths[1] },
      type: "string",
      classes: (cell, row) => priorities[cell].classes,
      formatter: (cell) => priorities[cell].label,
      editor: {
        type: Type.SELECT,
        options: createPriorityOptions(),
      },
      sortFunc: (a, b, order, dataField, rowA, rowB) => {
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
      headerStyle: { width: columnWidths[2] },
      style: { width: columnWidths[2] },
      type: "string",
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
            onStartEdit: (row, column, rowIndex, columnIndex) => {
              console.log("start to edit!!!");
            },
            beforeSaveCell: (oldValue, newValue, row, column) => {
              console.log("Before Saving Cell!!");
            },
            afterSaveCell: (oldValue, newValue, row, column) => {
              console.log("After Saving Cell!!");
            },
          })}
        />
      </div>
    </div>
  );
};

export default JobTable;

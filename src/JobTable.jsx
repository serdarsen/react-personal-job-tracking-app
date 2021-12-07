import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";

const JobTable = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      name: "Job 1",
      priority: "URGENT",
    },
    {
      id: 2,
      name: "Job 2",
      priority: "IMPORTANT",
    },
    {
      id: 3,
      name: "Job 3",
      priority: "NORMAL",
    },
  ]);

  const priorities = {
    URGENT: { level: 1, label: "Acil", classes: "bg-danger" },
    IMPORTANT: { level: 2, label: "Önemli", classes: "bg-warning" },
    NORMAL: { level: 3, label: "Normal", classes: "bg-warning" },
  };

  const columnWidths = ["50%", "50%"];

  const createPriorityColumnOption = () =>
    Object.keys(priorities).map((priority) => ({
      value: priority,
      label: priorities[priority].label,
    }));

  const columns = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
      headerStyle: { width: columnWidths[0] },
      style: { width: columnWidths[0] },
      type: "string",
      editable: false,
    },
    {
      dataField: "priority",
      text: "Priority",
      sort: true,
      headerStyle: { width: columnWidths[1] },
      style: { width: columnWidths[1] },
      type: "string",
      classes: function callback(cell, row, rowIndex, colIndex) {
        return priorities[cell].classes;
      },
      formatter: (cell) => priorities[cell].label,
      editor: {
        type: Type.SELECT,
        options: createPriorityColumnOption(),
      },
      sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === "asc") {
          return priorities[b].level - priorities[a].level;
        }
        return priorities[a].level - priorities[b].level; // desc
      },
    },
  ];

  return (
    <div>
      <BootstrapTable
        bootstrap4
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
  );
};

export default JobTable;

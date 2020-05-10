import React, { useState, useContext, useEffect } from "react";
import Select from "react-dropdown-select";
import MainContext from "../../../contexts/main-context";

export default function PriorityFilter({
  results,
  allIssues,
  filteredResults,
  filter,
  clear,
  setClear
}) {
  const [disable, setDisable] = useState(false);
  const [value, setValue] = useState([]);

  const options = [
    { value: "low", label: "low" },
    { value: "normal", label: "normal" },
    { value: "high", label: "high" },
    { value: "urgent", label: "urgent" }
  ];

  useEffect(() => {
    if (clear === true) {
      setDisable(false);
      setValue([]);
      setClear(false);
    }
  }, [clear]);

  const handleFilter = e => {
    if (e === "null" || undefined) {
      return;
    }
    const filtered =
      results !== undefined
        ? results.filter(item => {
            return item.priority == e;
          })
        : allIssues.filter(item => {
            return item.priority == e;
          });
    setValue(e);
    filteredResults(filtered);
    filter(true);
    return setDisable(true);
  };

  return (
    <Select
      disabled={disable}
      className="filterSelect"
      onChange={e => handleFilter(e[0].value)}
      options={options}
      values={value}
    />
  );
}

import React, { useState, useContext, useEffect } from "react";
import Select from "react-dropdown-select";
import MainContext from "../../../contexts/main-context";

export default function StatusFilter({
  results,
  filteredResults,
  filter,
  clear,
  setClear
}) {
  const [disable, setDisable] = useState(false);
  const ContextMain = useContext(MainContext);
  const [value, setValue] = useState([]);

  const options = [
    { value: "acknowladgement", label: "acknowladgement" },
    { value: "new", label: "new" },
    { value: "resolved", label: "resolved" },
    { value: "feedback", label: "feedback" },
    { value: "in-progress", label: "in-progress" }
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
      results.length > 0
        ? results.filter(item => {
            return item.resolution == e;
          })
        : ContextMain.teamIssues.filter(item => {
            return item.resolution == e;
          });

    filteredResults(filtered);
    setValue(e);
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

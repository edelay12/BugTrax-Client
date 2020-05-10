import React, { useState, useContext, useEffect } from "react";
import Select from "react-dropdown-select";
import MainContext from "../../../contexts/main-context";

export default function ResolvedByFilter({
  results,
  filteredResults,
  filter,
  clear,
  setClear
}) {
  const [disable, setDisable] = useState(false);
  const ContextMain = useContext(MainContext);
  const [value, setValue] = useState([]);

  const team = ContextMain.teamList.map(v => {
    return { value: v.id, label: v.full_name };
  });
  const options = [...team];

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
            return item.resolved_by == e;
          })
        : ContextMain.teamIssues.filter(item => {
            return item.resolved_by == e;
          });

    filteredResults(filtered);
    filter(true);
    return setDisable(true);
  };

  return (
    <Select
      disabled={disable}
      className="filterSelect"
      onChange={e => handleFilter(e.value)}
      options={options}
      values={value}
    />
  );
}

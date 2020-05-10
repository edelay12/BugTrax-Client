import React, { useState, useContext , useEffect} from 'react';
import Select from 'react-dropdown-select';
import MainContext from '../../../contexts/main-context';

export default function SeverityFilter({results, filteredResults, filter, clear, setClear}){
    const [disable , setDisable] = useState(false);
    const ContextMain = useContext(MainContext)
    const [value , setValue] = useState([]);

    const options = [
        { value: 'tweak', label: 'tweak' },
        { value: 'minor', label: 'minor' },
        { value: 'major', label: 'major' },
        { value: 'crash', label: 'crash' },
      ];
      useEffect(() => {
        if(clear === true){
          setDisable(false);
          setValue([]);
          setClear(false);
        }
       },[clear])
      const handleFilter = e => {
        if(e === 'null' || undefined){
           return;
        }
       const filtered = results.length > 0 ? results.filter(item => {return item.severity == e}) : ContextMain.teamIssues.filter(item => {return item.severity == e})
       
      filteredResults(filtered);
      filter(true);
      return setDisable(true);
      }
    return (
<Select disabled={disable} className='filterSelect' onChange={e=> handleFilter(e[0].value)} options={options} values={value}/>
    )
}
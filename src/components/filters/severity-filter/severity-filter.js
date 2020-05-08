import React, { useState, useContext } from 'react';
import Select from 'react-dropdown-select';
import MainContext from '../../../contexts/main-context';

export default function SeverityFilter({results, filteredResults, filter}){
    const [disable , setDisable] = useState(false);
    const ContextMain = useContext(MainContext)

    const options = [
        { value: 'tweak', label: 'tweak' },
        { value: 'minor', label: 'minor' },
        { value: 'major', label: 'major' },
        { value: 'crash', label: 'crash' },
      ];

      const handleFilter = e => {
        if(e === 'null' || undefined){
           return console.log('undefined')
        }
       const filtered = results.length > 0 ? results.filter(item => {return item.severity == e}) : ContextMain.teamIssues.filter(item => {return item.severity == e})
       
      filteredResults(filtered);
      filter(true);
      return setDisable(true);
      }
    return (
        //"any" default option
<Select disabled={disable} className='filterSelect' onChange={e=> handleFilter(e[0].value)} options={options}/>
    )
}
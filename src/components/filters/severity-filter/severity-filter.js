import React, { useState } from 'react';
import Select from 'react-select';

export default function SeverityFilter({results, allIssues, filteredResults, filter}){
    const [disable , setDisable] = useState(false);

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
       const filtered = results.length > 0 ? results.filter(item => {return item.severity == e}) : allIssues.filter(item => {return item.severity == e})
       
      filteredResults(filtered);
      filter(true);
      return setDisable(true);
      }
    return (
        //"any" default option
<Select isDisabled={disable} className='filterSelect' onChange={e=> handleFilter(e.value)} options={options}/>
    )
}
import React, {useState, useContext}  from 'react';
import Select from 'react-dropdown-select';
import MainContext from '../../../contexts/main-context';

export default function PriorityFilter({results, allIssues, filteredResults, filter}){
    const [disable , setDisable] = useState(false);

    const options = [
    { value: 'low', label: 'low' },
    { value: 'normal', label: 'normal' },
    { value: 'high', label: 'high' },
    { value: 'urgent', label: 'urgent' }
    ];

    const handleFilter = e => {
        if(e === 'null' || undefined){
           return console.log('undefined')
        }
       const filtered = results.length > 0 ? results.filter(item => {return item.priority == e}) : allIssues.filter(item => {return item.priority == e})
    
      filteredResults(filtered);
      filter(true);
      return setDisable(true);
      }

    return (
        //"any" default option
<Select disabled={disable} className='filterSelect' onChange={e=> handleFilter(e[0].value)} options={options}/>
    )
}


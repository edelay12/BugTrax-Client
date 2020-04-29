import React, {useState}  from 'react';
import Select from 'react-select';

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
        console.log(e)
       const filtered = results.length > 0 ? results.filter(item => {return item.priority == e}) : allIssues.filter(item => {return item.priority == e})
    
      filteredResults(filtered);
      filter(true);
      return setDisable(true);
      }

    return (
        //"any" default option
<Select isDisabled={disable} className='filterSelect' onChange={e=> handleFilter(e.value)} options={options}/>
    )
}


import React, {useState} from 'react';
import Select from 'react-select';

export default function StatusFilter({results, allIssues, filteredResults, filter}){
    const [disable , setDisable] = useState(false);

    const options = [
        { value: 'acknowladgement', label: 'acknowladgement' },
        { value: 'new', label: 'new' },
        { value: 'resolved', label: 'resolved' },
        { value: 'feedback', label: 'feedback' },
        { value: 'in-progress', label: 'in-progress' },
    ]

    const handleFilter = e => {
        if(e === 'null' || undefined){
           return console.log('undefined')
        }
       const filtered = results.length > 0 ? results.filter(item => {return item.resolution == e}) : allIssues.filter(item => {return item.resolution == e})
       
      filteredResults(filtered);
      filter(true);
      return setDisable(true);
      }

    return (
<Select isDisabled={disable} className='filterSelect' onChange={e=> handleFilter(e.value)} options={options}/>
    )
}
import React, {useState} from 'react';
import Select from 'react-select';

export default function ReporterFilter({results, allIssues, filteredResults, teamList, filter}){
    const [disable , setDisable] = useState(false);
   
    const team = teamList.map(v => {
        return { value : v.id, label: v.full_name };
    })
    const options = [...team];

    const handleFilter = e => {
        if(e === 'null' || undefined){
           return console.log('undefined')
        }
       const filtered = results.length > 0 ? results.filter(item => {return item.creator_id == e}) : allIssues.filter(item => {return item.creator_id == e})
       
      filteredResults(filtered);
      filter(true);
      return setDisable(true);
      }

    return (
        //"any" default optio
<Select isDisabled={disable} className='filterSelect' onChange={e=> handleFilter(e.value)} options={options}/>
    )
}
import React, {useState} from 'react';
import Select from 'react-select';

export default function AssigneeFilter({results, allIssues, filteredResults, teamList}){
    const [disable , setDisable] = useState(false);

    const team = teamList.map(v => {
        return { value : v.id, label: v.user_name };
    })
    const options = [...team];

    const handleFilter = e => {
        if(e === 'null' || undefined){
           return console.log('undefined')
        }
        console.log(e)
       const filtered = results.length > 0 ? results.filter(item => {return item.assignee == e}) : allIssues.filter(item => {return item.assignee == e})
       
      filteredResults(filtered);
      return setDisable(true);
      }

    return (
        //"any" default option
<Select isDisabled={disable} className='filterSelect' onChange={e=> handleFilter(e.value)} options={options}/>
    )
}
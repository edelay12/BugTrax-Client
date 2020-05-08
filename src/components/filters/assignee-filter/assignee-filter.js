import React, {useState, useContext} from 'react';
import Select from 'react-dropdown-select';
import MainContext from '../../../contexts/main-context';

export default function AssigneeFilter({results, filteredResults, filter}){
    const [disable , setDisable] = useState(false);
    const ContextMain = useContext(MainContext)

    const team = ContextMain.teamList.map(v => {
        return { value : v.id, label: v.full_name };
    })
    const options = [...team];
    const handleFilter = e => {
        if(e === 'null' || undefined){
           return console.log('undefined')
        }
       const filtered = results.length > 0 ? results.filter(item => {return item.assignee == e}) : ContextMain.teamIssues.filter(item => {return item.assignee == e})
      filteredResults(filtered);
      filter(true);
      return setDisable(true);
    }

    return ( 
<Select disabled={disable} className='filterSelect' onChange={e=> handleFilter(e[0].value)} options={options} autoSize={true}/>
    )
}
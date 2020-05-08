import React, {useState, useContext} from 'react';
import Select from 'react-dropdown-select';
import MainContext from '../../../contexts/main-context';

export default function StatusFilter({results, filteredResults, filter}){
    const [disable , setDisable] = useState(false);
    const ContextMain = useContext(MainContext)

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
       const filtered = results.length > 0 ? results.filter(item => {return item.resolution == e}) : ContextMain.teamIssues.filter(item => {return item.resolution == e})
       
      filteredResults(filtered);
      filter(true);
      return setDisable(true);
      }

    return (
<Select disabled={disable} className='filterSelect' onChange={e=> handleFilter(e[0].value)} options={options}/>
    )
}
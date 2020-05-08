import React, {useState, useContext} from 'react';
import Select from "react-dropdown-select";
import MainContext from '../../../contexts/main-context';

export default function CategoryFilter({results, filteredResults, filter}){
  const ContextMain = useContext(MainContext)
        const [disable , setDisable] = useState(false);
 const options = [
        { value: 'api', label: 'api' },
        { value: 'auth', label: 'auth' },
        { value: 'bug', label: 'bug' },
        { value: 'code cleanup', label: 'code cleanup' },
        { value: 'css', label: 'css' },
        { value: 'database', label: 'database' },
        { value: 'feature', label: 'feature' },
        { value: 'html', label: 'html' },
        { value: 'javascript', label: 'javascript' },
        { value: 'migration', label: 'migration' },
        { value: 'other', label: 'other' }
      ]

      const handleFilter = e => {
        if(e === 'null' || undefined){
           return console.log('undefined')
        }
        console.log(e)
       const filtered = results.length > 0 ? results.filter(item => {return item.category == e}) : ContextMain.teamIssues.filter(item => {return item.category == e})
       
      filteredResults(filtered);
      filter(true);
      return setDisable(true);
      }

    return (
<Select disabled={disable} className='filterSelect' onChange={e=> handleFilter(e[0].value)} options={options}/>
    )
}
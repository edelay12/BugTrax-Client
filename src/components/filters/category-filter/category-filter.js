import React, {useState} from 'react';
import Select from 'react-select';

export default function CategoryFilter({results, allIssues, filteredResults}){
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
       const filtered = results.length > 0 ? results.filter(item => {return item.category == e}) : allIssues.filter(item => {return item.category == e})
       
      filteredResults(filtered);
      return setDisable(true);
      }

    return (
<Select isDisabled={disable} className='filterSelect' onChange={e=> handleFilter(e.value)} options={options}/>
    )
}
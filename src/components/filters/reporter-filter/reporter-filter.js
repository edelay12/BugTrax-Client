import React, {useState ,useContext, useEffect} from 'react';
import Select from 'react-dropdown-select';
import MainContext from '../../../contexts/main-context';

export default function ReporterFilter({results, filteredResults, filter, clear, setClear}){
    const [disable , setDisable] = useState(false);
    const ContextMain = useContext(MainContext)
    const [value , setValue] = useState([]);

    const team = ContextMain.teamList.map(v => {
        return { value : v.id, label: v.full_name };
    })
    const options = [...team];

    useEffect(() => {
        if(clear === true){
          setDisable(false);
          setValue([]);
          setClear(false);
        }
       },[clear])


    const handleFilter = e => {
        if(e === 'null' || undefined){
           return console.log('undefined')
        }
       const filtered = results.length > 0 ? results.filter(item => {return item.creator_id == e}) : ContextMain.teamIssues.filter(item => {return item.creator_id == e})
       
      filteredResults(filtered);
      setValue(e);
      filter(true);
      return setDisable(true);
      }

    return (
<Select disabled={disable} className='filterSelect' onChange={e=> handleFilter(e[0].value)} options={options} setValue={value}/>
    )
}
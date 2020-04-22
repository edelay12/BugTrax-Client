import React from 'react';
import Select from 'react-select';

export default function ResolvedByFilter({filter}){
    return (
        //"any" default option
<Select className='filterSelect' onChange={filter}/>
    )
}
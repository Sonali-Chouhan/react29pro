import React,{useState} from 'react'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla-2', label: 'Vanilla-2'},
    { value: 'vanilla-3', label: 'Vanilla-3'},
  ];


const MultiSelector = () => {
const [selectedOption,setSelectedOption]=useState(null);

  const selectHandler=(option)=>{
      setSelectedOption(option);
      console.log("selected data ",option)
  }

    return (
        <div>
            <Select
              value={selectedOption}
               options={options}
                isMulti={true}
                isSearchable={true}
               onChange={selectHandler}/>
        </div>
    )
}

export default MultiSelector;

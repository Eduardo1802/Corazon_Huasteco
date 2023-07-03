import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export default function ControllableStates({value, setValue, inputValue, setInputValue, options}) {
  
  

  return (
    <div>
      {/* <div>{`Respaldar: ${value !== null ? `'${value}'` : 'null'}`}</div> */}
      {/* <div>{`inputValue: '${inputValue}'`}</div> */}
      <br />
      <Autocomplete
        fullWidth
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ mb:1 }}
        renderInput={(params) => <TextField {...params} label="Selecciona una colección" />}
      />
    </div>
  );
}
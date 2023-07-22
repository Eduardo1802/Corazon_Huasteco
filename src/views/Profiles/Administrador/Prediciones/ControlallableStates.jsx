import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ControllableStates({ value, setValue, inputValue, setInputValue, options }) {
  return (
    <div>
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
        getOptionLabel={(option) => (typeof option === 'number' ? option.toString() : '')} // Convertir opción a cadena de texto
        sx={{ mb: 1 }}
        renderInput={(params) => <TextField {...params} label="Meses" />}
      />
    </div>
  );
}

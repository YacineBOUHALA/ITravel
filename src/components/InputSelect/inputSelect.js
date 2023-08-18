/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const getStyles = (name, personName, theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const InputSelect = ({ label, margin = 30, multiple, list, handleSelect,
  value, fullWidth = false, index = -1 }) => {
  const theme = useTheme();
  const [values, setValues] = useState([]);

  const handleChange = (event) => {
    const { target: { value } } = event;
    setValues(
      typeof value === 'string' ? value.split(',') : value,
    );
    handleSelect(value)
  };

  return (
    <div style={{
      width: fullWidth ? '100%' : 400, backgroundColor: 'white',
      borderRadius: 3, padding: '0 13px 0 13px', marginBottom: 0, border: '1px slid black',                    
    }}
    >
      <FormControl variant="standard" sx={{ width: '100%' }}>
        <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
        <Select
          style={{ border: 'none', margin: 0, padding: 10, textAlign: 'left' }}
          labelId="demo-multiple-name-label" id="demo-multiple-name"
          multiple={multiple} disableUnderline={true} fullWidth
          variant="standard" value={value || values} onChange={handleChange}
          MenuProps={MenuProps}
        >
          {list?.map((value, index) => (
            <MenuItem key={value} value={value} style={getStyles(value, values, theme)}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default InputSelect

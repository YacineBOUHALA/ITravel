import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const FloatingActionButton = ({ createCard }) => (
  <div>
    <Fab onClick={createCard} color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  </div>
);

export default FloatingActionButton

export const CustomDivider = ({ height, length, color }) => (
  <div style={{ borderBottom: `${height}px solid`, width: length, borderColor: color }} />
)

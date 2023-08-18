import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import './modal.scss'

const ModalConfirmationComponent = ({ open, title, text, confirmation,
  handleConfirm,
  handleCancel,
}) => {
  return (
    <Modal open={open} aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="box">
        <Typography id="modal-modal-title" variant="h5" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 3 }}>
          {text}
        </Typography>
        <Typography id="modal-modal-description" variant="subtitle1"
          sx={{ mt: 3, mb: 5 }}
        > {confirmation}
        </Typography>
        {handleConfirm
          && (
            <Box className="buttons">
              <Button variant="contained" onClick={() => handleConfirm()} color="success">
                Confirmer
              </Button>
              <Button variant="contained" onClick={() => handleCancel()} color="error">
                Annuler
              </Button>
            </Box>
          )}
      </Box>
    </Modal>
  );
}

export default ModalConfirmationComponent

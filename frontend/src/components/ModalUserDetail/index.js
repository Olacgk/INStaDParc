import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { FaEye } from 'react-icons/fa'
import './style.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalDetail({ id}) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const handleClose = () => setOpen(false);

  const detailUser = (id) => {
    fetch(`http://localhost:8080/api/user/get-user/${id}`)
    .then(res => res.json())
    .then(data => {
      setUser(data)
    })
    .catch(err => console.error(err))
  }

  return (
    <div>
      <button onClick={()=> { setOpen(true); detailUser(id)}} className='detailButton'> 
        <FaEye size={'20px'}/> 
      </button>
      <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Détail de l'utilisateur
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <div  className='detail_form'>
                  <div className='detail_form__left'>
                    <div className='detail'>
                      <span>Nom: </span>
                      <span>{user.name}</span>
                    </div>
                    <div className='detail'>
                      <span>Prénom: </span>
                      <span>{user.prenom}</span>
                    </div>
                    <div className='detail'>
                      <span>Email: </span>
                      <span>{user.email}</span>
                    </div>
                  </div>

                  <div className='detail_form__right'>
                    <div className='detail'>
                      <span>Rôle: </span>
                      <span>{user.role}</span>
                    </div>
                    <div className='detail'>
                      <span>Service: </span>
                      <span>{user.service}</span>
                    </div>
                    <div className='detail'>
                      <span>Direction: </span>
                      <span>{user.direction}</span>
                    </div>
                  </div>
                </div>
              </Typography>
            </Box>
          </Fade>
      </Modal>
    </div>
  );
}
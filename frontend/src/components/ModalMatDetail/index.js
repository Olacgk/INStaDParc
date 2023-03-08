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
  const [materiel, setMateriel] = useState({});
  const handleClose = () => setOpen(false);

  const detailMat = (id) => {
    fetch(`http://localhost:8080/api/material/get-material/${id}`)
    .then(res => res.json())
    .then(data => {
      setMateriel(data)
    })
    .catch(err => console.error(err))
  }

  return (
    <div>
      <button onClick={()=> { setOpen(true); detailMat(id)}} className='detailButton'> 
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
                Détail du matériel
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <div  className='detail_form'>
                  <div className='detail_form__left'>
                    <div className='detail'>
                      <span>Num. Immatriculation: </span>
                      <span>{materiel.numImmatriculation}</span>
                    </div>
                    <div className='detail'>
                      <span>Type: </span>
                      <span>{materiel.type}</span>
                    </div>
                    <div className='detail'>
                      <span>Marque: </span>
                      <span>{materiel.marque}</span>
                    </div>
                    <div className='detail'>
                      <span>Etat: </span>
                      <span>{materiel.etat}</span>
                    </div>
                    <div className='detail'>
                      <span>Disponibilité: </span>
                      <span>{materiel.available ? 'Disponible' : 'Non disponible'}</span>
                    </div>
                    <div className='detail'>
                      <span>Description: </span>
                      <span>{materiel.description}</span>
                    </div>  
                  </div>

                  <div className='detail_form__right'>
                    <div className='detail'>
                      <span>Date Acquisition: </span>
                      <span>{materiel.dateAcquisition}</span>
                    </div>
                    <div className='detail'>
                      <span>Date Mise en Service: </span>
                      <span>{materiel.dateMiseEnService}</span>
                    </div>
                    <div className='detail'>
                      <span>Réforme: </span>
                      <span>{materiel.reforme ? "Oui" : "Non"}</span>
                    </div>
                    <div className='detail'>
                      <span>Propriétaire: </span>
                      <span>{materiel.proprietaire ? "Oui"  : "Non"}</span>
                    </div>
                    <div className='detail'>
                      <span>Utilisateur: </span>
                      <span>{materiel.utilisateur}</span>
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
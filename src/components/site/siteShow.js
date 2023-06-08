//import React, { useEffect, useState } from "react";
import * as React from 'react';
import Button from '@mui/joy/Button';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Rate from './rating';
import Box from '@mui/joy/Box';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/joy/Typography';
import AccessibleIcon from '@mui/icons-material/Accessible';
import NotAccessibleIcon from '@mui/icons-material/NotAccessible';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function Siteshow({ site, addsite, RemoveSite, update, realcode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <React.Fragment>
        <Box sx={{ display: 'grid', gap: 2, pt: 5 }}>
          <Button dir='rtl'
            variant="plain" color="neutral"
            onClick={() => setOpen(true)}
          >
            show Site
          </Button>

        </Box>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            variant="outlined"
            role="alertdialog"
            aria-labelledby="alert-dialog-modal-title"
            aria-describedby="alert-dialog-modal-description"
          >
            <Button variant="plain" color="red" style={{ width: "20px" }} onClick={() => setOpen(false)}>
              <CloseIcon></CloseIcon>
            </Button>
            <h3 >{site.name}</h3>
            <img key={site.images.idimages} src={site.images.url?site.images.url:'/assets/deed_sea.jpg'} style={{ height: '40vh', maxWidth: '100vw' }}></img>

            <Typography variant="body2" color="text.secondary" sx={{display: "grid", gridTemplateColumns: { xs: "repeat(1, minmax(0,1fr))", sm: "repeat(3, minmax(0,1fr))"}} }>
              <div display="flex"><h4>Acces:</h4> {site.acces ? <><AccessibleIcon/> possible to acces</> : <> <NotAccessibleIcon/>not possible to acces</>}</div>
              <div><h4>Bicycles:</h4> {site.bicycles ? <> <PedalBikeIcon/>possible to bicycles</> :<><CloseIcon/><PedalBikeIcon/>not possible to bicycles</>}</div>
              <div><h4>Categories:</h4> {site.categories}</div>
              <div><h4>Tripstype:</h4>{site.tripstype}</div>
              {/* <div><h4>Description:</h4> {site.description}</div>  */}
              <div><h4>Area:</h4> {site.area}</div>
              <div><h4>Truffic:</h4> {site.truffic ? <><DirectionsBusFilledIcon/>possible to truffic</> : <><BusAlertIcon/>not possible to truffic</>}</div>
              <div><h4>Payment:</h4> <AttachMoneyIcon/>{site.payment}</div> 
              <div><h4>Level:</h4>  {site.level}</div> 
              {/* <div><h4>Name:</h4> {site.name} </div> */}
              <div><h4>Adress:</h4>{site.adress}</div>
            </Typography>
            <Rate site={site} update={update} addsite={addsite} RemoveSite={RemoveSite} realcode={realcode}>rate</Rate>
          </ModalDialog>
        </Modal>
      </React.Fragment>

    </>
  )
}

export default Siteshow;
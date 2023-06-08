import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { json } from 'react-router-dom';
import axios from "axios";
import Opinion from '../Opinion/opinion';
import React, { useEffect, useState } from "react";
import ButtonBase from '@material-ui/core/ButtonBase';
import Rate from './rating';
import Siteshow from './siteShow';
import Secrtery from '../../pages/secretery';
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
require('./beutifull.css')
function Site({ index, startindex, endindex, startpoint, setcurrentsite, realcode, e, addsite, RemoveSite, flag, i, setSelectedOption, len, selectOption, setcurrent, setlocations, locations }) {
  const navigate = useNavigate()
  const [level, setlevel] = useState({})
  const [user_opinion, setuser_opinion] = useState({})
  const [opinion, setopinion] = useState(null)
  const [siteid, setsiteid] = useState(e.idsites)
  const [userid, setuserid] = useState(1)
  const [curent, setcurent] = useState(0)
  const [newindex, setnewindex] = useState()
  const [val, setVal] = useState('')
  let l = []
  let a = []
  useEffect(() => {
    if (!e.area) return;
    const _reorderForward = (l, start, end) => {
      let tmp = l[end]//a
      l[end] = l[start]

      // const temp = l[start];
      for (let i = parseInt(end)-1; i > start; i--) {
        console.log("GF")
        let tmp1 = l[i]//b
        console.log("tnp",tmp1)
        l[i] = tmp
        console.log("tnp",l)
        tmp = tmp1//b
        console.log("tnp",tmp)
      }
    l[start]=tmp
    return l;
    };

    const _reorderBackward = (l, start, end) => {
      let tmp = l[end]//a
      l[end] = l[start]

      // const temp = l[start];
      for (let i = parseInt(end)+ 1; i < start; i++) {
        console.log("GF")
        let tmp1 = l[i]//b
        console.log("tnp",tmp1)
        l[i] = tmp
        console.log("tnp",l)
        tmp = tmp1//b
        console.log("tnp",tmp)
      }
    l[start]=tmp

      return l;
    };

    const reorderList = (l, startIndex, endIndex) => {
      console.log('new index change')
      if (startIndex < endIndex)
        return _reorderForward(l.slice(), startIndex, endIndex);
      else if (startIndex > endIndex)
        return _reorderBackward(l.slice(), startIndex, endIndex);
      else return l;
    };
    if (RemoveSite && newindex && newindex < len + 1 && newindex > 0) {
      setSelectedOption(reorderList(selectOption, i, newindex))
      let arr = []
      selectOption.forEach((e) => {
        arr.push({ "name": e.name, "lat": e.place1, "lng": e.place2 })
      })
      setlocations([startpoint, ...arr]);
      setVal('')
    }
  }, [newindex]);


  async function deletesite() {
    try {
      const res = await axios.delete(`http://localhost:4000/site/${e.idsites}`);

      console.log(res.data)
    } catch (err) {
      //   setErr(err.response.data?.message);
    }
  }
  function update() {
    setcurrentsite(e)
    setcurent(true)
  }

  return (
    <>{e.images && <>
      {console.log(e, "'[pok[p", index)}
      {startindex !== undefined && (startindex > index || endindex <= index) ? <> </> :
        <Card sx={{ maxWidth: "345px", height: '50vh', display: 'flex', flexDirection: 'column', margin: '5px' }}>
          {/* <CardActionsArea onClick={() => addsite(e)}> */}

          <CardMedia
            component="img"
            height="140"
            image={e.images.url ? e.images.url : '/assets/deed_sea.jpg'}
            title={e.name}
          />

          <CardContent>

            <Typography gutterBottom variant="h5" component="div">
              {e.name}
            </Typography>
            {flag ? <></> : <>
              {e.opinion?.map((el) => { <Opinion e={el} ></Opinion> })}
              <Typography variant="body2" color="text.secondary" style={{ maxWidth: '100vh', maxHeight: "30vh" }}>
                {e.description}
              </Typography></>}
          </CardContent>
          <CardActions style={{ height: "20vh" }}>
            {addsite ? <Button size="small" onClick={() => addsite(e)}>Add</Button> : <></>}
            <Siteshow site={e} addsite={addsite} RemoveSite={RemoveSite} update={update} realcode={realcode}></Siteshow>
            {RemoveSite ? <Button size="small" onClick={() => RemoveSite(e)}>Remove</Button> : <></>}
            {realcode == 1234 ? <Button onClick={deletesite} variant="outlined" size="medium" startIcon={<DeleteIcon />}>DELETE</Button> : <></>}
            {realcode == 1234 ? <Button onClick={update} variant="outlined" size="medium" startIcon={<EditIcon />}>EDIT</Button> : <></>}
          </CardActions>
          {RemoveSite ? <input value={val} dir='ltr' min={0} max={len - 1} placeholder='enter position'
            onInput={(e) => {
              console.log(e)
              setnewindex(e.target.value);
              setVal(e.target.value)
              // setTimeout(()=>{},0)
            }}></input> : <></>}
          {/* </CardActionsArea> */}
        </Card>
      }
    </>
    }</>
  )
}
export default Site;
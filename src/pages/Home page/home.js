import Opinion from "../../components/Opinion/opinion";
import Site from "../../components/site/site";
import axios from "axios";
import React, { useEffect, useState } from "react";
export const Home = () => {
  const [Opinions, setOpinions] = useState([])
  const [BestSites, setBestSites] = useState([])
  const [images, setimages] = useState(null);
  useEffect(() => {
    console.log("we")
    const GetBestOpinions = async () => {
      try {
      
        const resopinion = await axios.get("http://localhost:4000/generalopinion");
        // res.data.forEach(element => matcessites.push(element));
        console.log(resopinion.data)
        setOpinions(resopinion.data)
      } catch (err) {
        // setErr(err.response.data?.message);
      }
    }
    const GetBestSites = async () => {
      try {
       
        const ressites = await axios.get("http://localhost:4000/site");
        // res.data.forEach(element => matcessites.push(element));
        console.log(ressites.data)
        setBestSites(ressites.data)
       

      } catch (err) {
        // setErr(err.response.data?.message);
      }
    }
    const Getallimages = async () => {
      try {
        
        const ressites = await axios.get("http://localhost:4000/images");
        // res.data.forEach(element => matcessites.push(element));
        console.log(ressites.data)
        setimages(ressites.data)
      } catch (err) {
        // setErr(err.response.data?.message);
      }
    }
    Getallimages()
    GetBestOpinions()
    GetBestSites()
  }, []);

  return (<>
    <div>Hello </div>
    {images?.map((e) => <span key={e.idimages}>{e.url}  </span>)}
    {Opinions?.map((e) => <Opinion  opinion={e.opinion} level={e.level}></Opinion>)}
    {BestSites?.map((e) => <Site id={e[0].idsites} name={e[0].name} num_of_turist={e[0].num_of_turist}ages={e[0].ages} children={e[0].children}address={e.address}accible={e[0].accible} ></Site>)}
     
  </>
  )
}
export default Home; 

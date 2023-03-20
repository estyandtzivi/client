import React, { useEffect, useState } from "react";
import axios from "axios";
import { Check } from "@material-ui/icons";

function SearchParameters({ setTripsOptions, setconstrains }) {



    const [acces, setacces] = useState(false)
    const [bicycles, setbicycles] = useState(false);
    const [categories, setcategories] = useState(["empty"]);
    const [tripstype, settripstype] = useState(["empty"])
    const [description, setdescription] = useState(null);
    const [area, setarea] = useState(["empty"])
    const [truffic, settruffic] = useState(false)
    const [payment, setpayment] = useState(null)
    const [level, setlevel] = useState(["empty"])
    const [empty, setempty] = useState("")
    let arrcsh = [];
    function check(event, set, arr) {
        if (event.target.checked){
            const newArray = [...arr, event.target.value]
            console.log(newArray)
       set(newArray);
        // console.log(arr)
    }
        else
        arrcsh=arr.pop(event.target.value)
        set(
           [arrcsh]
            
        )

    }
    async function bringmatchessites() {
        setempty("")
        const GetMatchesSites = async () => {//ages,children,bicycles,area,trufic,num_of_turist,tripsKind,description,payment
            const constrains = {
                acces: acces,
                bicycles: bicycles,
                tripstype: tripstype,
                description: description,
                truffic: truffic,
                area: area,
                payment: payment,
                level: level,
                categories: categories


                // acces: false,
                // bicycles: false,
                // tripstype: ["around", "lines"],
                // description: null,
                // truffic: false,
                // area: ["north"],
                // payment: 50,
                // level: ["easy", "hard"],
                // categories:[]

            }
            setconstrains(constrains)
            try {

                const res = await axios.post("http://localhost:4000/site/constrains", constrains);//the url not excat

                if (res.data != "ho no there is any matcn site!!")
                    setTripsOptions(res.data)
                else
                    setempty(res.data)

                // setTripsOptions(res.data)





                console.log(res)
            } catch (err) {
                // setErr(err.response.data?.message);
            }
        }
        GetMatchesSites()

    }
    return <>

        <button onClick={bringmatchessites}>bringmatchessites</button><br></br>
        {empty ? <div>{empty}</div> : <></>}
        <p>Please select your constrains</p>
        <input type={"text"} placeholder="payment" onChange={(e) => { setpayment(e.target.value) }}></input><br></br>

        <p>bicycles</p>
        <label for="false">false</label><br></br>
        <input type="radio" id="bicycles" name="bicycles" value="false" onChange={(e) => { setbicycles(e.target.value) }}></input><br></br>
        <label for="true">true</label><br></br>
        <input type="radio" id="bicycles1" name="bicycles" value="true" onChange={(e) => { setbicycles(e.target.value) }}></input><br></br>

        <p>truffic</p>
        <label for="false">false</label><br></br>
        <input type="radio" id="truffic" name="truffic" value="false" onChange={(e) => { settruffic(e.target.value) }}></input><br></br>
        <label for="true">true</label><br></br>
        <input type="radio" id="truffic1" name="truffic" value="true" onChange={(e) => { settruffic(e.target.value) }}></input><br></br>

        <p>acces</p>
        <label for="false">false</label><br></br>
        <input type="radio" id="acces" name="acces" value="false" onChange={(e) => { setacces(e.target.value) }}></input><br></br>
        <label for="true">true</label><br></br>
        <input type="radio" id="acces1" name="acces" value="true" onChange={(e) => { setacces(e.target.value) }}></input><br></br>

        <p>level</p>
        <input type="checkbox" id="level1" name="level1" value="hard" onChange={(e) => { check(e, setlevel, level)}}></input><br></br>
        <label for="level1"> hard</label><br></br>
        <input type="checkbox" id="level2" name="level2" value="easy" onChange={(e) => { check(e, setlevel, level)}}></input><br></br>
        <label for="level2"> easy</label><br></br>
        <input type="checkbox" id="level3" name="level3" value="medium" onChange={(e) => { check(e, setlevel, level)}}></input><br></br>
        <label for="level3"> medium</label><br></br>
        <button type="submit">Submit form</button><br></br>

        <p>area</p>
        <input type="checkbox" id="area1" name="area1" value="north" onChange={(e) => { check(e, setarea, area)}}></input><br></br>
        <label for="area1"> north</label><br></br>
        <input type="checkbox" id="area2" name="area2" value="south" onChange={(e) => { check(e, setarea, area)}}></input><br></br>
        <label for="area2"> south</label><br></br>
        <input type="checkbox" id="area3" name="area3" value="center" onChange={(e) => { check(e, setarea, area)}}></input><br></br>
        <label for="area3"> center</label><br></br>
        <input type="checkbox" id="area3" name="area4" value="JerusalemSurroundingArea" ></input><br></br>
        <label for="area4"> JerusalemSurroundingArea</label>
        <button type="submit">Submit form</button><br></br>

        <p>tripstype</p>
        <input type="checkbox" id="tripstype1" name="tripstype1" value="around" onChange={(e) => { check(e, settripstype, tripstype)}}></input><br></br>
        <label for="tripstype1"> around</label><br></br>
        <input type="checkbox" id="tripstype2" name="tripstype2" value="lines" onChange={(e) => { check(e, settripstype, tripstype)}}></input><br></br>
        <label for="tripstype2"> lines</label><br></br>
        <input type="checkbox" id="tripstype3" name="tripstype3" value="riding" onChange={(e) => { check(e, settripstype, tripstype)}}></input><br></br>
        <label for="tripstype3"> riding</label><br></br>
        <button type="submit">Submit form</button><br></br>

        <p>categories</p>
        <input type="checkbox" id="categories1" name="categories1" value="families" onChange={(e) => { check(e, setcategories, categories)}}></input><br></br>
        <label for="categories1"> families</label><br></br>
        <input type="checkbox" id="categories2" name="categories2" value="groups" onChange={(e) => { check(e, setcategories, categories)}}></input><br></br>
        <label for="categories2"> groups</label><br></br>
        <input type="checkbox" id="categories3" name="categories3" value="pairs" onChange={(e) => { check(e, setcategories, categories)}}></input><br></br>
        <label for="categories3"> pairs</label><br></br>
        <input type="checkbox" id="categories3" name="categories4" value="children" onChange={(e) => { check(e, setcategories, categories)}}></input><br></br>
        <label for="categories4"> children</label><br></br>
        <button type="submit">Submit form</button> <br></br>

        {/* {/* <input type={"text"} placeholder="description" onChange={(e) => { setdescription(e.target.value) }}></input><br></br>  */}






    </>


}
export default SearchParameters;
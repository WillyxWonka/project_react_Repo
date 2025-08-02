import '../Styles_CSS/TestPage.css'
import Header from "../Components/Page-Header";
import ContactForm from "../Components/ContactForm";


///////////////////////////////////////////////

const btns = [1,2,3,4,5,6,7,8,9];

function TestPage() {

  return (
    <>
      <div className="HomePageBody">
        <Header />
          <div className="Container" >
                {btns.map((btn, index) => (
                  <button
                    key={index}
                    className="btn"
                    onClick={() => {}}
                  >
                    Button {index}
                  </button>
                ))}  
          </div>
        <main className="HomePageMainContent" aria-label="Main content with images and videos" role="main">
          <h2 id="asset-gallery-Section" className="TPTitles">
              Test Page
          </h2>

          <ContactForm/>
        </main>  
      </div>
      <footer className="HomePageversionctrl">Tweaked.Studios.Contact@gmail.com</footer>
    </>
  );
}
export default TestPage;

/*

          <section className="form-and-output">
            <form onSubmit={(e) =>handleSubmit(e)} >

              <fieldset className="fake-form" >
                
                <legend>Enter Personal Information</legend>
                <label id="labelName">Name:
                  <input type="text" name="Name" spellCheck={false} onChange={(e) => inputFieldChange(e)}/>
                </label>
                <label id="labelEmail">Email:
                  <input type="text" name="Email" onChange={(e) => inputFieldChange(e)}/>
                </label>
                <label id="labeTxtArea">Message:
                  <textarea type="text" name="Message" spellCheck={false}  onChange={(e) => inputFieldChange(e)}/>
                </label>
  
                <button id="submit-button" type="submit">
                  submit
                </button>
              </fieldset>
            </form>
 
            
            <div className="state-container"> 
              {cardState.map((card, index) =>(
                <p className="state-card" key={index}>
                  <span style={{ textAlign: "center", }}><strong>Person Info</strong></span><br />
                  
                  Name: {card.Name} <br /><br />
                  Email: {card.Email} <br /><br />
                  Message: {card.Message}
                </p>
              ))}
            </div>
          
          </section>
*/


/*

import { useState,useEffect } from "react";
import './TestPage.css'
import Header from "../Components/Page-Header";


///////////////////////////////////////////////
const btns = [1,2,3,4,5,6,7,8,9];
const index = 0;
function TestPage() {

  const [objState ,setObjState] = useState([]);
  const [cardState, setCardState] = useState([]);

  const[iName, setName]= useState("");
  const[iAge, setAge]=useState();
  const[iJob, setJob]=useState("");
  const[iLocation, setLocation] =useState("");

  useEffect(() => {
  }, [cardState]);

  function inputFieldChange(e, val)
  {
    switch (val)
    {
      case "name":
        setName(e.target.value);
        break;

        case "age":

          if (Number.isInteger( Number(e.target.value))) {
            setAge(Number(e.target.value));
          }
          else
          {
            alert("age must be an integer!");
            e.target.value = null;
            return;
          }
        break;

        case "job":
        setJob(e.target.value);
        break;

        case "location":
        setLocation(e.target.value);
        break;
    } 
  }

  function handleKeyDown()
  {
      const person = {
      name: iName,
      age: iAge,
      job: iJob,
      location: iLocation
      }
      setObjState(person);
      setCardState([...cardState, person]);
      console.log(cardState)
  }

  return (
    <>
      <div className="HomePageBody">
        <Header />

        <main className="TestPagePageMainContent" aria-label="Main content" role="main">
          <h2 className="TPTitles">
              Test Page
          </h2>

          <div className="Container" >
                {btns.map((btn, index) => (
                  <button
                    key={index}
                    className="btn"
                    onClick={() => {}}
                  >
                    Button {index}
                  </button>
                ))}  
          </div>

          <section className="form-and-output">
            <fieldset className="fake-form" >
              
              <legend>Enter Personal Information</legend>
              <label id="labelName">Name:
                <input type="text" spellCheck={false} onChange={(e) => inputFieldChange(e, "name")}/>
              </label>
              <label id="labelAge">Age:
                <input type="integer" spellCheck={false}  onChange={(e) => inputFieldChange(e, "age")}/>
              </label>
              <label id="labelJob">Job:
                <input type="text" spellCheck={false}  onChange={(e) => inputFieldChange(e, "job")}/>
              </label>
              <label id="labelLocation">Location:
                <input type="text" spellCheck={false}  onChange={(e) => inputFieldChange(e, "location")}/>
              </label>
  
                <button id="submit-button" type="submit" onClick={(e) =>handleKeyDown(e)} >
                  submit
                </button>
     

            </fieldset>
            
            <div className="state-container"> 
              {
                cardState.map((cards, index) =>(
                <p className="state-card" key={index}>
                  <span style={{ textAlign: "center", }}><strong>Person Info</strong></span><br />

                  name: {cards.name} <br /><br />
                  age: {cards.age} <br /><br />
                  job: {cards.job} <br /><br />
                  location: {cards.location}
                </p>
              ))}
                        {console.log(cardState)}
            </div>
          
          </section>
        </main>  
      </div>
      <footer className="HomePageversionctrl">Tweaked.Studios.Contact@gmail.com</footer>
    </>
  );
}
export default TestPage;
*/

  /* {objState ? (        
    <p className="state-output" style={{visibility: !objState ? 'hidden':'visible' } }>
      {objState.name} <br /><br />
      {objState.age} <br /><br />
      {objState.job} <br /><br />
      {objState.location}
    </p>
    ) : ""} */







    /*
    <input type="text" spellCheck={false} onChange={inputFieldChange} onKeyDown={handleKeyDown}/>

    const person2= {
    name: "Alice",
    greet: () => {
      console.log("Hi, I'm " + person2.name);
      }
      };

    let{name: nameA, age, job, location} = person

    console.log(nameA, age); 
    console.log(person);

    const{name: nameB} = person;
    nameA= "chad";

    console.log(person, nameB);
    console.log(nameB);
    console.log(nameA);
    // You have to manually pull each property

    const person = { name: "Alice", job: "Engineer" };
       console.log(person.name);
    // Rename and provide a default
    const { name: fullName, age = 30 } = person;
    console.log(fullName, age); // Alice 30

    const person = {
      name: "Dilly", 
      lastName: "Dally", 
      age: 1000, 
      greeting: 
        function(val){ console.log(`${name} greets you friend, button ${val}!`)} 
      }

    const {name, ...rest} = person;
    const data = rest;
    console.log(`name: ${name + " " + person.lastName} : ${JSON.stringify(rest)}`);
    person.greeting(value);
    */



/*
      <main className="HomePageMainContent" aria-label="Main content with images and videos" role="main">
        //Gallery Section 
        <section aria-labelledby="asset-gallery-Section">
          <h2 id="asset-gallery-Section" className="HPTitles">Asset Gallery</h2>
          <div className="HomePagetextContainer">
            {images.map(([src, caption], index) => (
              <figure key={index} className="hp-gallery-card" onClick={() => openOverlay(src)}>
                <img className="PageImg" src={src} alt={caption} loading="lazy" />
                <figcaption className="HPpictxt">{caption}</figcaption>
              </figure> ))}      
          </div>
        </section>
        //Overlay (when image clicked)
        {overlaySrc && (
          <div className="overlay active" onClick={closeOverlay}>
            <img src={overlaySrc} alt="Enlarged" className="overlay-content" />
          </div> )}
        //Videos
        <h2 id="Video-Demos" className="HPTitles">Video Demos</h2>
        <section aria-labelledby="Video-Demos">
          <div className="HomePagetextvid"> </div>
        </section>
      </main>  
*/
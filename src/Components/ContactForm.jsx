import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
const formRef = useRef();
const inputNameRef = useRef();
const inputEmailRef = useRef();
const inputMessageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); //prevents page reload

    emailjs
      .sendForm(
        "service_noh801q",   // From EmailJS dashboard
        "template_k1y9a93",  // From EmailJS dashboard
        formRef.current,     // The form reference
        "-yW45QOygDMfp9cIi"    // From EmailJS dashboard
      )
      .then(
        (result) => {
          console.log("Email sent!", result.text);
          formRef.current.reset();
          setFormState({ name: "", email: "", message: "" }); // Reset form state
        },
        (error) => {
          console.error("Email error:", error);
        }
      );
  };


    const [cardState, setCardState] = useState([]);
  
    const [formState, setFormState] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    function inputFieldChange(e)
    {
      const{name} = e.target;
      setFormState({
        ...formState,
        [name]: e.target.value
      })
    }
  
    function handleSubmit(event)
    {
        event.preventDefault();   
        setCardState([...cardState, formState])
        console.log(formState + "  " + cardState)
    }
  return (
    
    <>
    <section className="form-and-output"> 
        <form ref={formRef} onSubmit={sendEmail}>

            <fieldset className="fake-form" >
            
            <legend>Enter Personal Information</legend>
            <label id="labelName">Name:
                <input type="text" name="name" ref={inputNameRef} spellCheck={false} onChange={(e) => inputFieldChange(e)}/>
            </label>
            <label id="labelEmail">Email:
                <input type="text" name="email"  ref={inputEmailRef}onChange={(e) => inputFieldChange(e)}/>
            </label>
            <label id="labeTxtArea">Message:
                <textarea type="text" name="message" ref={inputMessageRef} spellCheck={false}  onChange={(e) => inputFieldChange(e)}/>
            </label>

            <button className="submit-button" type="submit">
                submit
            </button>
            <button className="submit-button" type="button" onClick={handleSubmit}>
                test-submit
            </button>
            </fieldset>
        </form>

        
        <div className="state-container"> 
            {cardState.map((card, index) =>(
            <p className="state-card" key={index}>
                <span style={{ textAlign: "center", }}><strong>Person Info</strong></span><br />
                
                Name: {card.name} <br /><br />
                Email: {card.email} <br /><br />
                Message: {card.message}
            </p>
            ))}
        </div>
        
    </section>  
    </>
  );
}

export default ContactForm;


/*
onSubmit={(e) =>handleSubmit(e)

    <form ref={formRef} onSubmit={sendEmail}>
      <label>Name:</label>
      <input type="text" name="user_name" required />

      <label>Email:</label>
      <input type="email" name="user_email" required />

      <label>Message:</label>
      <textarea name="message" required />

      <button type="submit">Send</button>
    </form>

*/
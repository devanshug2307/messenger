import React, { useState ,useEffect} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { FormControl,InputLabel ,Input } from '@material-ui/core';
import Message from './Message';
import db from './Firebase';
import firebase from "firebase"

//useEffect=run code on a condition in React
function App() {

  const [input,setinput]=useState('');
  // const [messages,setMessages]=useState([]);
  // const [messages,setMessages]=useState([{username:"devanshu",message:"high guys"},{username:"dev",message:"high guy"}]);
  const [messages,setMessages]=useState([]);
  const [username,setUsername]=useState("");
  console.log(messages);



useEffect(()=>{
//run once when the app component loads -no depensies
db.collection("messages").orderBy("timestamp","desc").onSnapshot(sanpshot=>{
setMessages(sanpshot.docs.map(doc=>doc.data()))
//use effect is a listener and above code is a listener within it
})


},[])


useEffect(() => {
setUsername(prompt("Please enter your name"))

}, [])




const sendMessage=(event)=>{
  event.preventDefault();

db.collection("messages").add({
message:input,
username:username,
timestamp:firebase.firestore.FieldValue.serverTimestamp()


})


// setMessages([...messages,input]);

setMessages([...messages,{username:username,text:input}]);
setinput("");



}



  return (

    <div className="App">

   
   {/* <div style={{  
  backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}
> */}
<div>
   <h2></h2>
    <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"></img>
    <h1>
Hello Everyone 🚀🚀</h1>
<h2>Welcome {username}</h2>
</div>

<form type="submit">
<FormControl>
  <InputLabel>Enter a Message</InputLabel>
  <Input input value={input} onChange={event=>{

setinput(event.target.value);

}} />
 
{/* <button onClick={sendMessage}>Send Message</button> */}
<Button disabled={!input} onClick={sendMessage} variant="contained"  color="primary">
Send Message
    </Button>
    
</FormControl>



</form>

{
//use return while using map function if you are not using curley braces
//messages.map(message=>(
  //<Message  username={message.username} text={message.text}></Message>)

 

//)
messages.map(message=>(
  <Message  username={username} message={message}></Message>)

 

)

}




    </div>
  );
}

export default App;

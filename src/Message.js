// import React from 'react'

// function Message(props) {
//     return (

        
//         <div>
//             <h2>{props.username}:{props.text}</h2>
//         </div>
//     )
// }

// export default Message
import React ,{ forwardRef }from 'react'

import "./Message.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Message=forwardRef(({message,username},ref)=> {

const isUser=username===message.username;

    return (
    <div ref={ref} className={`message ${isUser&&'message_user'}`}>
        <Card className={isUser?"message_userCard":"message_guestCard"} >
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
          {message.username}:{message.message}
          </Typography>
      
        </CardContent>
    
      </Card>
      </div>
       
    )
}
)
// function Message(props) {
//   return (
//       <Card className="message">
//       <CardContent>
//         <Typography color="white" variant="h5" component="h2">
//         {props.username}:{props.text}
//         </Typography>
    
//       </CardContent>
  
//     </Card>
      
     
//   )
// }

export default Message;

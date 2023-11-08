import {PrettyChatWindow} from "react-chat-engine-pretty"

const ChatsPage = (props) => {
    
  return (
    <div style={{height:'100vh'}}>
        <PrettyChatWindow
            projectId="
            9295287c-417a-40f6-b223-dad6f06aa9e9"
            username={props.user.username}
            secret={props.user.secret}
            style={{height:'100%'}}
        
        />
    </div>
  )
}

export default ChatsPage
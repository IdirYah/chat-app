import useGetConversations from "../../hooks/useGetConversations.js"
import Conversation  from "./Conversation.jsx"
import {getRandomEmoji} from "../../utils/emojis.js"

const Conversations = () => {
  const {loading,conversations} = useGetConversations()
  console.log("Conversation: ",conversations)
  return (
    <div className="flex flex-col py-2 overflow-auto">
      {conversations.map((conversation,idx)=>(
        <Conversation 
        key={conversation._id}
        conversation={conversation}
        emoji={getRandomEmoji()}
        lastIdx={idx === conversations.length-1}
        />
      ))}
      {loading ? <span className='mx-auto loading loading-spinner'></span> : null}
    </div>
  )
}

export default Conversations

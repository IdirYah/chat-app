import useConversation from "../../zustand/useConversation.js"
import { useSocketContext } from "../../context/SocketContext.jsx"

const Conversation = ({conversation,emoji,lastIdx}) => {
  const { selectedConversation, setSelectedConversation } = useConversation()
  const { onlineUsers } = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)
  const isSelected = selectedConversation?._id === conversation._id
  return (
    <>
    <div className={`flex items-center gap-2 p-2 py-1 rounded cursor-pointer hover:bg-sky-500 ${isSelected?"bg-sky-500":""}`} onClick={()=>setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline?"online":""}`}>
            <div className="w-12 rounded-full">
                <img src={conversation.profilePic} alt="User Avatar" />
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex justify-between gap-3">
                <p className="font-bold text-gray-20">{conversation.fullName}</p>
                <span className="text-xl">{emoji}</span>
            </div>
        </div>
    </div>
    {!lastIdx && <div className="h-1 py-0 my-0 divider"></div>}
    </>
  )
}

export default Conversation
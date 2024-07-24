import {create} from 'zustand';

//this is a use like a state
 
const useConversation= create((set)=> ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages : [],
    setMessages: (messages) => set({messages}),
}))

export default useConversation;
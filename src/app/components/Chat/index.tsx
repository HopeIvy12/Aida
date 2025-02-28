// Chat.tsx

import React, { FormEvent, ChangeEvent } from "react";
import Messages from "./Messages";
import { Message, useChat } from "ai/react";

const Chat: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div id="chat" className="flex flex-col w-full bg-[#f4f1f4] mb-20">
      <Messages messages={messages} />
      <form
        onSubmit={handleSubmit}
        className="mt-5 mb-5 relative bg-[#f4f1f4] rounded-lg"
      >
        <input
          type="text"
          className="appearance-none rounded-full w-full py-4 px-3 text-black leading-tight bg-white border-none transition-shadow duration-200 "
          value={input}
          onChange={handleInputChange}
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 text-sm">
          Press ⮐ to send
        </span>
      </form>
    </div>
  );
};

export default Chat;

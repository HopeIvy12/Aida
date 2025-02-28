import { Message } from "ai";
import { useRef } from "react";

export default function Messages({ messages }: { messages: Message[] }) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="p-6 rounded-xl overflow-y-scroll flex-grow flex flex-col justify-end bg-[#f4f1f4] scrollable-div">
      {messages.length === 0 && (
        <div className="mb-14">
          <h2>
            Hi Im <span className="aida-text">Aida</span>
          </h2>
          <p className="text-center text-gray-800">
            Im here to help you find information about foodbanks. <br />
            What can I help you with today?
          </p>
        </div>
      )}

      {messages.map((msg, index) => (
        <div
          key={index}
          className={`${
            msg.role === "assistant"
              ? "bg-[#ddd2dd] ml-12"
              : "bg-[#eae1ea] mr-12"
          } my-2 p-3 rounded-xl hover:shadow-lg transition-shadow duration-200 flex slide-in-bottom `}
        >
          <div className="ml-2 flex items-center text-black">{msg.content}</div>
        </div>
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
}

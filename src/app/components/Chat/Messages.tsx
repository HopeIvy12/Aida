import { Message } from "ai";
import { useRef } from "react";

export default function Messages({ messages }: { messages: Message[] }) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const formatMessageContent = (content: string) => {
    // Replace '**<text>**' with just the text (remove asterisks)
    const noAsterisks = content.replace(/\*\*(.*?)\*\*/g, "$1");

    // Add a line break before " - " (dash) but only for certain key-value pairs (e.g., "Phone", "Email", "Address")
    const withLineBreaks = noAsterisks
      .replace(/ - (Phone|Email|Address):/g, "<br>- $1:")
      .replace(/ - /g, "<br>- "); // Add breaks for other instances of " - "

    // Return the formatted content
    return withLineBreaks;
  };

  return (
    <div className="p-6 rounded-xl overflow-y-scroll flex-grow flex flex-col justify-end bg-[#f4f1f4] scrollable-div">
      {messages.length === 0 && (
        <div className="mb-14">
          <h2>
            Hi I&apos;m <span className="aida-text">Aida</span>
          </h2>
          <p className="text-center text-gray-800">
            I&apos;m here to help you find information about foodbanks. <br />
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
          <div
            className="ml-2 flex items-center text-black"
            dangerouslySetInnerHTML={{
              __html: formatMessageContent(msg.content),
            }}
          />
        </div>
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
}

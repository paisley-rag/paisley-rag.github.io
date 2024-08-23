import CodeBlock from "@theme/CodeBlock";
import { useState } from "react";

const usePresenceCodeString = `import cerebellum from "@cerebellum/sdk";

const OnlineUsers = ({ user }) => {
  const { presenceData } = cerebellum.usePresence("OnlineUsers", {
    user,
  });

  return (
    <div>
      <h1>Online Users</h1>
      {presenceData.map((data) => (
        <div key={data.socketId} className="presence-user">
          {data.user}
        </div>
      ))}
    </div>
  );
};`;

const useChannelCodeString = `import { useChannel } from "@cerebellum/sdk";

const MyComponent = () => {
  const [messages, setMessages] = useState([]);
  const [messageField, setMessageField] = useState("");
  const { channelName, publish } = useChannel("general", (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  });
};

const sendMessage = () => {
  publish(messageField);
  setMessageField("");
};

return (
  <div>
    <h1>Messages</h1>
    <ul>
      {messages.map((message) => (
        <li key={message.createdAt}>{message.content}</li>
      ))}
    </ul>
    <input
      type="text"
      placeholder="Enter a message"
      onChange={(event) => {
        setMessageField(event.target.value);
      }} 
    />
    <button onClick={sendMessage}>Publish Message</button>
  </div>
);`;

const useCerebellumCodeString = `import cerebellum from "@cerebellum/sdk";

const Chat = ({ user }) => {
  const { channelData } = cerebellum.useChannel("Chat", {
    user,
  });

  return (
    <div>
      <h1>Chat</h1>
      {channelData.map((data) => (
        <div key={data.socketId} className="presence-user">
          {data.user}
        </div>
      ))}
    </div>
  );
};`;

const SDKSection = () => {
  const [selectedTab, setSelectedTab] = useState("usePresence");
  const getCodeString = () => {
    switch (selectedTab) {
      case "usePresence":
        return usePresenceCodeString;
      case "useChannel":
        return useChannelCodeString;
      case "useCerebellum":
        return useCerebellumCodeString;
      default:
        return "usePresence";
    }
  };
  /*
Use the SDK to add WebSocket functionality, whether starting from scratch or enhancing an existing application, with: 
  - Full type support
  - Custom build-in React hooks
  - Local host development
  - 

S*/
  return (
    <div className="sectionB section-mobile mx-auto flex max-w-screen-3xl flex-col items-center justify-between gap-5 bg-white px-8 py-8 lg:flex lg:flex-row lg:py-20">
      <div className="flex-grow py-0">
        <h1 className="mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]">
          Drop-in integration with our TypeScript SDK
        </h1>
        <p className="mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100">
          Whether starting from scratch or enhancing an existing application,
          use the SDK to enable WebSocket functionality with:
        </p>
        <ul className="ml-4 list-disc text-lg text-gray-600 dark:text-slate-100">
          <li>Full type support</li>
          <li>Custom built-in React hooks</li>
          <li>
            Fully-provisioned Docker environment for instant local development
          </li>
        </ul>
      </div>
      <div className="my-10 h-full w-full md:w-[800px] 4xl:w-[60%]">
        <div className="flex flex-row justify-center pb-1 text-center">
          <div
            className={`${selectedTab === "usePresence" ? "selected" : ""} order-1 mx-auto cursor-pointer`}
            onClick={() => setSelectedTab("usePresence")}
          >
            User Presence
          </div>
          <div
            className={`${selectedTab === "useChannel" ? "selected" : ""} order-2 mx-auto cursor-pointer hover:border-b-2`}
            onClick={() => setSelectedTab("useChannel")}
          >
            Channels
          </div>
          <div
            className={`${selectedTab === "useCerebellum" ? "selected" : ""} order-3 mx-auto cursor-pointer hover:border-b-2`}
            onClick={() => setSelectedTab("useCerebellum")}
          >
            useCerebellum
          </div>
        </div>
        <CodeBlock
          language="jsx"
          className="max-h-[478px] overflow-auto overflow-x-auto rounded border-2 align-top text-xs shadow-[0_0_10px_grey] dark:shadow-none sm:text-sm md:text-base xl:text-lg"
        >
          {getCodeString()}
        </CodeBlock>
      </div>
    </div>
  );
};

export default SDKSection;

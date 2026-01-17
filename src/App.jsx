import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch, Chat } from "react-instantsearch";
import "instantsearch.css/themes/satellite.css";

const searchClient = algoliasearch(
  "D3IXHAV8Y4", // App ID
  "6dffe447397c456ebeaf083aca879e1e" // Search-only key
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col">
      {/* Top Header */}
      <header className="h-14 flex items-center justify-center border-b border-gray-800">
        <h1 className="text-white text-lg font-semibold">
          corn 🌽 — Recovery Companion
        </h1>
      </header>

      {/* Centered Chat Area */}
      <main className="flex-1 flex justify-center px-4 py-6">
        <div className="w-full max-w-3xl flex flex-col bg-gray-900 rounded-xl border border-gray-800 shadow-lg overflow-hidden">
          
          {/* Intro Section (static, above chat) */}
       <div className="px-6 py-10 text-center border-b border-gray-800">

  {/* Heading */}
  <h2 className="text-2xl font-semibold text-white mb-4">
Talk it out. Get through this moment. 🌱
  </h2>

  {/* IMAGE CARD */}
 <div className="mx-auto w-64 md:w-72 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden mb-6 border border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
  <img
    src="/Solo.png"
    alt="Recovery illustration"
    className="w-full h-full object-cover opacity-90"
  />
</div>

  {/* CTA BUTTON */}
  <button
    onClick={() => {
      const input = document.querySelector("input");
      input && input.focus();
    }}
    className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition mb-3"
  >
    Use our chatbot - Get Rid in a week 
  </button>

  {/* TRY LINE */}
  <p className="text-gray-500 text-sm">
    Try: <span className="text-gray-300">“I have an urge right now”</span> ·{" "}
   
  </p>
  
</div>


          {/* Chat */}
          <div className="flex-1 overflow-hidden">
            <InstantSearch searchClient={searchClient}>
              <Chat
                agentId="36bfdbd4-eb4e-409f-adac-2c01001127df"
                classNames={{
                  root: "h-full flex flex-col",
                  messages: "flex-1 overflow-y-auto px-4 py-6 space-y-4",
                  message:
                    "max-w-xl px-4 py-3 rounded-xl text-sm leading-relaxed",
                  userMessage:
                    "bg-blue-600 text-white self-end ml-auto",
                  assistantMessage:
                    "bg-gray-800 text-gray-100 self-start",
                  form:
                    "border-t border-gray-800 bg-gray-900 px-4 py-3",
                  input:
                    "w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                }}
                placeholder="Talk to corn… 🌽"
              />
            </InstantSearch>
          </div>
        </div>
      </main>
    </div>
  );
}

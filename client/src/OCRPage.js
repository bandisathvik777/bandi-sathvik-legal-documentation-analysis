import React, { useState } from "react";

function OCRPage() {
  const [file, setFile] = useState(null);
  const [input, setInput] = useState("");
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !input.trim()) {
      alert("Upload PDF and ask question");
      return;
    }

    const newChat = { user: input, bot: "" };
    setChats((prev) => [...prev, newChat]);

    const userQuery = input;
    setInput("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("query", userQuery);

      const res = await fetch("http://127.0.0.1:5000/api/pdf-chat", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      setChats((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].bot = data.answer;
        return updated;
      });

    } catch (err) {
      console.error(err);

      setChats((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].bot = "Error getting response";
        return updated;
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-700 flex justify-center items-center">
      <div className="w-[600px] bg-white rounded-lg shadow-lg flex flex-col">

        <div className="p-4 border-b text-center font-bold text-lg">
          OCR Legal Assistant
        </div>

        <div className="p-3 border-b">
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full"
          />
          {file && <p className="text-sm">{file.name}</p>}
        </div>

        <div className="flex-1 overflow-y-auto p-3 bg-gray-100 h-[300px]">
          {chats.map((chat, index) => (
            <div key={index} className="mb-3">
              <div className="text-right">
                <span className="bg-blue-500 text-white px-3 py-1 rounded">
                  {chat.user}
                </span>
              </div>

              <div className="text-left mt-1">
                <span className="bg-gray-300 px-3 py-1 rounded">
                  {chat.bot || (loading ? "Typing..." : "")}
                </span>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex p-3 border-t">
          <input
            className="flex-1 border p-2 rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your PDF..."
          />
          <button className="ml-2 bg-blue-600 text-white px-4 rounded">
            Send
          </button>
        </form>

      </div>
    </div>
  );
}

export default OCRPage;
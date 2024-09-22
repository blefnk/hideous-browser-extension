import { useState, useEffect } from "react";
import "./App.css";
import { uploadedWords, extensionMode } from "../utils/storage";

function App() {
  const [uploadedWordsList, setUploadedWordsList] = useState<string[]>([]);
  const [mode, setMode] = useState<"verified" | "all">("all"); // Default to "all"

  useEffect(() => {
    // Retrieve stored uploadedWords when the component mounts
    uploadedWords.getValue().then((words) => {
      setUploadedWordsList(words || []);
    });

    // Retrieve the extension mode
    extensionMode.getValue().then((savedMode) => {
      setMode(savedMode || "all"); // Default to "all"
    });

    // Watch for changes to uploadedWords
    const unwatchWords = uploadedWords.watch((newValue) => {
      setUploadedWordsList(newValue || []);
    });

    // Watch for changes to extensionMode
    const unwatchMode = extensionMode.watch((newMode) => {
      setMode(newMode || "all"); // Default to "all"
    });

    return () => {
      unwatchWords();
      unwatchMode();
    };
  }, []);

  // TODO: імплементувати
  // const [newWord, setNewWord] = useState("");
  // const handleAddWord = async () => {
  //   const updatedWords = [...new Set([...uploadedWordsList, newWord.trim()])];
  //   await uploadedWords.setValue(updatedWords);
  //   setNewWord("");
  // };
  // const handleRemoveWord = async (wordToRemove) => {
  //   const updatedWords = uploadedWordsList.filter(
  //     (word) => word !== wordToRemove,
  //   );
  //   await uploadedWords.setValue(updatedWords);
  // };

  const handleModeChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedMode = event.target.checked ? "verified" : "all"; // Change logic here
    setMode(selectedMode);
    await extensionMode.setValue(selectedMode);
  };

  const handleRestoreContent = () => {
    // Send a message to the active tab's content script
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      if (tabs[0]?.id) {
        browser.tabs.sendMessage(tabs[0].id, { action: "restoreContent" });
      } else {
        console.error("No active tab found.");
      }
    });
  };

  const handleDownloadWords = () => {
    const element = document.createElement("a");
    const file = new Blob([uploadedWordsList.join("\n")], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "loaded_words.txt";
    document.body.appendChild(element); // Required for Firefox
    element.click();
    document.body.removeChild(element); // Clean up after click
  };

  return (
    <div>
      <h1>Word Filter Extension</h1>
      <p>The extension automatically fetches words from:</p>
      <a
        href="https://github.com/blefnk/testxt/blob/main/words.txt"
        target="_blank"
        rel="noopener noreferrer"
      >
        words.txt on GitHub
      </a>

      <h2>Settings</h2>
      <label>
        <input
          type="checkbox"
          checked={mode === "verified"}
          onChange={handleModeChange}
        />
        Enable extension only for verified websites
      </label>
      <p>
        {mode === "verified"
          ? "The extension is enabled only on verified websites."
          : "The extension is enabled on all websites."}
      </p>

      <h2>Перегляд імпортованих слів</h2>
      <button onClick={handleDownloadWords}>
        Download Loaded Words as .txt
      </button>

      <button onClick={handleRestoreContent}>
        Відновити видалений контент
      </button>
    </div>
  );
}

export default App;

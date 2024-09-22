// utils/storage.ts

import { defaultWords } from "@/defaultWords";
import { storage } from "wxt/storage";

// Define a storage item for uploaded words
export const uploadedWords = storage.defineItem<string[]>(
  "local:uploadedWords",
  {
    fallback: defaultWords,
  },
);

uploadedWords.getValue().then((words) => {
  console.log("Words from storage or fallback:", words);
});

// Define a storage item for the extension mode
export const extensionMode = storage.defineItem<"verified" | "all">(
  "local:extensionMode",
  {
    fallback: "all", // Default to 'all' mode
  },
);

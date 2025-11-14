import { output,input } from "../script.js";
export default function formatJson() {
    try {
      // Parse the input JSON string into a JavaScript object
      const jsonObject = JSON.parse(input.value);
  
      // Pretty-print the object with 4 spaces for indentation
      const prettyJson = JSON.stringify(jsonObject, null, 4);
  
      // Apply syntax highlighting
      output.innerHTML = syntaxHighlight(prettyJson);
      output.classList.remove("text-red-500");
    } catch (e) {
      // Handle invalid JSON input
      output.innerHTML = "Invalid JSON: " + e.message;
      output.classList.add("text-red-500");
    }
  }
  
  // Basic syntax highlighting function
  function syntaxHighlight(json) {
    json = json
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      function (match) {
        let cls = "text-[#0B0]";
        if (match.startsWith('"')) {
          if (match.endsWith(":")) {
            cls = "text-[#606]";
          } else {
            cls = "text-[#077]";
          }
        } else if (/true|false/.test(match)) {
          cls = "text-[#007]";
        } else if (/null/.test(match)) {
          cls = "text-[#777]";
        }
        return '<span class="' + cls + '">' + match + "</span>";
      }
    );
  }
  
  
import updateLineColumn from "./utils/updateLineCol.js";
import formatJson from "./utils/formatjson.js";
import saveJson from "./utils/savejson.js";
export const input = document.getElementById("json-input");
export const output = document.getElementById("json-output");

input.addEventListener("keyup",()=>{updateLineColumn(input)})
input.addEventListener("mouseup",()=>{updateLineColumn(input)})

const formatButton = document.getElementById("formatJson");
const exportJson = document.getElementById("exportJson");

formatButton.addEventListener("click", formatJson);
document.addEventListener("keydown", (key) => {
  if (key.altKey && key.shiftKey && key.code == "KeyF") {
    formatJson();
  }
});

exportJson.addEventListener("click",()=>{saveJson(output.innerText)})

// Optional: Add sample JSON on load
window.onload = () => {
  input.value = JSON.stringify(
    {
      user: {
        name: "John Doe",
        age: 30,
        isVerified: true,
        address: {
          street: "123 Main St",
          city: "Anytown",
          zipCode: "12345",
        },
        tags: ["developer", "json", "viewer"],
        metadata: null,
      },
    },
    null,
    4
  );
  formatJson();
};

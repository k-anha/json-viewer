import { input } from "../script.js";
import formatJson from "./formatjson.js";
export default function importJson(event) {
  event.target.files[0].text().then((e) => {
    input.value = e;
    formatJson();
  });
}

export default function saveJson(data) {
  var blob = new Blob([data], { type: "application/json;charset=utf-8" });
  saveAs(blob, "user_data" + Date.now() + ".json");
}

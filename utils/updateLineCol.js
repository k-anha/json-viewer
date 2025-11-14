export default function updateLineColumn(textarea) {
    // Get the substring up to the current cursor position
    var textLines = textarea.value.substr(0, textarea.selectionStart).split("\n");
    // The line number is the length of the array (number of lines + 1 for the current one)
    var currentLineNumber = textLines.length;
    // The column number is the length of the last line
    var currentColumnIndex = textLines[textLines.length - 1].length;
  
    // Update the status display
    document.getElementById("status").textContent =
      "Line: " + currentLineNumber + ", Column: " + currentColumnIndex;
  }
  
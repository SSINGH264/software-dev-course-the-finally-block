
// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================
// Step 1 : Ran the code and observed what needs to be corrected
function processFile(fileName, fileData) {
  let fileAction = null; // null will be the placeholder, will leave it empty

  try {
    // Step 2: Input validation with standard exceptions
    if (!fileName) {
      throw new ReferenceError("The file name is missing!"); //thrown when no file name is provided
    }

    if (typeof fileData !== "string") {
      throw new TypeError("File data must be a string!"); // thrown when a string is not provided
    }

    if (fileData.trim() === "") {   // cannot have empty spaces as the file name
      throw new Error("The file data cannot be empty!");
    }

    // file processing
    fileAction = "OPEN";
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);

    // print for reading and writing
    console.log("Reading file.");
    console.log("Writing file.");
  } catch (finalError) {
    // Handling an error 
    console.error("Error:", finalError.message);
  } finally {     // The finally block will always run and "clean up"

    if (fileAction) {
      console.log("Closing file.");
      fileAction = null;
    } else {
      console.log("No file handle to close.");
    }
  }
}
// Step 4: testing 
// ============================================
// 🧪 Test Cases Below
// ============================================

processFile(); // ❌ ReferenceError: File name is missing
processFile("myFile.txt", 42); // ❌ TypeError: File data must be a string
processFile("myFile.txt", ""); // ❌ Error: File data cannot be empty
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully

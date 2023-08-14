const MessageSchema = require("../Model/message");

exports.message = async (name, email, message) => {
  try {
    // Create a new MessageSchema instance
    const messageS = new MessageSchema({ name, email, message });

    // Save the message to the database
    await messageS.save();

    // Successful message for debugging
    console.log("Message saved successfully:", messageS);

    return messageS; // Return the saved message (optional)
  } catch (error) {
    console.error("Error saving message:", error);
    throw error; // Rethrow the error to be caught in the controller
  }
};

exports.message1 = async () => {
  try {
    const md = await MessageSchema.find();

    return md;
  } catch (error) {
    console.error("Error saving message:", error);
    throw error; // Rethrow the error to be caught in the controller
  }
};

exports.message3 = async (id) => {
  try {
    // Save the message to the database
    const messageSF = await MessageSchema.findByIdAndDelete(id);

    // Successful message for debugging
    console.log("Message deleted successfully:", messageSF);

    return messageSF; // Return the saved message (optional)
  } catch (error) {
    console.error("Error saving message:", error);
    throw error; // Rethrow the error to be caught in the controller
  }
};

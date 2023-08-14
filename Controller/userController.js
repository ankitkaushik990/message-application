const messageService = require("../Service/userService");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const savedMessage = await messageService.message(name, email, message);

    res.status(201).send("Message sent successfully");
  } catch (error) {
    console.error("Controller error:", error);
    res
      .status(500)
      .send({ message: "An error occurred while sending the message." });
  }
};

exports.seeMessage = async (req, res) => {
  try {
    const savedMessage = await messageService.message1();

    res.status(201).send(savedMessage);
  } catch (error) {
    console.error("Controller error:", error);
    res
      .status(500)
      .send({ message: "An error occurred while sending the message." });
  }
};

exports.senMessage = async (req, res) => {
  try {
    const { id } = req.body;
    await messageService.message3(id);

    res.status(201).send("Message deleted successfully");
  } catch (error) {
    console.error("Controller error:", error);
    res
      .status(500)
      .send({ message: "An error occurred while sending the message." });
  }
};

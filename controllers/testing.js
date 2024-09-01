const testingPost = (req, res) => {
  console.log("POST request received:", req.body);
  res.json(req.body);
};

export const TestingController = {
  testingPost,
};

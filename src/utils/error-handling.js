export const errorHandling = (app) => {
  app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
      res.status(401).send("Invalid token, or no token supplied!");
      return;
    }
    res.status(500).send("Something went wrong!");
  });
};

import rateLimit from "express-rate-limit";

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  // You can also define a handler for when a user hits the rate limit
  handler: function (req, res /*, next*/) {
    res.status(429).json({
      message: "Too many requests, please try again later.",
    });
  },
});

export { limiter };

[
  {
    categoryName: String,
    products: [
      {
        name: String,
        shortDescription: String,
        description: String,
        price: Number,
        image: String,
        tags: [String],
      },
    ],
  },
];

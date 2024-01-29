import { expressjwt as jwt } from "express-jwt";
import jwksRsa from "jwks-rsa";
import dotenv from "dotenv";

dotenv.config();

const jwtCheck = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.YOUR_AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: `${process.env.YOUR_API_IDENTIFIER}`,
  issuer: `https://${process.env.YOUR_AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
});

export { jwtCheck };

import { app } from "./app";

const port = app.get("port");
const env = app.get("env");

export const server = app.listen(port, () => {
  console.log(`App is running at http://localhost:${port} in ${env}`);
});
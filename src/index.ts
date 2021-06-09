
import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

function middleware() {
  return function(req: Request, res: Response, next: NextFunction) {
    console.log("before next");
    next();
  }
}

app.use(middleware());

// function custom(req: Request, res: Response, next: NextFunction) {
//   next();
// }

app.get("/", (req: Request, res: Response) => {
  console.log("incoming request");
  res.json({ok: true});
});

const PORT = process.env.PORT ?? 5000;
 
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}...`);
});

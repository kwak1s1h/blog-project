import Express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { indexRouter } from "./routers/IndexRouter";
import { userRouter } from "./routers/UserRouter";
dotenv.config();

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(Express.static("public"));

app.use('/', indexRouter);
app.use('/', userRouter);

app.use((req, res, next) => {
    // 404 Not Found
    res.status(404);
    next();
});

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
});
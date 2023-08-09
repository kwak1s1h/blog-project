import { Router } from "express";

export const userRouter = Router();

userRouter.get('/:username', (req, res) => {
    res.send(`${req.params.username}님의 페이지`);
});

userRouter.get('/:username/:postname', (req, res) => {
    res.send(`<h1>${req.params.postname}</h1>
              <hr>
              <p>${req.params.username}님의 글</p>`)
});

userRouter.get('/register', (req, res) => {
    res.send("<h1>가입 페이지</h1>");
});

userRouter.post('/register', (req, res) => {
    // 가입 요청 처리
    res.redirect('/login');
})

userRouter.get('/login', (req, res) => {
    res.send("<h1>로그인 페이지</h1>");
});

userRouter.post('/login', (req, res) => {
    // 로그인 처리
    let username: string = "";
    res.redirect(`/${username}`);
})
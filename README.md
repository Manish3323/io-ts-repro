# New Project

 a minimal reproduction for io-ts lib

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Steps to reproduce

```bash
npm install
npm start
```

- open App.tsx
- uncomment line 26

error : decoder for boolean is undefined.

However To fix this, there is a workaround available

change import of `import * as D from io-ts/Decoder` ==> `import * as D from io-ts/es6/Decoder` in App.tsx

But it shouldn't be undefined in the first place. especially if i have a reason & want to use io-ts in the following manner
`import * as D from io-ts/Decoder`

*cough* JEST *cough*...

require("dotenv").config();

console.log(`process.env: ${process.env}`);

console.log(`process.env.PROD_LINK: ${process.env.PROD_LINK}`);
console.log(`process.env.DEV_LINK: ${process.env.DEV_LINK}`);

console.log(`process.env.USER: ${process.env.USER}`);
console.log(`process.env.PWD: " + ${process.env.PWD}`);

// npx ts-node tests/testCode.ts

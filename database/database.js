const {Pool} = require('pg'); // postgresql 모듈 저장
require('dotenv').config();

// postgresql 연결 정보
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
})

module.exports = {pool}; // pool 객체를 외부에서 사용할 수 있도록 export 한다
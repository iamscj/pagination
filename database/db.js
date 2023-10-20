import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
    user: 'admin',
    host: 'dpg-ckm2ab0710pc73f0en9g-a.oregon-postgres.render.com',
    database: 'bhel_final',
    password: 'zAWmhZoN23LNbv9p1JyR2vHMZ8sg3Wfo',
    port: '5432',
    ssl: {
        rejectUnauthorized: false,
    },
});
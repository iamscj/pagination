import { pool } from "../database/db.js";

export const getACDetails = async (req, res) => {
    console.log("getACDetails");

    const page = req.query.page || 1;
    const itemsPerPage = 6;
    console.log(page)
    const offset = (page - 1) * itemsPerPage;

    try {
        let data = await pool.query(
            `SELECT
            converter_no,
            date
            FROM ac
            OFFSET $1 ROWS
            FETCH NEXT $2 ROWS ONLY`,
            [offset, itemsPerPage]
        );
        const result = await pool.query('SELECT COUNT(*) FROM ac');
        const rowCount = parseInt(result.rows[0].count, 10);
        const totalPages = Math.ceil(rowCount / itemsPerPage);
        console.log(data.rows)
        res.json({ data, totalPages });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
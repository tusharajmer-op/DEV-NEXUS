const router = require('express').Router()
const controllers = require('../controllers/index')
const { user } = require('../controllers');
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Logs in user
 *     description: Login of user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
router.post("/login", async (req, res) => {
    const response = await user.login(req);
    res.status(response.status).json(response);
});
router.post("/register",async(req,res)=>{
    response = await user.register(req)
    res.status(response.status).json(response)
});


module.exports = router
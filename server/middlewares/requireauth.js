const session = require('express-session')

// const requireAuth = async (req, res, next) => {

//     const { authorization } = req.headers

//     if (!authorization) return res.status(401).json({ error: "Authorization token required" })

//     const token = authorization.split(' ')[1]

//     if (!token) {
//         return res.status(401).json({ error: 'Authorization token required' })
//     }

//     try {
//         const { id } = jwt.verify(token, process.env.TOKEN_SECRET)
//         req.user_id = id
//         next()
//     } catch (error) {
//         res.status(401).json({ error: 'Request is not authorized' })
//     }
// }

// module.exports = requireAuth

const requireAuth = (req, res, next) => {
    if (req.session && req.session.user_Id) {
        // User is authenticated, proceed to the next middleware or route handler
        next();
    }
    else {
        // User is not authenticated, send a 401 Unauthorized response
        res.status(401).json({ error: 'Authorization required' });
    }
    try {
        const { id } = session.verify(token, process.env.SESSION - SECRET)
        req.user_id = id
        next()
    } catch (error) {
        res.status(401).json({ error: 'Request is not authorized' })
    }
};

module.exports = requireAuth;

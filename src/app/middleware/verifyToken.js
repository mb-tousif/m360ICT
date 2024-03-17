import ApiError from '../../shared/ApiError';
import config from '../../config';

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    
    if (!token) {
        throw new ApiError(403, 'Token is required!')
    }

    jwtHelper.verifyToken(token, config.jwt.secret)
    .then((decoded) => {
        req.user = decoded;
        next();
    })
    .catch((error) => {
        throw new ApiError(401, 'Token is invalid!', error);
    });
};

export default verifyToken;
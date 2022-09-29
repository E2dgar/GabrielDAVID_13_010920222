/**
 * Headers Authorization
 */
const headersAuth = (token, type = 'application/json') => {
    if (token) {
        return {
            Accept: type,
            'Content-Type': type,
            Authorization: `Bearer ${token}`
        };
    }
    console.log('token', token);
    return {
        Accept: type,
        'Content-Type': type
    };
};

/**
 * POST
 * @param {string} url
 * @param {object} headers
 * @param {object} body
 * @returns {object}
 */
const post = async (url, headers, body) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
    });
    return response.json();
};

export { headersAuth, post };

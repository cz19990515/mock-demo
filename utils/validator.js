module.exports = {
    validatePublicParams(params) {
        return (
            params &&
            (params.userId || params.userid) &&
            (params.token || params.cookie)
        )
    }
}
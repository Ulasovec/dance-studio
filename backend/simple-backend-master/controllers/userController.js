let users = [
    {
        nameTrue: 'admin',
        passwordTrue: 'admin'
    },
    {
        nameTrue: 'user',
        passwordTrue: 'user'
    }
]

class UserController {
    async getAll(req, res) {
        return res.json(users)
    }
}

module.exports = new UserController()

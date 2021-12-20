let users = [
    {
        adminTrue: 'admin',
        passwordTrue: 'admin'
    },
    {
        adminTrue: 'user',
        passwordTrue: 'user'
    }
]

class UserController {
    async getAll(req, res) {
        return res.json(users)
    }
}

module.exports = new UserController()

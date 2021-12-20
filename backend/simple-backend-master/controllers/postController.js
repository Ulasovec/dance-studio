let posts = [
    {
        id:1,
        title: 'title 1',
        subtitle: 'subtitle 1'
    },
    {
        id: 2,
        title: 'title 2',
        subtitle: 'subtitle 2'
    }
]

class PostController {

    async getPosts(req, res) {
        return res.json(posts)
    }

    async deletePost(req, res) {
        const index = posts.findIndex(post => post.id == req.params.id)
        posts.splice(index, 1)
        return res.json(posts)
    }

    async getOne(req, res) {
        const {id} = req.params
        const post = posts.find(post => post.id == id)
        return res.json(post)
    }

    async postPost(req, res) {
        try {
            posts.push({...req.body})
            return res.json(posts)
        } catch (e) {
            console.log(e)
            return res.json(null)
        }

    }

}

module.exports = new PostController()

const Post = require('../Schema/Post');

const createPost = async (req, res) => {
    
        const { title, content, caption, author } = req.body;

        const newPost = await Post.create({
            title,
            content,
            caption,
            author,
        });
        
            

        console.log('Post saved successfully:', newPost);
        res.status(201).json(newPost);
  
};

module.exports = createPost;


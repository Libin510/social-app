const { post } = require("../Router/Route");
const Post = require("../Schema/Post");

const deletpost = async (req, res) => {
  const { title, content, caption, author } = req.body;

  const _id = req.params.id;

  const user = await Post.findByIdAndDelete(_id);

  res.json("data deleted");
};

module.exports = deletpost;

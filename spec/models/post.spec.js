const mongoose = require('mongoose');

require('../mongodb_helper')
const Post = require('../../models/post');

describe('Post model', function() {
  beforeEach(function(done) {
      mongoose.connection.collections.posts.drop(function() {
          done();
      });
  });

  it('has a message', function() {
    const post = new Post({ message: 'some message' });
    expect(post.message).toEqual('some message');
  });

  it('can list all posts', async function() {
    const posts = await Post.find()
    expect(posts).toEqual([]);
  });

  it('can save a post', async function() {
    const post = new Post({ message: 'some message' });

    await post.save()
    const posts = await Post.find()
    expect(posts[0]).toMatchObject({ message: 'some message' });
  });
});

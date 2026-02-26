import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ForumPostCard } from '../components/ForumPostCard';

/**
 * ForumPage - Community forum for discussions
 */
export const ForumPage = () => {
  const { user, isAuthenticated } = useAuth();

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Sarah M.',
      title: 'Tips for managing exam anxiety',
      content: 'I found these really helpful techniques that helped me stay calm during exams. First, practice deep breathing exercises...',
      replies: 12,
      date: '2 days ago',
      category: 'Anxiety'
    },
    {
      id: 2,
      author: 'James L.',
      title: 'Getting started with meditation',
      content: 'Hey everyone, I just started meditating 2 weeks ago and I already feel more calm and focused. Here are the apps I recommend...',
      replies: 8,
      date: '3 days ago',
      category: 'Mindfulness'
    },
    {
      id: 3,
      author: 'Emma R.',
      title: 'Sleep improvement success story',
      content: 'After struggling with insomnia for years, I finally found what works for me! Changed my bedtime routine and now I sleep 8 hours...',
      replies: 15,
      date: '5 days ago',
      category: 'Sleep'
    },
    {
      id: 4,
      author: 'Mike T.',
      title: 'Dealing with social anxiety at parties',
      content: 'Anyone else get anxious at social gatherings? I am looking for strategies to feel more comfortable in group settings...',
      replies: 23,
      date: '1 week ago',
      category: 'Anxiety'
    },
    {
      id: 5,
      author: 'Lisa K.',
      title: 'Exercise and mental health',
      content: 'I have noticed a huge improvement in my mood since I started exercising regularly. Running has been a game changer for me!',
      replies: 18,
      date: '1 week ago',
      category: 'Wellness'
    },
    {
      id: 6,
      author: 'David P.',
      title: 'Stress management during finals',
      content: 'Finals are coming up and I am feeling overwhelmed. What are your go-to stress management techniques? Share what works for you!',
      replies: 9,
      date: '3 days ago',
      category: 'Stress'
    },
  ]);

  const [showNewPost, setShowNewPost] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'General'
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Anxiety', 'Depression', 'Sleep', 'Stress', 'Mindfulness', 'Wellness', 'General'];

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(p => p.category === selectedCategory);

  /**
   * Handle new post submission
   */
  const handlePostSubmit = (e) => {
    e.preventDefault();

    if (!newPost.title.trim() || !newPost.content.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const post = {
      id: posts.length + 1,
      author: user?.name || 'Anonymous',
      title: newPost.title,
      content: newPost.content,
      category: newPost.category,
      replies: 0,
      date: 'now'
    };

    setPosts([post, ...posts]);
    setNewPost({ title: '', content: '', category: 'General' });
    setShowNewPost(false);
    alert('✓ Post published successfully!');
  };

  const handleViewPost = (post) => {
    alert(`Viewing post: "${post.title}"\n\nIn a real app, this would open the full discussion thread.`);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            💬 Community Forum
          </h1>
          <p className="text-xl text-gray-600">
            Share experiences, ask questions, and support each other
          </p>
        </div>

        {/* New Post Button */}
        <div className="mb-12">
          {isAuthenticated ? (
            <button
              onClick={() => setShowNewPost(!showNewPost)}
              className="btn btn-primary px-8 py-3"
            >
              {showNewPost ? 'Cancel' : '+ Create New Post'}
            </button>
          ) : (
            <p className="text-gray-600">
              <a href="/login" className="text-purple-600 hover:underline font-semibold">
                Sign in
              </a>{' '}
              to create a post
            </p>
          )}
        </div>

        {/* New Post Form */}
        {showNewPost && isAuthenticated && (
          <form onSubmit={handlePostSubmit} className="card mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Create a New Post</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Post Title
                </label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  placeholder="What's on your mind?"
                  className="w-full"
                  maxLength={100}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {newPost.title.length}/100
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Description
                </label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  placeholder="Share your thoughts, experiences, or ask a question..."
                  className="w-full"
                  rows={5}
                  maxLength={1000}
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  {newPost.content.length}/1000
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Category
                </label>
                <select
                  value={newPost.category}
                  onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                  className="w-full"
                >
                  <option value="Anxiety">Anxiety</option>
                  <option value="Depression">Depression</option>
                  <option value="Sleep">Sleep</option>
                  <option value="Stress">Stress</option>
                  <option value="Mindfulness">Mindfulness</option>
                  <option value="Wellness">Wellness</option>
                  <option value="General">General</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button type="submit" className="btn btn-primary flex-1">
                  Publish Post
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewPost(false)}
                  className="btn btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts List */}
        <div className="space-y-5">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <ForumPostCard
                key={post.id}
                author={post.author}
                title={post.title}
                content={post.content}
                replies={post.replies}
                date={post.date}
                category={post.category}
                onView={() => handleViewPost(post)}
              />
            ))
          ) : (
            <div className="card text-center py-12">
              <p className="text-gray-600 text-lg">
                No posts in this category yet. Be the first to share!
              </p>
            </div>
          )}
        </div>

        {/* Forum Guidelines */}
        <div className="mt-16 card bg-blue-50 border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-900 mb-4">📋 Forum Guidelines</h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>✓ Be respectful and supportive of all members</li>
            <li>✓ No spam, advertisements, or self-promotion</li>
            <li>✓ Keep discussions focused on mental health and wellness</li>
            <li>✓ Respect privacy - don't share others' personal information</li>
            <li>✓ This is not a crisis line - call emergency services if in crisis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

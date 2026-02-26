import React, { useState } from 'react';
import { ResourceCard } from '../components/ResourceCard';

/**
 * ResourcesPage - Browse and filter mental health resources
 */
export const ResourcesPage = () => {
  const [resources] = useState([
    {
      id: 1,
      title: 'Understanding Anxiety',
      description: 'Learn about anxiety symptoms and effective coping strategies',
      category: 'Anxiety',
      icon: '😟'
    },
    {
      id: 2,
      title: 'Sleep Better Tonight',
      description: 'Improve your sleep quality with practical techniques',
      category: 'Sleep',
      icon: '😴'
    },
    {
      id: 3,
      title: 'Stress Management 101',
      description: 'Master practical stress relief and relaxation techniques',
      category: 'Stress',
      icon: '🧘'
    },
    {
      id: 4,
      title: 'Depression: Finding Hope',
      description: 'Resources and support for managing depression',
      category: 'Depression',
      icon: '💙'
    },
    {
      id: 5,
      title: 'Mindfulness Meditation',
      description: 'Start your meditation journey with guided exercises',
      category: 'Mindfulness',
      icon: '🧘‍♀️'
    },
    {
      id: 6,
      title: 'Social Anxiety Tips',
      description: 'Overcome social anxiety and build confidence',
      category: 'Anxiety',
      icon: '👥'
    },
    {
      id: 7,
      title: 'Building Healthy Relationships',
      description: 'Develop stronger and more meaningful connections',
      category: 'Relationships',
      icon: '💑'
    },
    {
      id: 8,
      title: 'Nutrition & Mental Health',
      description: 'How diet affects your emotional well-being',
      category: 'Wellness',
      icon: '🥗'
    },
    {
      id: 9,
      title: 'Exercise for Mental Health',
      description: 'Physical activity as a mental health tool',
      category: 'Wellness',
      icon: '💪'
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique categories
  const categories = ['All', ...new Set(resources.map(r => r.category))];

  // Filter resources
  const filteredResources = resources.filter(resource => {
    const categoryMatch = selectedCategory === 'All' || resource.category === selectedCategory;
    const searchMatch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const handleLearnMore = (resource) => {
    alert(`Learning more about: ${resource.title}\n\nIn a real app, this would open detailed content.`);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            📚 Mental Health Resources
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Access our comprehensive library of mental health articles, guides, and tools
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 card space-y-6">
          {/* Search Bar */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Search Resources
            </label>
            <input
              type="text"
              placeholder="Search by title or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-3">
              Filter by Category
            </label>
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
        </div>

        {/* Results */}
        <div className="mb-8">
          <p className="text-gray-600 font-semibold">
            Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map(resource => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                description={resource.description}
                category={resource.category}
                icon={resource.icon}
                onLearnMore={() => handleLearnMore(resource)}
              />
            ))}
          </div>
        ) : (
          <div className="card text-center py-12">
            <p className="text-gray-600 text-lg">
              No resources found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

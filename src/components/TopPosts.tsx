import { Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react';

const posts = [
  {
    id: 1,
    platform: 'Instagram',
    content: 'New product launch announcement! Check out our latest innovation...',
    likes: 8542,
    comments: 342,
    shares: 156,
    engagement: 9.2,
    color: '#E1306C'
  },
  {
    id: 2,
    platform: 'Twitter',
    content: 'Behind the scenes look at our creative process. Thread 🧵',
    likes: 6234,
    comments: 287,
    shares: 421,
    engagement: 8.7,
    color: '#1DA1F2'
  },
  {
    id: 3,
    platform: 'LinkedIn',
    content: 'Excited to announce our partnership with industry leaders...',
    likes: 4521,
    comments: 198,
    shares: 312,
    engagement: 7.5,
    color: '#0077B5'
  },
  {
    id: 4,
    platform: 'Facebook',
    content: 'Customer success story: How we helped transform their business',
    likes: 3842,
    comments: 156,
    shares: 234,
    engagement: 6.8,
    color: '#4267B2'
  }
];

export function TopPosts() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Posts</h3>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: post.color }}></div>
                <span className="text-sm font-medium text-gray-900">{post.platform}</span>
              </div>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">{post.engagement}%</span>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-3">{post.content}</p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>{post.likes.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center gap-1">
                <Share2 className="w-4 h-4" />
                <span>{post.shares}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

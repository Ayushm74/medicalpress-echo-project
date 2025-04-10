
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'New Treatment Options for Chronic Pain Management',
    excerpt: 'Our experts have developed innovative approaches to chronic pain that offer hope to patients who have exhausted traditional options.',
    date: 'April 5, 2023',
    author: 'Dr. Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&h=250&q=80',
    category: 'Treatment'
  },
  {
    id: 2,
    title: 'Understanding the Importance of Preventive Healthcare',
    excerpt: 'Preventive healthcare can help you avoid serious health problems and detect issues before they become more serious.',
    date: 'March 22, 2023',
    author: 'Dr. Michael Brown',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=250&q=80',
    category: 'Wellness'
  },
  {
    id: 3,
    title: 'COVID-19 Updates: What You Need to Know',
    excerpt: 'Stay informed with the latest updates on COVID-19 vaccines, variants, and safety guidelines from our medical team.',
    date: 'March 15, 2023',
    author: 'Dr. John Smith',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&h=250&q=80',
    category: 'News'
  }
];

const News = () => {
  return (
    <section className="py-16 bg-medicalpress-light-gray">
      <div className="medical-container">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block">Latest News & Articles</h2>
          <p className="text-medicalpress-dark-gray mt-6 max-w-2xl mx-auto">
            Stay updated with the latest healthcare news, medical advancements, and wellness tips from our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-medicalpress-blue text-white text-sm py-1 px-3 rounded">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-medicalpress-dark-gray mb-3 hover:text-medicalpress-blue transition-colors">
                  <Link to={`/blog/${item.id}`}>{item.title}</Link>
                </h3>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{item.author}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                
                <Link to={`/blog/${item.id}`} className="inline-flex items-center text-medicalpress-blue hover:text-medicalpress-dark-blue font-medium">
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/blog"
            className="inline-block bg-medicalpress-blue hover:bg-medicalpress-dark-blue text-white px-6 py-3 rounded transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;

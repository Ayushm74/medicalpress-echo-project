
import { Activity, Stethoscope, Heart, Users, Clock, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Stethoscope,
    title: 'Medical Treatment',
    description: 'Comprehensive medical care for a wide range of conditions.',
    color: 'bg-medicalpress-blue'
  },
  {
    icon: Heart,
    title: 'Cardiac Clinic',
    description: 'Specialized cardiac care from experienced professionals.',
    color: 'bg-medicalpress-dark-blue'
  },
  {
    icon: Activity,
    title: 'Primary Care',
    description: 'Your first point of contact for healthcare needs.',
    color: 'bg-medicalpress-green'
  },
  {
    icon: Users,
    title: 'Family Planning',
    description: 'Guidance and care for your family's future.',
    color: 'bg-blue-600'
  },
  {
    icon: Clock,
    title: '24 Hour Support',
    description: 'Medical care available whenever you need it.',
    color: 'bg-green-600'
  },
  {
    icon: Phone,
    title: 'Emergency Cases',
    description: 'Immediate attention for critical medical conditions.',
    color: 'bg-sky-500'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="medical-container">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block">Our Medical Services</h2>
          <p className="text-medicalpress-dark-gray mt-6 max-w-2xl mx-auto">
            We provide exceptional healthcare services to improve the wellbeing of our patients. 
            Our team of experts is dedicated to offering the highest quality medical care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: {
    icon: React.FC<any>;
    title: string;
    description: string;
    color: string;
  };
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const { icon: Icon, title, description, color } = feature;
  
  return (
    <div className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center p-6">
        <div className={cn("p-3 rounded-full mr-4", color)}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-medicalpress-dark-gray">{title}</h3>
        </div>
      </div>
      <div className="px-6 pb-6 pt-0">
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="px-6 pb-6">
        <a href="#" className="text-medicalpress-blue hover:text-medicalpress-dark-blue font-medium inline-flex items-center">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Features;

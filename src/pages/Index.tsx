
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="max-w-6xl mx-auto pt-16 pb-24">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Connect Across Languages
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-time interpretation, language learning, and cultural consultation in one seamless platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="text-2xl">🌐</div>
              <h3 className="text-xl font-semibold">Real-time Interpretation</h3>
              <p className="text-gray-600">Connect with professional interpreters instantly for your communication needs</p>
              <Button 
                className="w-full"
                onClick={() => navigate('/interpretation')}
              >
                Start Interpreting
              </Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="text-2xl">📚</div>
              <h3 className="text-xl font-semibold">Language Learning</h3>
              <p className="text-gray-600">Join live tutoring sessions or watch recorded lessons from expert teachers</p>
              <Button 
                className="w-full"
                onClick={() => navigate('/learning')}
              >
                Start Learning
              </Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="text-2xl">🤝</div>
              <h3 className="text-xl font-semibold">Cultural Consultation</h3>
              <p className="text-gray-600">Get expert guidance on cultural nuances for business and travel</p>
              <Button 
                className="w-full"
                onClick={() => navigate('/consultation')}
              >
                Get Consultation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

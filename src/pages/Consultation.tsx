
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Consultation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Cultural Consultation
          </h1>
          <p className="text-xl text-gray-600">
            Expert guidance on cultural nuances for business and travel
          </p>
        </div>

        <Card className="p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-center">Connect with Cultural Experts</h2>
          <p className="text-gray-600 text-center">
            Get personalized advice from experienced consultants who understand the cultural landscape
          </p>
          
          <div className="flex justify-center gap-4">
            <Button size="lg">Schedule Consultation</Button>
            <Button size="lg" variant="outline">Browse Consultants</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Consultation;

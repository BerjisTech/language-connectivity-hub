
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Learning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Language Learning Hub
          </h1>
          <p className="text-xl text-gray-600">
            Live tutoring and pre-recorded lessons for effective language learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 space-y-4">
            <div className="text-2xl">👥</div>
            <h3 className="text-xl font-semibold">Live Tutoring</h3>
            <p className="text-gray-600">Connect with language tutors in real-time for personalized learning</p>
            <Button className="w-full">Join Live Session</Button>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="text-2xl">📼</div>
            <h3 className="text-xl font-semibold">Recorded Lessons</h3>
            <p className="text-gray-600">Access our library of pre-recorded lessons at your own pace</p>
            <Button className="w-full" variant="outline">Browse Lessons</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Learning;

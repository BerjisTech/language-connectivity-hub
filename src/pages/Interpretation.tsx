
import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import Peer from 'simple-peer';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Interpretation = () => {
  const [isClient, setIsClient] = useState(false);
  const [isInterpreter, setIsInterpreter] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const socketRef = useRef<Socket>();
  const peerRef = useRef<Peer.Instance>();

  useEffect(() => {
    // Connect to socket server
    socketRef.current = io('http://localhost:3003', {
      path: '/next/socket'
    });

    return () => {
      socketRef.current?.disconnect();
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  const startCall = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      setStream(mediaStream);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }

      // Initialize WebRTC peer connection
      const peer = new Peer({
        initiator: isClient,
        stream: mediaStream,
        trickle: false
      });

      peer.on('signal', data => {
        socketRef.current?.emit('signal', data);
      });

      peer.on('stream', stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });

      socketRef.current?.on('signal', data => {
        peer.signal(data);
      });

      peerRef.current = peer;
    } catch (err) {
      console.error('Error accessing media devices:', err);
    }
  };

  const endCall = () => {
    peerRef.current?.destroy();
    stream?.getTracks().forEach(track => track.stop());
    setStream(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Real-time Interpretation
          </h1>
          <p className="text-xl text-gray-600">
            Connect with interpreters for instant communication support
          </p>
        </div>

        {!isClient && !isInterpreter ? (
          <Card className="p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-center">Choose Your Role</h2>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setIsClient(true)}
              >
                I Need an Interpreter
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsInterpreter(true)}
              >
                I am an Interpreter
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-center">
              {isClient ? 'Connect with an Interpreter' : 'Available for Interpretation'}
            </h2>
            
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted={isClient}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-center gap-4">
              {!stream ? (
                <Button
                  size="lg"
                  onClick={startCall}
                >
                  {isClient ? 'Start Call' : 'Go Online'}
                </Button>
              ) : (
                <Button
                  size="lg"
                  variant="destructive"
                  onClick={endCall}
                >
                  End Call
                </Button>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Interpretation;

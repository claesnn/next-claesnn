"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlackCatSVG = ({ className }: { className?: string }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Cat ears */}
    <path d="M12 18 L18 8 L24 18 Z" fill="#1a1a1a" />
    <path d="M24 18 L30 8 L36 18 Z" fill="#1a1a1a" />
    <path d="M15 16 L18 10 L21 16 Z" fill="#ff69b4" />
    <path d="M27 16 L30 10 L33 16 Z" fill="#ff69b4" />
    
    {/* Cat head */}
    <circle cx="24" cy="26" r="12" fill="#1a1a1a" />
    
    {/* Cat eyes */}
    <ellipse cx="20" cy="24" rx="2" ry="3" fill="#00ff00" />
    <ellipse cx="28" cy="24" rx="2" ry="3" fill="#00ff00" />
    <ellipse cx="20" cy="24" rx="1" ry="2" fill="#000" />
    <ellipse cx="28" cy="24" rx="1" ry="2" fill="#000" />
    
    {/* Cat nose */}
    <path d="M24 28 L22 30 L26 30 Z" fill="#ff69b4" />
    
    {/* Cat mouth */}
    <path d="M24 30 Q20 32 18 30" stroke="#1a1a1a" strokeWidth="1" fill="none" />
    <path d="M24 30 Q28 32 30 30" stroke="#1a1a1a" strokeWidth="1" fill="none" />
    
    {/* Whiskers */}
    <line x1="12" y1="26" x2="18" y2="25" stroke="#1a1a1a" strokeWidth="1" />
    <line x1="12" y1="28" x2="18" y2="28" stroke="#1a1a1a" strokeWidth="1" />
    <line x1="30" y1="25" x2="36" y2="26" stroke="#1a1a1a" strokeWidth="1" />
    <line x1="30" y1="28" x2="36" y2="28" stroke="#1a1a1a" strokeWidth="1" />
    
    {/* Cat body */}
    <ellipse cx="24" cy="40" rx="8" ry="6" fill="#1a1a1a" />
  </svg>
);

const SoccerBallSVG = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" fill="#ffffff" stroke="#000000" strokeWidth="1"/>
    <path d="M12 2 L8 8 L12 12 L16 8 Z" fill="#000000"/>
    <path d="M2 12 L8 8 L12 12 L8 16 Z" fill="#000000"/>
    <path d="M22 12 L16 8 L12 12 L16 16 Z" fill="#000000"/>
    <path d="M12 22 L8 16 L12 12 L16 16 Z" fill="#000000"/>
    <path d="M8 8 L4 4" stroke="#000000" strokeWidth="1"/>
    <path d="M16 8 L20 4" stroke="#000000" strokeWidth="1"/>
    <path d="M8 16 L4 20" stroke="#000000" strokeWidth="1"/>
    <path d="M16 16 L20 20" stroke="#000000" strokeWidth="1"/>
  </svg>
);

export default function IndexGame() {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState("ready");
  const [catPosition, setCatPosition] = useState("center");
  const [ballPosition, setBallPosition] = useState("");
  const [ballAnimating, setBallAnimating] = useState(false);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const shootBall = (direction: "left" | "center" | "right") => {
    if (gameState !== "ready") return;
    
    setGameState("shooting");
    setBallPosition(direction);
    setBallAnimating(true);
    
    // Cat decides to move after 1 second (80% chance now)
    let finalCatPosition = catPosition;
    setTimeout(() => {
      const catMoves = Math.random() > 0.2; // Increased from 0.6 to 0.2 (80% chance)
      if (catMoves) {
        finalCatPosition = Math.random() > 0.5 ? "left" : "right";
        setCatPosition(finalCatPosition);
      }
      
      // Ball reaches goal after 2 seconds total
      setTimeout(() => {
        setBallAnimating(false);
        if (direction === finalCatPosition) {
          setMessage("🐾 SAVED! The black cat is too quick!");
          setGameState("saved");
          setGameOver(true);
        } else {
          setMessage("⚽ GOAL! You scored!");
          setScore(prev => prev + 1);
          setGameState("goal");
        }
      }, 1000);
    }, 1000);
  };

  const resetGame = () => {
    setGameState("ready");
    setBallPosition("");
    setBallAnimating(false);
    setCatPosition("center");
    setMessage("");
    setGameOver(false);
  };

  const resetScore = () => {
    setScore(0);
    resetGame();
  };

  const playAgain = () => {
    setScore(0);
    resetGame();
  };

  useEffect(() => {
    if (gameState === "goal" && !gameOver) {
      const timeout = setTimeout(resetGame, 2000);
      return () => clearTimeout(timeout);
    }
  }, [gameState, gameOver]);

  return (
    <div className="bg-gradient-to-b from-green-100 to-green-200 py-8 px-4 rounded-lg">
      <Card className="max-w-lg mx-auto bg-white/90">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Soccer Penalty Shootout</CardTitle>
          <p className="text-gray-600">Score: {score}</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Simple Soccer Field */}
            <div className="relative h-80 rounded-lg border-2 border-green-800 overflow-hidden" style={{
              background: `radial-gradient(ellipse at center, #15803d 0%, #166534 50%, #15803d 100%),
                          repeating-linear-gradient(
                            0deg,
                            transparent 0px,
                            transparent 3px,
                            rgba(0,0,0,0.05) 3px,
                            rgba(0,0,0,0.05) 6px
                          ),
                          repeating-linear-gradient(
                            90deg,
                            #16a34a 0px,
                            #16a34a 12px,
                            #15803d 12px,
                            #15803d 24px
                          )`
            }}>
              
              {/* Goal and Cat at top */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="relative w-48 h-32">
                  {/* Goal frame */}
                  <div className="absolute inset-0 border-4 border-white border-b-0 rounded-t-lg bg-black/20"></div>
                  
                  {/* Net pattern */}
                  <svg className="absolute inset-1 w-full h-full" viewBox="0 0 100 60">
                    <defs>
                      <pattern id="net" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                        <path d="M 0 0 L 8 0 L 8 8 L 0 8 Z" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="60" fill="url(#net)"/>
                  </svg>
                  
                  {/* Cat goalkeeper */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <motion.div
                      animate={{
                        x: catPosition === "left" ? -48 : catPosition === "right" ? 48 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <BlackCatSVG />
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Soccer ball */}
              <AnimatePresence>
                {ballPosition && gameState === "shooting" && (
                  <motion.div 
                    className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
                    initial={{ x: 0, y: 0, scale: 1 }}
                    animate={{
                      x: ballPosition === "left" ? -72 : ballPosition === "right" ? 72 : 0,
                      y: -200,
                      scale: 0.9
                    }}
                    transition={{ 
                      duration: 2, 
                      ease: "easeOut",
                      x: { duration: 1.8 },
                      y: { duration: 2, ease: [0.25, 0.1, 0.25, 1] }
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                  >
                    <motion.div
                      animate={{ rotate: ballPosition === "left" ? -720 : ballPosition === "right" ? 720 : -360 }}
                      transition={{ duration: 2, ease: "linear" }}
                    >
                      <SoccerBallSVG />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Player at bottom */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <svg width="48" height="48" viewBox="0 0 32 32">
                  {/* Player body */}
                  <circle cx="16" cy="8" r="4" fill="#f4a460"/>
                  <rect x="12" y="12" width="8" height="12" fill="#4169e1" rx="2"/>
                  <rect x="8" y="22" width="4" height="8" fill="#f4a460"/>
                  <rect x="20" y="22" width="4" height="8" fill="#f4a460"/>
                  <rect x="6" y="30" width="8" height="2" fill="#000"/>
                  <rect x="18" y="30" width="8" height="2" fill="#000"/>
                </svg>
              </div>
            </div>
            
{gameOver ? (
              <div className="text-center space-y-4">
                <div className="p-6 rounded-lg bg-red-50 border border-red-200">
                  <h3 className="text-2xl font-bold text-red-800 mb-2">Game Over!</h3>
                  <p className="text-lg font-medium text-red-700">{message}</p>
                  <div className="mt-4 p-4 bg-white rounded-lg border">
                    <p className="text-xl font-bold text-gray-800">Final Score: {score}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {score === 0 ? "Better luck next time!" : 
                       score === 1 ? "Not bad for a start!" : 
                       score <= 3 ? "Good effort!" : 
                       score <= 5 ? "Great shooting!" : 
                       "Amazing performance!"}
                    </p>
                  </div>
                </div>
                <Button 
                  onClick={playAgain}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
                >
                  🔄 Play Again
                </Button>
              </div>
            ) : (
              <>
                {message && (
                  <div className="text-center p-4 rounded-lg bg-blue-50 border border-blue-200">
                    <p className="text-lg font-medium">{message}</p>
                  </div>
                )}
                
                <div className="flex justify-center gap-4">
                  <Button 
                    onClick={() => shootBall("left")} 
                    disabled={gameState !== "ready"}
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    Shoot Left
                  </Button>
                  <Button 
                    onClick={() => shootBall("center")} 
                    disabled={gameState !== "ready"}
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    Shoot Center
                  </Button>
                  <Button 
                    onClick={() => shootBall("right")} 
                    disabled={gameState !== "ready"}
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    Shoot Right
                  </Button>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    onClick={resetScore} 
                    variant="outline"
                    className="text-sm"
                  >
                    Reset Score
                  </Button>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]); // <-- YE NAYA

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => { // <-- YE NAYA FUNCTION
    const newMeteors = [];
    for (let i = 0; i < 3; i++) { // 3 meteor ek saath
      newMeteors.push({
        id: i + Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 5000,
      });
    }
    setMeteors(newMeteors);
  };

  useEffect(() => {
    generateStars();
    generateMeteors();

    const meteorInterval = setInterval(generateMeteors, 7000); // har 7 sec me naye meteor

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(meteorInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => ( // <-- YE NAYA
        <div
          key={meteor.id}
          className="meteor animate-meteor" // animate-meteor use kiya
          style={{
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}ms`,
          }}
        />
      ))}
    </div>
  );
};
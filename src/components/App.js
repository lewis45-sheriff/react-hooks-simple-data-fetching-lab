import React, { useEffect, useState } from "react";

const App = () => {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogImage(data.message);
      } catch (error) {
        console.error("Error fetching dog image:", error);
      }
    };

    fetchDogImage();
  }, []);

  if (!dogImage) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={dogImage} alt="Random Dog" />
    </div>
  );
};

export default App;

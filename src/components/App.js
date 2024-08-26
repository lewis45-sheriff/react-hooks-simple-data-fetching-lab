import React, { useState, useEffect } from 'react';

function App() {
  // State to manage the dog image and loading status
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect to fetch the dog image when the component mounts
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setImage(data.message); // Set the fetched image URL
        setLoading(false); // Set loading to false after the image is fetched
      });
  }, []);

  // Conditional rendering based on loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={image} alt="A Random Dog" />
    </div>
  );
}

export default App;

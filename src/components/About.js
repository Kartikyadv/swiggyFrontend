import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <div className="bg-gradient-to-tr from-gray-400 to-gray-600 min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">About FoodHub</h1>
        <p className="text-white mb-6">
          Welcome to FoodHub, where we bring the world's flavors to your doorstep. Our mission is to provide a seamless and delightful food delivery experience, connecting you with the best local restaurants in your area.
        </p>
        <p className="text-white mb-6">
          At FoodHub, we understand that great food brings people together. That's why we've partnered with a diverse range of restaurants to offer a menu that satisfies every craving. From mouth-watering classics to innovative cuisines, we've got it all.
        </p>
        <p className="hidden md:block text-white mb-6">
          Our user-friendly app makes it easy for you to explore a variety of dishes, place orders effortlessly, and track your delivery in real-time. We prioritize reliability and speed to ensure your food arrives hot and fresh every time.
        </p>
        <p className="hidden md:block text-white mb-6">
          We value your feedback and are committed to enhancing your dining experience. Feel free to reach out to us with any suggestions, comments, or questions – your satisfaction is our priority.
        </p>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=100049277855837" className="text-white hover:underline"><FaFacebook size={30} /></a>
          <a href="https://www.linkedin.com/in/kartik-yadav-2a21a5250/" className="text-white hover:underline"><FaLinkedin size={30} /></a>
          <a href="https://www.instagram.com/kartik_rao0/?next=%2F" className="text-white hover:underline"><FaInstagram size={30} /></a>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;

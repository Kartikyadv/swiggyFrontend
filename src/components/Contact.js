import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Contact = () => {
    return (
        <div className="bg-gradient-to-tr from-gray-400 to-gray-600 min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Contact FoodHub</h1>
        <p className="text-white mb-6">
          Have questions, suggestions, or just want to chat? We'd love to hear from you! Feel free to reach out using the contact information below.
        </p>
        <div className="bg-white bg-opacity-25 p-6 rounded-md mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Contact Information</h2>
          <p className="text-white">Email: info@foodhub.com</p>
          <p className="text-white">Phone: (123) 456-7890</p>
        </div>
        <p className="text-white mb-6">
          You can also connect with us on social media for the latest updates, promotions, and more:
        </p>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=100049277855837" className="text-white hover:underline"><FaFacebook size={30} /></a>
          <a href="https://www.linkedin.com/in/kartik-yadav-2a21a5250/" className="text-white hover:underline"><FaLinkedin size={30} /></a>
          <a href="https://www.instagram.com/kartik_rao0/?next=%2F" className="text-white hover:underline"><FaInstagram size={30} /></a>
        </div>
        <p className="text-white mt-6">
          We appreciate your feedback and look forward to serving you better!
        </p>
      </div>
    </div>
    )
};

export default Contact;
import { useState } from "react";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 //logic
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-black dark:bg-sky-100 text-black dark:text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
        Contact Us
      </h1>
      <p className="text-center text-black dark:black max-w-xl mb-10">
        We'd love to hear from you! Whether you have a question about our menu,
        delivery, or anything else — our team is ready to answer all your
        questions.
      </p>

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 text-black">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Address</h3>
            <p>
              123 Food Street,
              <br />
              Flavor Town, GT 54321
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>(123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>support@foody.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
            <p>Mon - Sun: 10:00 AM - 11:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 dark:bg-sky-200 p-6 rounded-lg shadow-lg space-y-4"
        >
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border   rounded-md bg-white   focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border   rounded-md bg-white   focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

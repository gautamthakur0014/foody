const About =()=>{
    return (
      <div className="min-h-screen bg-sky-100 text-gray-800 px-6 py-12 flex flex-col items-center">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to{" "}
            <span className="text-orange-500 font-semibold">
              Foody
            </span>{" "}
            – where passion for food meets perfection in every bite.
          </p>
        </div>

        <div className="max-w-5xl grid md:grid-cols-2 gap-10 mt-6">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Restaurant Interior"
              className="rounded-lg shadow-lg object-cover w-full h-72"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p>
              Founded in 2020, Foody started as a small
              family-owned eatery with a big dream — to serve heartwarming meals
              made with fresh, locally sourced ingredients.
            </p>
            <p>
              Over the years, we've grown into a community favorite, known for
              our commitment to quality, service, and innovation. From
              mouthwatering burgers to vegan delights, every dish is a tribute
              to authentic flavor and culinary craftsmanship.
            </p>
            <p>
              Whether you're dining in or ordering online, we promise a
              delicious experience, every time.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <p className="text-gray-600">
            ✔️ Fresh Ingredients &nbsp; • &nbsp; Friendly Staff &nbsp; • &nbsp;
            Fast Delivery &nbsp; • &nbsp; Diverse Menu Options
          </p>
        </div>
      </div>
    );
};

export default About;
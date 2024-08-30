import Face from "../assets/face.jpg";

const Home = () => {
  return (
    <div>
      <section id="inicio" className="relative flex flex-col items-center ">
        <div className="relative">
          <img src={Face} alt="Face" className="w-full h-auto object-fill" />
          <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-50">
            <div className="text-white p-12 w-550px mt-20">
              <h1 className="text-5xl mb-3">
                Discover the beauty you deserve at Aura
              </h1>
              <p>
                At Aura, we offer a variety of aesthetic services designed to
                enhance your natural beauty. Our commitment is to provide you
                with a unique and personalized experience that makes you feel
                special.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-44 my-10 ">
        <div className="p-12 text-center flex flex-col">
          <h1 className="text-5xl mb-3">
            Welcome to <span className="text-green-700 font-bold">Aura</span>
          </h1>
          <p>
            At Aura, we enhance your beauty with personalized services and a
            focus on your well-being.
          </p>
        </div>
      </section>
      <section
        className="flex justify-center items-center w-full"
        id="servicios"
      >
        <div className=" text-center w-4/5 my-10">
          <h1 className="text-4xl mb-16">Services we offer</h1>
          <div className="flex justify-around p-5">
            <div className="w-72 flex flex-col border-2 border-gray-100 p-5 rounded-3xl">
              <img
                className="w-60 h-44 object-cover rounded-xl"
                src="https://florida-academy.edu/wp-content/uploads/2021/08/types-of-facial-florida-academy-scaled.jpg"
              ></img>
              <h3 className="text-xl font-semibold text-start mt-5">Facial</h3>
              <p className="text-start my-3">
                Each treatment is performed with attention to detail and
                professionalism.
              </p>
              <a className="text-gray-500 text-start my-1">View more</a>
            </div>
            <div className="w-72 flex flex-col p-5 rounded-3xl bg-white border-2 border-gray-100">
              <img
                className="w-60 h-44 object-cover rounded-xl"
                src="https://m.media-amazon.com/images/I/61CMT9XpSsL._SL1200_.jpg"
              ></img>
              <h3 className="text-xl font-semibold text-start mt-5">Nails</h3>
              <p className="text-start my-3">
                Each treatment is performed with attention to detail and
                professionalism.
              </p>
              <a className="text-gray-500 text-start my-1">View more</a>
            </div>
            <div className="w-72 flex flex-col border-2 border-gray-100 p-5 rounded-3xl">
              <img
                className="w-60 h-44 object-cover rounded-xl"
                src="https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/tgryck8rd73pujcc2tp3.jpg"
              ></img>
              <h3 className="text-xl font-semibold text-start mt-5">Body</h3>
              <p className="text-start my-3">
                Each treatment is performed with attention to detail and
                professionalism.
              </p>
              <a className="text-gray-500 text-start my-1">View more</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;

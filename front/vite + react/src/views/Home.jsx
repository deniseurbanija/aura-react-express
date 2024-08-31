import Face from "../assets/face.jpg";
import { ServiceCard } from "../components/ServiceCard";

const Home = () => {
  return (
    <div>
      <section id="inicio" className="relative flex flex-col items-center">
        <div className="relative">
          <img src={Face} alt="Face" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-50">
            <div className="text-white p-6 sm:p-8 md:p-12 w-full max-w-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl mb-3">
                Discover the beauty you deserve at{" "}
                <span className="font-title">Aura</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg">
                At Aura, we offer a variety of aesthetic services designed to
                enhance your natural beauty. Our commitment is to provide you
                with a unique and personalized experience that makes you feel
                special.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10 text-center">
        <div className="p-12">
          <h1 className="text-5xl mb-3">
            Welcome to{" "}
            <span className="text-greeny font-bold font-title">Aura</span>
          </h1>
          <p>
            At Aura, we enhance your beauty with personalized services and a
            focus on your well-being.
          </p>
        </div>
      </section>

      <section
        className="flex flex-wrap justify-center items-center w-full"
        id="services"
      >
        <div className="text-center w-11/12 my-10">
          <div className="flex justify-center gap-8 flex-wrap">
            <ServiceCard
              image="https://florida-academy.edu/wp-content/uploads/2021/08/types-of-facial-florida-academy-scaled.jpg"
              title="Facial"
              description="Each treatment is performed with attention to detail and professionalism."
            />
            <ServiceCard
              image="https://i.pinimg.com/564x/0f/6e/c8/0f6ec8fb8adcfd6600830934f2922aea.jpg"
              title="Nails"
              description="Each treatment is performed with attention to detail and professionalism."
            />
            <ServiceCard
              image="https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/tgryck8rd73pujcc2tp3.jpg"
              title="Body"
              description="Each treatment is performed with attention to detail and professionalism."
            />
          </div>
        </div>
      </section>
      <section
        className="flex flex-wrap justify-center items-center my-20"
        id="contact"
      >
        <div className="flex flex-col p-6 sm:p-8 md:p-12 w-full h-96 items-center bg-greeny ">
          <h1 className="text-5xl text-white my-10">Contact</h1>
          <p>Facebook: Aura Beauty Salon</p>
          <p>Instagram: @aurabeauty</p>
          <p>Email: aurabeatysalon@info.com</p>
          <p>Phone: +34 123456421</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

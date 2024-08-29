const Home = () => {
  return (
    <div>
      <section id="inicio" className="h-600px bg-green-700 flex flex-col">
        <div className="p-12 w-550px mt-20">
          <h1 className="text-5xl mb-3">
            Descubre la belleza que mereces en Aura
          </h1>
          <p>
            En Aura, ofrecemos una variedad de servicios estéticos diseñados
            para realzar tu belleza natural. Nuestro compromiso es brindarte una
            experiencia única y personalizada que te haga sentir especial.
          </p>
        </div>
      </section>
      <section className="h-96">
        <div className="p-12 w-550px mt-20">
          <h1 className="text-5xl mb-3">Bienvenido a Aura</h1>
          <p>
            En Aura, transformamos tu belleza con servicios personalizados y
            enfoque en tu bienestar
          </p>
        </div>
      </section>
      <section className="h-96" id="servicios">
        <div className="p-12 w-550px">
          <h1 className="text-4xl mb-3">Servicios</h1>
          <p>Uñas, peinados, maquillajes, etc</p>
        </div>
      </section>
    </div>
  );
};
export default Home;

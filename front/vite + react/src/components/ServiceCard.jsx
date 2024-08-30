export const ServiceCard = ({ image, title, description }) => {
    return (
      <div className="w-80 flex flex-col border-2 border-gray-100 p-5 rounded-3xl">
        <img
          className="w-72 h-44 object-cover rounded-xl"
          src={image}
          alt={title}
        />
        <h3 className="text-xl font-semibold text-start mt-5">{title}</h3>
        <p className="text-start my-3">{description}</p>
        <a href="#" className="text-gray-500 text-start my-1">
          View more
        </a>
      </div>
    );
  };
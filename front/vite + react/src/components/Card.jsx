const Card = ({ appointment, handleOnClick }) => {
  const { id, motive, date, time, status } = appointment;
  return (
    <div className="border-2 border-gray-100 rounded-3xl w-10/12 flex justify-around items-center p-3 m-4">
      <h4 className="w-2/12 text-center">{motive}</h4>
      <p className="w-3/12 text-center">{date}</p>
      <p className="w-2/12 text-center">{time}</p>
      <p className="w-2/12 text-center">{status}</p>
      {status == "active" && (
        <button
          onClick={() => handleOnClick(id)}
          className="w-1/12 text-center"
        >
          X
        </button>
      )}
    </div>
  );
};

export default Card;

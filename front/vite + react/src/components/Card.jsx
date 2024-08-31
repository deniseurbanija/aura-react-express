const Card = ({ appointment, handleOnClick }) => {
  const { id, motive, date, time, status } = appointment;
  return (
    <div className="border-2 border-gray-100 rounded-3xl w-10/12 flex justify-around items-center p-3 m-4">
      <h4 className="w-2/12 text-center">{motive}</h4>
      <p className="w-3/12 text-center">{date}</p>
      <p className="w-2/12 text-center">{time}</p>
      {status === "active" ? (
        <>
          <p className="text-active px-4 py-2 rounded-lg w-2/12 text-center">
            {status}
          </p>
          <button className="" onClick={() => handleOnClick(id)}>
            X
          </button>
        </>
      ) : (
        <>
          <p className="text-red-600 px-4 py-2 rounded-lg w-2/12 text-center">
            {status}
          </p>
          <button className="invisible">X</button>
        </>
      )}
    </div>
  );
};

export default Card;

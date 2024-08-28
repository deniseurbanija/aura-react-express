/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Card = ({ appointment, handleOnClick }) => {
  const { id, motive, date, time, status } = appointment;
  return (
    <div>
      <h4> {motive}</h4>
      <p>{date}</p>
      <p>{time}</p>
      {status === "active" ? (
        <>
          <p >{status}</p>
          <button
          
            onClick={() => handleOnClick(id)}
          >
            X
          </button>
        </>
      ) : (
        <>
          <p>{status}</p>
          <button>X</button>
        </>
      )}
    </div>
  );
};

export default Card;

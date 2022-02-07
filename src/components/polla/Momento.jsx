import moment from "moment";

export const Momento = () => {
  const fecha = new Date();
  const y = moment(fecha);
  console.log(y.format("MMMM Do YYYY h:mm:ss a"));

  return (
    <>
      <h3>El momento</h3>
    </>
  );
};

import styles from "../styles/Residence.module.scss";

const Residence = ({ data, isPreview, setStep }) => {
  const addressArray = formatAddress(data.address);

  return (
    <div className="col-10">
      {isPreview && (
        <div>
          <h1 className="form-title">Förhandsgranska din annons.</h1>
          <p className="form-subtitle">
            Kontrollera att all information är korrekt.
          </p>
        </div>
      )}
      <div>
        <h2 className={styles.addressStreet}>{addressArray[0]}</h2>
        <p className={styles.addressPost}>{addressArray[1]}</p>
      </div>
    </div>
  );
};

Residence.defaultProps = {
  data: {},
  isPreview: false,
};

const formatAddress = (address) => {
  const REGEX = /\d{3}[ ]?\d{2}/gm;
  const splitIndex = REGEX.exec(address).index;

  return [
    address.slice(0, splitIndex).replace(", ", ""),
    address.slice(splitIndex).replace(", ", "") + ", Sverige",
  ];
};

export default Residence;

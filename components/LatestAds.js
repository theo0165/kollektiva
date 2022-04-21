import styles from "../styles/LatestAds.module.scss";
import SingleAdPreview from "./SingleAdPreview";

const LatestsAds = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((residence) => (
        <SingleAdPreview data={residence} key={residence.id} />
      ))}
    </div>
  );
};

export default LatestsAds;

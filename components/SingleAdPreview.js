import Link from "next/link";
import styles from "../styles/SingleAdPreview.module.scss";
import { formatAddress, formatRent } from "../utils/helpers";
import hashids from "../utils/hashids.js";

const SingleAdPreview = ({ data }) => {
  return (
    <Link href={`/residence/${hashids.encode(data.id)}`}>
      <a>
        <div className={styles.container}>
          <img src={data.image} />
          <div className={styles.meta}>
            <p className={styles.address}>{formatAddress(data.address)[0]}</p>
            <p className={styles.rent}>{formatRent(data.monthlyRent)}kr/mån</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SingleAdPreview;

import css from "./Profile.module.css";
import clsx from "clsx";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.wrapper}>
      <div className={css["flex-box"]}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={clsx(css["bold-text"], css.name)}>{name}</p>
        <p className={css["grey-text"]}>@{tag}</p>
        <p className={css["grey-text"]}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css["list-item"]}>
          <span>Followers</span>
          <span className={css["bold-text"]}>{stats.followers}</span>
        </li>
        <li className={css["list-item"]}>
          <span>Views</span>
          <span className={css["bold-text"]}>{stats.views}</span>
        </li>
        <li className={css["list-item"]}>
          <span>Likes</span>
          <span className={css["bold-text"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

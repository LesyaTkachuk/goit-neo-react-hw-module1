import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.wrapper}>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      <p className={isOnline ? css.green : css.red}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;

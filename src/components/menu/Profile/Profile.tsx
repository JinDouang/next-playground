import { Dropdown } from "../../ui/Dropdown";
import styles from './Profile.module.scss'

type Props = {
    children?: React.ReactNode;
};

export const Profile = ({children}: Props) => {
  const urlImg = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  return (
    <div className={styles.profile}>
      <>
        <button type="button" className={styles['profile-button']}>
          <span className="sr-only">Open user menu</span>
          {/*<Image className={styles['profile-button-img']} src={urlImg} alt=""/>*/}
        </button>
      </>
      <Dropdown className={styles['profile-dropdown']}/>
    </div>
  );
}
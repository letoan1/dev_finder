import { useContext } from "react";
import Moment from "moment";

import avatar from "../../assets/images/cat.png";
import addressIcon from "../../assets/svg/address.svg";
import linkIcon from "../../assets/svg/link.svg";
import twitterIcon from "../../assets/svg/twitter.svg";
import companyIcon from "../../assets/svg/company.svg";
import styles from "./styles.module.scss";
import { UserContext } from "../../context/UserContext";
import { ThemeContext } from "../../context/themeContext";

const InfoUser = () => {
  const { dataUser } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "light" ? styles[`info__user`] : styles[`info__user--dark`]
      }
    >
      <div className={styles[`info__user--content`]}>
        <div className={styles[`info__profile--sider`]}>
          <img src={dataUser.avatar_url || avatar} alt="" />
        </div>
        <div className={styles[`info__profile--detail`]}>
          <div className={styles[`profile__user--flex`]}>
            <div
              className={
                theme == "light"
                  ? styles[`profile__user--name`]
                  : styles[`profile__user--name--dark`]
              }
            >
              <p>{dataUser.name || "The Octocat"}</p>
            </div>
            <div
              className={
                theme === "light"
                  ? styles[`profile__user--date-join`]
                  : styles[`profile__user--date-join--dark`]
              }
            >
              <p>
                {dataUser.created_at &&
                  `Joined ${Moment(dataUser.created_at).format("DD MMM YYYY")}`}
              </p>
            </div>
          </div>
          <div className={styles[`profile__user--login`]}>
            <p>{dataUser.login && `@${dataUser.login}`}</p>
          </div>
          <div
            className={
              theme === "light"
                ? styles[`profile__user--bio`]
                : styles[`profile__user--bio--dark`]
            }
          >
            <p>{dataUser.bio || "This profile has no bio"}</p>
          </div>
          <div
            className={
              theme === "light"
                ? styles[`profile__activities`]
                : styles[`profile__activities--dark`]
            }
          >
            <div className={styles[`profile__activity--detail`]}>
              <div
                className={
                  theme === "light"
                    ? styles[`activity__item`]
                    : styles[`activity__item--dark`]
                }
              >
                <span>Repos</span>
                <p>{dataUser.public_repos}</p>
              </div>
              <div
                className={
                  theme === "light"
                    ? styles[`activity__item`]
                    : styles[`activity__item--dark`]
                }
              >
                <span>Followers</span>
                <p>{dataUser.followers}</p>
              </div>
              <div
                className={
                  theme === "light"
                    ? styles[`activity__item`]
                    : styles[`activity__item--dark`]
                }
              >
                <span>Following</span>
                <p>{dataUser.following}</p>
              </div>
            </div>
          </div>
          <div className={styles[`profile__social`]}>
            <div
              className={
                theme === "light"
                  ? styles[`profile__social--item`]
                  : styles[`profile__social--item--dark`]
              }
            >
              <img src={addressIcon} alt="" />
              <span>{dataUser.location || "Not available"}</span>
            </div>
            <div
              className={
                theme === "light"
                  ? styles[`profile__social--item`]
                  : styles[`profile__social--item--dark`]
              }
            >
              <img src={linkIcon} alt="" />
              <span>{dataUser.html_url || "Not available"}</span>
            </div>
            <div
              className={
                theme === "light"
                  ? styles[`profile__social--item`]
                  : styles[`profile__social--item--dark`]
              }
            >
              <img src={twitterIcon} alt="" />
              <span>{dataUser.twitter_username || "Not available"}</span>
            </div>
            <div
              className={
                theme === "light"
                  ? styles[`profile__social--item`]
                  : styles[`profile__social--item--dark`]
              }
            >
              <img src={companyIcon} alt="" />
              <span>{dataUser.company || "Not available"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;

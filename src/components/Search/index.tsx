import React, { useState, useEffect, useContext } from "react";
import { Button, Input } from "antd";
import styled from "@emotion/styled";

import searchIcon from "../../assets/svg/searchIcon.svg";
import notFoundIcon from "../../assets/svg/x.svg";
import styles from "./styles.module.scss";
import { getInfoUser } from "../../apis/infoUser";
import { IInfoUserResponse } from "../../utils/types";
import { UserContext } from "../../context/UserContext";
import { ThemeContext } from "../../context/themeContext";

const SearchButton = styled(Button)`
  background: #0079ff;
  border-radius: 10px;
  height: auto;
  padding: 14px 28px;
  color: #fff;
  border: none;

  &:hover {
    color: #fff !important;
  }
`;

const SearchField = styled(Input)`
  height: 72px;
  background: #fefefe;
  box-shadow: 0px 16px 30px rgba(70, 96, 187, 0.2);
  border-radius: 15px;
  border: none;
  padding: 24px 10px !important;
`;

// eslint-disable-next-line react-refresh/only-export-components
export const initialInfoUser: IInfoUserResponse = {
  login: "",
  avatar_url: "",
  followers: 0,
  following: 0,
  created_at: "",
  bio: "",
  twitter_username: "",
  public_repos: 0,
  location: "",
  name: "",
  company: "",
  html_url: "",
};

const SearchInput = () => {
  const [text, setText] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { setDataUser } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    if (text.trim() !== "No results") {
      setName(text);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataResponse = await getInfoUser(name);
        setDataUser(dataResponse.data);
        setErrorMessage("");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          setErrorMessage("No results");
          setDataUser(initialInfoUser);
        }
        console.log(error);
      }
    };

    if (name) {
      fetchData();
    } else {
      setDataUser(initialInfoUser);
    }
  }, [name, setDataUser]);

  return (
    <div
      className={
        theme === "light"
          ? styles[`search__input`]
          : styles[`search__input--dark`]
      }
    >
      <SearchField
        size="large"
        placeholder="Search Github username..."
        prefix={
          <img
            className={styles[`search__input--icon`]}
            src={searchIcon}
            alt=""
            onClick={handleSearch}
          />
        }
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        className={theme === "light" ? "input__field" : "input__field--dark"}
        suffix={<SearchButton onClick={handleSearch}>Search</SearchButton>}
      />
      <p className={styles["error__message"]}>
        {errorMessage && (
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src={notFoundIcon} alt="" />
            {errorMessage}
          </div>
        )}
      </p>
    </div>
  );
};

export default SearchInput;

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import classes from "./profilePost.module.css";
import person from "../../../public/person.jpg";
import { BiDotsVerticalRounded } from "react-icons/bi";
import colors from "../../lib/color";

const ProfilePost = ({ key, book }) => {
  const [color, setColor] = useState("");
  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.person}>
        <div className={classes.personLeft}>
          <Image
            alt="profilPerson"
            src={person}
            width="45"
            height="45"
            className={classes.profilPerson}
          />
          <span>
            <h2>Seyit Yahya</h2>
            <h3>@seyityahya</h3>
          </span>
        </div>
        <div className={classes.personRight}>
          <p>{book.saat}</p>
          <BiDotsVerticalRounded />
        </div>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.profilePost}>
          <div
            style={{ border: `5px solid ${color}` }}
            className={classes.postImageContainer}
          >
            <Image
              src={book.resim}
              height="180"
              className={classes.bookImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePost;

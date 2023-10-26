import React, { useEffect, useState } from "react";
import classes from "./Profile.module.css";

const Profile = (props) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    const loadImage = async () => {
      try {
        const importedImage = await import(
          `../Pictures/ProfilePictures/${props.image}`
        );
        setImage(importedImage.default);
      } catch (error) {}
    };

    loadImage();
  }, [props.image]);

  return (
    <div className={classes.profileContainer}>
      <div>
        <img src={image} alt="Team-Member" />
      </div>
      <h2>{props.name}</h2>
      <h4>{props.profession}</h4>
    </div>
  );
};

export default Profile;

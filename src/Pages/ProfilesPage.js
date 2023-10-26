import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavTop from "../Components/NavTop";
import Nav from "../Components/Nav";
import team from "./../Pictures/UI/team.jpg";
import Footer from "./../Components/Footer";
import classes from "./Profilespage.module.css";
import UserContext from "../Context/UserContext";
import SkillBarConponent from "../Components/SkillBarComponent";

const ProfilesPage = (props) => {
  const ctx = useContext(UserContext);
  const { id } = useParams();
  const [user, setUser] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    for (let i = 0; i < ctx.length; i++) {
      if (ctx[i].id === Number(id)) {
        setUser(ctx[i]);
      }
    }

    const loadImage = async () => {
      try {
        const importedImage = await import(
          `./../Pictures/ProfilePictures/${user.image}`
        );
        setImage(importedImage.default);
      } catch (error) {}
    };
    loadImage();
  }, [id, ctx, user]);

  useEffect(() => {
    setTimeout(() => {
      props.scrollTo("pageTop");
    });
  }, [props]);

  return (
    <div id="pageTop">
      <NavTop page="profile" />
      <Nav page="profile" scrollTo={props.scrollTo} />
      <section className={classes.section}>
        <img className={classes.teamImage} src={team} alt="team profiles" />
      </section>

      {user && (
        <>
          <section className={classes.section}>
            <div className={classes.teamMember}>
              <img
                src={image}
                className={classes.teamMemberImage}
                alt="team Member"
              />
            </div>
            <div className={classes.teamMemberDetails}>
              <h1 className={classes.teamMemberHeader}>{user.proffesion}</h1>
              <h2
                className={
                  classes.teamMemberName
                }>{`${user.name} ${user.lastName}`}</h2>
              <p className={classes.teamMemberSummary}>{user.description}</p>
            </div>
          </section>
          <section className={`${classes.section} ${classes.biographySection}`}>
            <div className={classes.biography}>
              <h3 className={classes.biographyTitle}>Biography</h3>
              <p className={classes.biographyText}>{user.biography}</p>
            </div>
            <div className={classes.skillsBox}>
              <h2 className={classes.skillsHeader}>Professional Skills</h2>
              <SkillBarConponent skills={user.skills} />
            </div>
          </section>
        </>
      )}

      {!user && (
        <div className={classes.notFound}>
          <b className={classes.Oops}>Oops!</b>
          <p className={classes.notFoundText}>Sorry! Something went wrong</p>
          <p className={classes.notFoundText}>User Not Found</p>
          <p className={classes.notFoundText}>Please try again</p>
        </div>
      )}

      <Footer scrollTo={props.scrollTo} />
    </div>
  );
};

export default ProfilesPage;

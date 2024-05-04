import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProfilePic from "../static/17.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagraIcon from '@mui/icons-material/Instagram';
import TwitterXIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export const BannerBio = () => {

    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return(
        <>
        <section className="bio">
            <div className="bio-card">
                <img src={ProfilePic} alt="" className="bio-pic" width="100%" height="100%" />
                <h2 className="bio-name">Narayan</h2>
            </div>
            <div className="bio-details">
                <span>
                    <p data-aos="fade-left" data-aos-delay="100">
                        Web Developer
                        #PythonLover #BlackLover #WebDeveloper
                    </p>
                </span>
            </div>
        </section>
   <section className="social">
        <div className="social-cv">
            <div className="download">Download CV</div>
            <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=100014474054251"><FacebookIcon /></a>
                <a href=""><WhatsAppIcon /></a>
                <a href="https://www.instagram.com/n_1_r_6_y_0_n_2/"><InstagraIcon /></a>
                <a href=""><TwitterXIcon /></a>
                <a href=""><GitHubIcon /></a>
            </div>
        </div>
    </section>
        </>
    );
}
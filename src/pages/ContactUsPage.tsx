import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactUsPage = () => {
  return (
    <>
      <div className='about-us-wrapper-wrapper'>
        <div
          className='about-us-wrapper-img'
          style={{
            fontSize: "40px",
            fontStyle: "italic",
            opacity: "0.8",
            fontFamily: "Playfair Display",
            alignContent: "center",
          }}
        >
          Kontakt
        </div>
        <div className='about-us-wrapper-txt'>
          {/* <div>Epost: betsyy@live.se</div> */}
          <a
            target='_blank'
            href='mailto: betsyy@live.se'
            style={{ color: "#000", textDecoration: "none" }}
          >
            betsyy@live.se
          </a>
          <div>Mobile: +46 724455076</div>
          <div style={{ paddingTop: "10px" }}>
            <a
              href='https://www.instagram.com/eden.arkitekter/'
              target='_blanket'
            >
              <InstagramIcon color='action' />
            </a>
            {"   "}
            <a
              href='https://www.linkedin.com/in/betsy-kamali'
              target='_blanket'
            >
              <LinkedInIcon color='action' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUsPage;

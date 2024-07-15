import betsi from "../assets/betsi.jpg";
import { useDataStore } from "../store/useDataStore";

const AboutPage = () => {
  const { aboutUs } = useDataStore();
  return (
    <>
      <div className='about-us-wrapper-wrapper'>
        <div className='about-us-wrapper-img'>
          <img width='100%' src={betsi} />
        </div>
        <div className='about-us-wrapper-txt'>
          Välkommen till Eden Arkitekter! Mitt namn är Betsy Kamali, och jag är
          arkitekt samt sakkunnig av tillgänglighet, med en master i Landscape
          Architecture for Sustainable Urbanisation från SLU. Som arkitekt
          tycker jag att ett hem är den allra viktigaste platsen där människor
          vistas och vilar mest, där man känner sig bekväm och trivs att vara.
          Fasader och byggnadsstrukturer är också viktiga för att skapa en
          trygghetskänsla för besökare och förbipasserande. Därför är alltid
          mitt mål att rita bostäder med välplanerade och hållbara lösningar och
          former där alla trivs att vistas och röra sig. Som landskapsarkitekt
          betonar jag samspelet mellan natur, människor och byggnader. Naturen
          är en av de viktigaste delarna i människors liv, och att integrera mer
          grönt i byggnader kan bidra både till människors hälsa och till
          ekosystemen.
        </div>
      </div>
      {aboutUs.map((abUs) => (
        <div className='about-us-wrapper-wrapper' key={abUs.id}>
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
            {abUs.title}
          </div>
          <div className='about-us-wrapper-txt'>{abUs.descriptions}</div>
        </div>
      ))}
    </>
  );
};
export default AboutPage;

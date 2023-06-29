import "../styles/Font.css";

import "../styles/AboutUs.css";

function AboutUSComponent() {
  return (
    <div className="about-us-container">
      <div className="about-us-title">ՄԵՐ ՄԱՍԻՆ</div>
      <div className="about-us-row-container">
        <div className="news-image-container">
          <img
            src={require("../img/Rectangle 104 (1)ww.png")}
            alt="news"
            className="about-us-container-photo-left"
          />
          <img
            src={require("../img/Ellipse 2.png")}
            alt="ellipse"
            className="news-container-ellipse-left"
          />
        </div>
        <div className="about-us-text-container">
          <p>
            Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և
            ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
      <div className="about-us-row-container">
        <div className="about-us-text-container">
          <p>
            Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և
            ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="news-image-container">
          <img
            src={require("../img/Rectangle 105.png")}
            alt="news"
            className="about-us-container-photo"
          />
          <img
            src={require("../img/Ellipse 1.png")}
            alt="ellipse"
            className="news-container-ellipse"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUSComponent;

import React from "react";
import facebook from "../assets/images/icon-facebook.svg";
import youtube from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";
import instagram from "../assets/images/icon-instagram.svg";
import up from "../assets/images/icon-up.svg";
import down from "../assets/images/icon-down.svg";

function Layout2() {
  const data = [
    {
      id: 1,
      src: <img src={facebook} alt="Social" loading="lazy" />,
      l: "Page Views",
      no: "87",
      today: "3%",
      updown: true,
      up: <img src={up} alt="increased" />,
      down: <img src={down} alt="decreased" />,
    },
    {
      id: 2,
      src: <img src={facebook} alt="Social" loading="lazy" />,
      l: "Likes",
      no: "52",
      today: " 2%",
      updown: false,
      up: <img src={up} alt="increased" />,
      down: <img src={down} alt="decreased" />,
    },
    {
      id: 3,
      src: <img src={instagram} alt="Social" loading="lazy" />,
      l: "Likes",
      no: "5462",
      today: "2257%",
      updown: true,
      up: <img src={up} alt="increased" />,
      down: <img src={down} alt="decreased" />,
    },
    {
      id: 4,
      src: <img src={instagram} alt="Social" loading="lazy" />,
      l: "Profile Views",
      no: "52k",
      today: "1375%",
      updown: true,
      up: <img src={up} alt="increased" />,
      down: <img src={down} alt="decreased" />,
    },
    {
      id: 5,
      src: <img src={twitter} alt="Social" loading="lazy" />,
      l: " Retweets",
      no: "117",
      today: "303%",
      updown: true,
      up: <img src={up} alt="increased" />,
      down: <img src={down} alt="decreased" />,
    },
    {
      id: 6,
      src: <img src={twitter} alt="Social" loading="lazy" />,
      l: "Likes",
      no: "507",
      today: "533%",
      updown: true,
      up: <img src={up} alt="increased" />,
      down: <img src={down} alt="decreased" />,
    },
    {
      id: 7,
      src: <img src={youtube} alt="Social" loading="lazy" />,
      l: "Likes",
      no: "107",
      today: "19%",
      updown: false,
      up: <img src={up} alt="increased" />,
      down: <img src={down} alt="decreased" />,
    },
    {
      id: 8,
      src: <img src={youtube} alt="Social" loading="lazy" />,
      l: "Total Views",
      no: "1407",
      today: "12%",
      updown: false,
      up: <img src={up} alt="increased" />,
      down: <img src={down} alt="decreased" />,
    },
  ];

  return (
    <div className="Layout2">
      <h2>Overview - Today</h2>
      <container>
        {data.map((d) => {
          return (
            <div className="card" key={d.id}>
              <div className="upper">
                <h4>{d.l}</h4>
                {d.src}
              </div>
              <div className="bottom">
                <h5>{d.no}</h5>
                <div>
                  {d.updown ? d.up : d.down}
                  <h6
                    style={{
                      color: d.updown
                        ? "var(--clr-LimeGreen)"
                        : "var(--clr-BrightRed)",
                    }}
                  >
                    {d.today}
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
      </container>
    </div>
  );
}

export default Layout2;

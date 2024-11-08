/* eslint-disable jsx-a11y/alt-text */
import "./SkillTiles.css";
import skillSet from "../../Utils/SkillSet";

const SkillTiles = (props: any) => {
  const secs = [
     2, 3, 4, 5.2, 4.6, 5.7, 2.5, 3.5, 4.5, 5.5, 6.5, 2.3, 3.4, 4.8, 5.5,
  ];


  const handleRandom = (i:any) => {
    let ran = Math.ceil(Math.random() * secs.length-1);
    return ran;
  }

  return (
    <div id="skill" className="skill_tile_con">
      <main className="skill_con">
        <h4 className="header_style">WHAT I KNOW</h4>

        <div className="tile_container">
          {skillSet.map((data, i) => (
            <div className="cont" key={i}>
              <div
                className={`__box_cont press${i}`}
                style={{
                  animation: `press${i} ${
                    secs[handleRandom(i)]
                    // secs[Math.ceil(Math.random() * secs.length)]
                  }s infinite`,
                }}
              >
                <section className={"__effect"}>
                  <div>
                    <img src={require(`${data.image}`)}></img>
                  </div>
                </section>
              </div>
              {/* <span className="rating">Card</span> */}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SkillTiles;

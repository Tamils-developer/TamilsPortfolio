import "./About.css";
import { aboutBoxContent } from "../../Utils/PersonalInfo";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [eff, setEff] = useState() as any;
  const thisRef = useRef() as any;

  useEffect(() => {
    const el: any = document.querySelectorAll("._box_details") as any;
    setEff(el);
    console.log(el);
    el.forEach((data: HTMLElement) => {
      observer.observe(data);
    });
    return;
  }, []);

  const observer = new IntersectionObserver(
    (entries, observer) => {
      // console.log(entries)
      entries.forEach((entry) => {
        // if (entry.isIntersecting) {
        //   console.log(entry.target);
        //   entry.target.classList.remove("_view");
        //   observer.unobserve(entry.target);
        // }
        // // entry.target.classList.add("_view");
      });
    },
    {
      threshold: 1, // Trigger when 50% of the element is in the viewport
    }
  );

  return (
    <div id="about" className="about_cont">
      <main className="main_seg_t">
        <div className="_whatido _head"> What I Do</div>
        <div
          className="_box_con"
          style={{
            gridTemplateColumns: `repeat(${aboutBoxContent.length}, 1fr)`,
          }}
        >
          {aboutBoxContent.map((data: any, i: any) => (
            <section ref={thisRef} className="_box_details _box" key={i}>
              <span className="_do_icon _data">{data.icon}</span>
              <span className="_do_head _data">{data.name}</span>
              <span className="_do_desc _data">{data.desc}</span>
            </section>
          ))}
        </div>
      </main>
      <main className="main_seg_b">
        <div className="exp_con">
          <div className="_whatigot _head"> What I Got</div>
          <section className="exp_sec" ></section>
        </div>
      </main>
    </div>
  );
};

export default About;

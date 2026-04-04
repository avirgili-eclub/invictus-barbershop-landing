import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroCinematic() {
  const heroRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backY = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const frontY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.98, 0.82]);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    },
    { scope: heroRef }
  );

  return (
    <section id="inicio" ref={heroRef} className="hero-cinematic section-pad">
      <motion.div className="hero-layer hero-layer-back" style={{ y: backY }} aria-hidden="true">
        <img className="hero-bg-image" src="/images/hero-barber-bg.png" alt="" decoding="async" fetchPriority="high" />
      </motion.div>
      <motion.div className="hero-layer hero-layer-mid" style={{ y: midY }} aria-hidden="true" />
      <motion.div className="hero-layer hero-layer-front" style={{ y: frontY }} aria-hidden="true" />

      <motion.div className="container hero-grid hero-content" style={{ y: contentY, opacity: contentOpacity }}>
        <div className="hero-center-block">
          <p className="eyebrow hero-reveal">Barberia premium & formacion</p>
          <h1 className="display-title hero-reveal">
            <span className="hero-title-main">Precision, estilo</span>
            <span className="hero-title-accent">& presencia.</span>
          </h1>
          <p className="lead-copy hero-reveal">
            Vivi una experiencia premium en barberia masculina, con profesionales que cuidan cada detalle de tu
            imagen. Barberia premium y formacion profesional para barberos en Asuncion.
          </p>
          <div className="hero-actions hero-reveal">
            <a className="btn btn-primary hero-btn hero-btn-primary" href="#agenda">
              Agendar turno
            </a>
            <a className="btn btn-ghost hero-btn hero-btn-secondary" href="#servicios">
              Ver servicios
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

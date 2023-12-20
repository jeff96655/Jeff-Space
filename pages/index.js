import { useCallback, useEffect } from "react";
import Header from "../components/header";
import Typewriter from 'typewriter-effect';

const JeffSpace = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    window.open("https://t.me/jeff96655");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.location.href = "mailto:jeff649346@gmail.com?subject=Hello there!";
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open("https://chainforge.vercel.app");
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open("https://github.com/jeff96655/Chain-Forge");
  }, []);

  const onFrameButton4Click = useCallback(() => {
    window.open("https://oraclenet.vercel.app");
  }, []);

  const onFrameButton5Click = useCallback(() => {
    window.open("https://github.com/jeff96655/OracleNet");
  }, []);

  const onFrameButton6Click = useCallback(() => {
    window.open("https://apeverse.vercel.app");
  }, []);

  const onFrameButton7Click = useCallback(() => {
    window.open("https://github.com/jeff96655/Apeverse-NFT");
  }, []);

  const onFrameButton8Click = useCallback(() => {
    window.open("https://secureblendprotocol.vercel.app");
  }, []);

  const onFrameButton9Click = useCallback(() => {
    window.open("https://github.com/jeff96655/Secureblend-Protocol");
  }, []);

  const onFrameButton10Click = useCallback(() => {
    window.open("https://cryptospin.vercel.app");
  }, []);

  const onFrameButton11Click = useCallback(() => {
    window.open("https://github.com/jeff96655/Cryptospin");
  }, []);

  const onFrameButton12Click = useCallback(() => {
    window.open("https://demetazon.vercel.app");
  }, []);

  const onFrameButton13Click = useCallback(() => {
    window.open("https://github.com/jeff96655/Demetazon");
  }, []);

  const onFrameButton14Click = useCallback(() => {
    window.open("https://dogememe-one.vercel.app");
  }, []);

  const onFrameButton15Click = useCallback(() => {
    window.open("https://github.com/jeff96655/Dogememe");
  }, []);

  const onFrameButton16Click = useCallback(() => {
    window.open("https://demetazon-staking.vercel.app");
  }, []);

  const onFrameButton17Click = useCallback(() => {
    window.open("https://github.com/jeff96655/Demetazon-Staking");
  }, []);

  const onFrameButton18Click = useCallback(() => {
    window.open("https://cryptotrackerbot.vercel.app");
  }, []);

  const onFrameButton19Click = useCallback(() => {
    window.open("https://github.com/jeff96655/crypto-tracker-bot");
  }, []);

  const onFrameButton20Click = useCallback(() => {
    window.open("https://memevibescoin.vercel.app");
  }, []);

  const onFrameButton21Click = useCallback(() => {
    window.open("https://github.com/jeff96655/Meme-Vibes-Coin");
  }, []);

  return (
    <div className="relative [background:linear-gradient(rgba(249,_1,_239,_0.22),_rgba(249,_1,_239,_0.22)),_#fff] w-full h-[6545px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-center text-21xl text-white font-inika md:h-[9550px]">
      <img
        className="absolute my-0 mx-[!important] top-[664px] left-[0px] w-[1732px] h-[654px] object-cover z-[0] lg:w-[1200px] md:w-[500px]"
        alt=""
        src="/neon-abstract-waves@2x.png"
      />
      <div className="my-0 mx-[!important] absolute top-[153px] left-[0px] w-[852px] flex flex-row items-center justify-end gap-[571px] z-[1] text-black font-inter lg:w-[400px] md:w-[15px]">
        <div className="relative w-px h-[67px] overflow-hidden shrink-0" />
        <div className="relative w-[394px] h-[538px]">
          <div className="absolute top-[0px] left-[50px] font-black inline-block w-[300px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.5)]">
          <Typewriter
  options={{
    strings: ['Jeff’s Space'],
    autoStart: true,
    loop: true,
  }}
/>
          </div>
          <img
            className="absolute top-[123px] left-[0px] w-[394px] h-[415px] object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            alt=""
            src="/male-programmer-writing-program-code@2x.png"
            data-animate-on-scroll
          />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[792px] left-[0px] w-[1118px] flex flex-row items-center justify-end gap-[343px] z-[2] text-6xl text-black font-inknut-antiqua lg:w-[1000px] md:w-[400px]">
        <div className="relative w-[21px] h-[68px] overflow-hidden shrink-0" />
        <b
          className="relative inline-block w-[869px] h-[398px] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-mini md:w-[380px]"
          data-animate-on-scroll
        >
          Hello there! I'm Jeff, an experienced frontend developer with a
          passion for crafting immersive and user-friendly web experiences. I
          have a strong foundation in advanced frontend frameworks like React
          and Next.js, coupled with expertise in JavaScript and TypeScript, I
          bring a blend of creativity and technical prowess to every web3
          project.
        </b>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1339px] left-[0px] w-[425px] hidden flex-row items-center justify-end gap-[102px] z-[3] text-left text-lg md:flex md:w-[400px] md:flex-col md:gap-[0px] md:pl-[25px] md:box-border sm:pl-[25px] sm:box-border">
        <div className="relative w-[27px] h-16 overflow-hidden shrink-0" />
        <div className="relative w-[395px] h-[423px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#022bff,_rgba(255,_0,_214,_0.91))] shadow-[0px_4px_77px_rgba(0,_0,_0,_0.44)] w-[395px] h-[423px] overflow-hidden">
            <div
              className="absolute top-[115px] left-[9px] rounded-3xs [background:linear-gradient(180deg,_#168594,_#000)] shadow-[0px_0px_0px_3px_#fdf307] w-[377px] h-11 overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              data-animate-on-scroll
            >
              <b className="absolute top-[13px] left-[10px] inline-block w-[116px] h-[31px] [text-shadow:0px_4px_4px_#000]">
                Frameworks:
              </b>
              <img
                className="absolute top-[9px] left-[189px] rounded-xl w-[30px] h-[30px] overflow-hidden object-cover"
                alt=""
                src="/frame-52@2x.png"
              />
              <img
                className="absolute top-[9px] left-[234px] w-[30px] h-[30px] overflow-hidden object-cover"
                alt=""
                src="/frame-53@2x.png"
              />
              <img
                className="absolute top-[0px] left-[287px] w-[90px] h-10 overflow-hidden object-cover"
                alt=""
                src="/frame-54@2x.png"
              />
              <img
                className="absolute top-[5px] left-[131px] rounded-31xl w-[35px] h-[35px] overflow-hidden object-cover"
                alt=""
                src="/frame-51@2x.png"
              />
            </div>
            <div
              className="absolute top-[217px] left-[9px] rounded-3xs [background:linear-gradient(180deg,_#168594,_#000)] shadow-[0px_0px_0px_3px_#fdf307] w-[377px] h-11 overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              data-animate-on-scroll
            >
              <b className="absolute top-[11px] left-[11px] inline-block w-[100px] h-[22px] [text-shadow:0px_4px_4px_#000]">
                Languages:
              </b>
              <img
                className="absolute top-[7px] left-[220px] rounded-8xs w-[30px] h-[30px] overflow-hidden object-cover"
                alt=""
                src="/frame-531@2x.png"
              />
              <img
                className="absolute top-[7px] left-[294px] rounded-8xs w-[30px] h-[30px] overflow-hidden object-cover"
                alt=""
                src="/frame-541@2x.png"
              />
              <img
                className="absolute top-[7px] left-[145px] rounded-8xs w-[30px] h-[30px] overflow-hidden object-cover"
                alt=""
                src="/frame-511@2x.png"
              />
            </div>
            <div
              className="absolute top-[319px] left-[9px] rounded-3xs [background:linear-gradient(180deg,_#168594,_#000)] shadow-[0px_0px_0px_3px_#fdf307] w-[377px] h-11 overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              data-animate-on-scroll
            >
              <b className="absolute top-[11px] left-[11px] inline-block w-[100px] h-[22px] [text-shadow:0px_4px_4px_#000]">
                UI Design:
              </b>
              <div className="absolute top-[15px] left-[118px] text-[14px] inline-block w-[248px] h-[22px] [text-shadow:0px_4px_4px_#000]">
                I can turn any figma design to code
              </div>
            </div>
          </div>
          <div className="absolute top-[39px] left-[125px] rounded-3xs [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.01),_rgba(0,_0,_0,_0))] shadow-[0px_0px_0px_3px_#fdf307] w-[146px] h-[31px] overflow-hidden text-center text-xl font-inknut-antiqua">
            <div className="absolute top-[-10px] left-[26px] inline-block w-[93px] h-[51px] [text-shadow:0px_4px_4px_#000]">
              Skills
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1339px] left-[357px] w-[1371px] flex flex-row items-center justify-start gap-[694px] z-[4] text-left text-6xl lg:w-[1200px] lg:gap-[800px] lg:items-center lg:justify-center lg:pl-0 lg:pr-[550px] lg:box-border md:hidden">
        <div className="relative w-[625px] h-[561px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#022bff,_rgba(255,_0,_214,_0.91))] shadow-[0px_4px_77px_rgba(0,_0,_0,_0.44)] w-[625px] h-[561px] overflow-hidden">
            <div
              className="absolute top-[154px] left-[24px] rounded-xl [background:linear-gradient(180deg,_#168594,_#000)] shadow-[0px_0px_0px_3px_#fdf307] w-[573px] h-[58px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              data-animate-on-scroll
            >
              <b className="absolute top-[13px] left-[11px] inline-block w-[191px] h-[31px] [text-shadow:0px_4px_4px_#000]">
                Frameworks:
              </b>
              <img
                className="absolute top-[5px] left-[279px] rounded-xl w-12 h-12 overflow-hidden object-cover"
                alt=""
                src="/frame-521@2x.png"
              />
              <img
                className="absolute top-[5px] left-[355px] w-[55px] h-12 overflow-hidden object-cover"
                alt=""
                src="/frame-532@2x.png"
              />
              <img
                className="absolute top-[9px] left-[439px] w-[129px] h-10 overflow-hidden object-cover"
                alt=""
                src="/frame-542@2x.png"
              />
              <img
                className="absolute top-[4px] left-[187px] rounded-31xl w-[50px] h-[50px] overflow-hidden object-cover"
                alt=""
                src="/frame-512@2x.png"
              />
            </div>
            <div
              className="absolute top-[299px] left-[24px] rounded-xl [background:linear-gradient(180deg,_#168594,_#000)] shadow-[0px_0px_0px_3px_#fdf307] w-[573px] h-[58px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              data-animate-on-scroll
            >
              <b className="absolute top-[13px] left-[11px] inline-block w-[152px] h-[31px] [text-shadow:0px_4px_4px_#000]">
                Languages:
              </b>
              <img
                className="absolute top-[4px] left-[327px] rounded-3xs w-[50px] h-[50px] overflow-hidden object-cover"
                alt=""
                src="/frame-533@2x.png"
              />
              <img
                className="absolute top-[4px] left-[445px] rounded-3xs w-[50px] h-[50px] overflow-hidden object-cover"
                alt=""
                src="/frame-543@2x.png"
              />
              <img
                className="absolute top-[4px] left-[209px] rounded-3xs w-[50px] h-[50px] overflow-hidden object-cover"
                alt=""
                src="/frame-513@2x.png"
              />
            </div>
            <div
              className="absolute top-[444px] left-[24px] rounded-xl [background:linear-gradient(180deg,_#168594,_#000)] shadow-[0px_0px_0px_3px_#fdf307] w-[573px] h-[58px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              data-animate-on-scroll
            >
              <b className="absolute top-[13px] left-[11px] inline-block w-[152px] h-[31px] [text-shadow:0px_4px_4px_#000]">
                UI Sesign:
              </b>
              <div className="absolute top-[20px] left-[135px] text-lg inline-block w-[447px] h-[31px] [text-shadow:0px_4px_4px_#000]">
                I can turn any figma design to fully responsive code
              </div>
            </div>
          </div>
          <div className="absolute top-[46px] left-[159px] rounded-xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.01),_rgba(0,_0,_0,_0))] shadow-[0px_0px_0px_3px_#fdf307] w-[289px] h-[66px] overflow-hidden text-center text-[30px] font-inknut-antiqua">
            <div className="absolute top-[-10px] left-[98px] inline-block w-[93px] h-[77px] [text-shadow:0px_4px_4px_#000]">
              Skills
            </div>
          </div>
        </div>
        <div className="relative w-[30px] h-[88px] overflow-hidden shrink-0" />
      </div>
      <div className="my-0 mx-[!important] absolute top-[1921px] left-[7px] w-[373px] flex flex-row items-start justify-center pt-[70px] pb-0 pr-0 pl-[550px] box-border gap-[130px] z-[5] lg:pl-[450px] lg:box-border md:items-start md:justify-end md:pl-0 md:pt-[70px] md:pr-5 md:box-border">
        <div className="relative w-[55px] h-11 overflow-hidden shrink-0" />
        <div
          className="relative rounded-xl [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_4px_3px_rgba(0,_0,_0,_0.5)] w-[315px] h-[76px] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <b className="absolute top-[7px] left-[49px] inline-block w-[218px] h-[31px] [text-shadow:0px_4px_4px_rgba(255,_255,_255,_0.5)]">
            Projects
          </b>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[5218px] left-[7px] w-[1322px] flex flex-row items-start justify-center gap-[300px] z-[6] text-lg lg:w-[1100px] lg:gap-[220px] md:flex-col md:gap-[100px] md:pl-[7px] md:pt-[2950px] md:box-border">
        <div className="relative w-[395px] h-[444px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#101027,_#000)] shadow-[1px_4px_0px_3px_#06f901] w-[395px] h-[172px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[11px] left-[38px] inline-block w-[336px] h-[137px] [text-shadow:0px_4px_4px_rgba(6,_249,_1,_0.5)]">
              <p className="m-0">
                <b>Passion for Innovation</b>
              </p>
              <p className="m-0">
                <b>&nbsp;</b>
              </p>
              <p className="m-0">
                I thrive on staying up-to-date with the latest technologies,
                ensuring that my projects are built on the cutting edge.
              </p>
            </div>
          </div>
          <div
            className="absolute top-[272px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#101027,_#000)] shadow-[1px_4px_0px_3px_#fdf307] w-[395px] h-[172px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[11px] left-[38px] inline-block w-[336px] h-[137px] [text-shadow:0px_4px_4px_rgba(253,_243,_7,_0.5)]">
              <p className="m-0">
                <b>User-Centric Design</b>
              </p>
              <p className="m-0">
                <b>&nbsp;</b>
              </p>
              <p className="m-0">
                {" "}
                I believe in creating not just visually appealing, but highly
                functional and user-centric designs that enhance the overall
                user experience.
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative rounded-xl [background:linear-gradient(180deg,_#101027,_#000)] shadow-[1px_4px_0px_3px_#ff0000] w-[395px] h-[172px] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[22px] left-[30px] inline-block w-[336px] h-[137px] [text-shadow:0px_4px_4px_rgba(255,_0,_0,_0.5)]">
            <p className="m-0">
              <b>Collaborative Spirit</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <p className="m-0">
              I enjoy collaborating with cross-functional teams, bringing a
              positive and proactive attitude to every project.
            </p>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[5933px] left-[0px] w-[1052px] flex flex-row items-center justify-end gap-[237px] z-[7] text-6xl text-black font-inknut-antiqua lg:w-[950px] md:w-[395px] md:pt-[3180px] md:box-border">
        <div className="relative w-5 h-[73px] overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[760px] h-[230px] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.5)] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-mini md:w-[380px]"
          data-animate-on-scroll
        >
          I'm always open to new opportunities and collaborations. Whether you
          have a project in mind or just want to chat about the latest in Web
          development, feel free to contact me.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[6515px] left-[4px] flex flex-row items-end justify-start gap-[5px] z-[8] text-smi text-black md:pt-[3000px] md:box-border">
        <img
          className="relative w-[15px] h-[15px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-106@2x.png"
        />
        <b className="relative md:text-smi md:w-[100px]">Copy Right 2024</b>
      </div>
      <div className="my-0 mx-[!important] absolute top-[6264px] left-[0px] w-[710px] flex flex-row items-end justify-end gap-[498px] z-[9] lg:w-[620px] md:w-[260px] md:pt-[3100px] md:box-border">
        <div className="relative w-[50px] h-[25px] overflow-hidden shrink-0" />
        <div className="flex flex-row items-start justify-start gap-[39px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[50px] h-[50px] overflow-hidden shrink-0 bg-[url('/frame-103@3x.png')] bg-cover bg-no-repeat bg-[top] [&.animate]:animate-[1s_ease_0s_infinite_normal_forwards_pulsate] opacity-[1]"
            onClick={onFrameButtonClick}
            data-animate-on-scroll
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[50px] h-[50px] overflow-hidden shrink-0 bg-[url('/frame-1031@3x.png')] bg-cover bg-no-repeat bg-[top] [&.animate]:animate-[1s_ease_0s_infinite_normal_forwards_pulsate] opacity-[1]"
            onClick={onFrameButton1Click}
            data-animate-on-scroll
          />
        </div>
      </div>
      <div className="absolute my-0 mx-[!important] top-[6432px] left-[60.5px] w-[13px] h-3.5 overflow-hidden shrink-0 z-[10]" />
      <div className="my-0 mx-[!important] absolute top-[2222px] left-[7px] w-[500px] flex flex-row items-center justify-end gap-[130px] z-[11] text-xl font-inknut-antiqua lg:w-[450px] lg:gap-[0px] md:w-[405px]">
        <div className="relative w-0.5 h-[2009px] overflow-hidden shrink-0" />
        <div className="relative w-[395.5px] h-[2829px]">
          <div
            className="absolute top-[2348px] left-[0.5px] w-[395px] h-[481px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#8f00ff,_#168594)] shadow-[0px_4px_77px_rgba(0,_0,_0,_0.44)] w-[395px] h-[481px] overflow-hidden">
              <div className="absolute top-[12px] left-[87px] font-black [text-shadow:0px_4px_4px_#000]">
                ChainForge Oracle
              </div>
              <div className="absolute top-[311px] left-[21px] font-medium inline-block w-[353px] [text-shadow:0px_4px_4px_#000]">
                Built with Next.js, JavaScript and Tailwind CSS
              </div>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[432px] left-[15px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.5)] w-[116px] h-[25px] overflow-hidden"
                onClick={onFrameButton2Click}
              >
                <b className="absolute top-[0px] left-[17px] text-lg font-inika text-white text-center">
                  Web Link
                </b>
              </button>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[432px] left-[242px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.5)] w-[133px] h-[25px] overflow-hidden"
                onClick={onFrameButton3Click}
              >
                <b className="absolute top-[0px] left-[18px] text-lg font-inika text-white text-center">
                  Github Link
                </b>
              </button>
            </div>
            <img
              className="absolute top-[68px] left-[1px] rounded-xl w-[394px] h-[232px] overflow-hidden object-cover"
              alt=""
              src="/frame-111@2x.png"
            />
          </div>
          <div
            className="absolute top-[587px] left-[0.5px] rounded-xl [background:linear-gradient(180deg,_#8f00ff,_#168594)] shadow-[0px_4px_77px_rgba(0,_0,_0,_0.44)] w-[395px] h-[481px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[68px] left-[1px] rounded-3xs w-[394px] h-[232px] overflow-hidden object-cover"
              alt=""
              src="/frame-49@2x.png"
            />
            <div className="absolute top-[307px] left-[30px] font-medium inline-block w-[335px] h-9 [text-shadow:0px_4px_4px_#000]">
              Built with Next.js, JavaScript and Tailwind CSS
            </div>
            <div className="absolute top-[10px] left-[88px] font-black inline-block w-[220px] h-[51px] [text-shadow:0px_4px_4px_#000]">
              OracleNet Lume
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[13px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.66)] w-[116px] h-[25px] overflow-hidden"
              onClick={onFrameButton4Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[84px] h-[31px]">
                Web Link
              </b>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[241px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.5)] w-[133px] h-[25px] overflow-hidden"
              onClick={onFrameButton5Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[113px] h-[31px]">
                Github Link
              </b>
            </button>
          </div>
          <div
            className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#8f00ff,_#168594)] shadow-[0px_4px_77px_rgba(0,_0,_0,_0.44)] w-[395px] h-[481px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[68px] left-[1px] rounded-3xs w-[394px] h-[232px] overflow-hidden object-cover"
              alt=""
              src="/frame-491@2x.png"
            />
            <div className="absolute top-[307px] left-[30px] font-medium inline-block w-[335px] h-9 [text-shadow:0px_4px_4px_#000]">
              Built with Next.js, JavaScript and Tailwind CSS
            </div>
            <div className="absolute top-[10px] left-[88px] font-black inline-block w-[220px] h-[51px] [text-shadow:0px_4px_4px_#000]">
              ApeVerse NFT
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[13px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.66)] w-[116px] h-[25px] overflow-hidden"
              onClick={onFrameButton6Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[84px] h-[31px]">
                Web Link
              </b>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[241px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.5)] w-[133px] h-[25px] overflow-hidden"
              onClick={onFrameButton7Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[113px] h-[31px]">
                Github Link
              </b>
            </button>
          </div>
          <div
            className="absolute top-[1174px] left-[0.5px] rounded-xl [background:linear-gradient(180deg,_#8f00ff,_#168594)] shadow-[0px_4px_77px_rgba(0,_0,_0,_0.44)] w-[395px] h-[481px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[68px] left-[1px] rounded-3xs w-[394px] h-[232px] overflow-hidden object-cover"
              alt=""
              src="/frame-492@2x.png"
            />
            <div className="absolute top-[307px] left-[30px] font-medium inline-block w-[335px] h-9 [text-shadow:0px_4px_4px_#000]">
              Built with Next.js, JavaScript and Tailwind CSS
            </div>
            <div className="absolute top-[10px] left-[57px] font-black inline-block w-[268px] h-[51px] [text-shadow:0px_4px_4px_#000]">
              Secureblend Protocol
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[13px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.66)] w-[116px] h-[25px] overflow-hidden"
              onClick={onFrameButton8Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[84px] h-[31px]">
                Web Link
              </b>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[241px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.5)] w-[133px] h-[25px] overflow-hidden"
              onClick={onFrameButton9Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[113px] h-[31px]">
                Github Link
              </b>
            </button>
          </div>
          <div
            className="absolute top-[1761px] left-[0.5px] rounded-xl [background:linear-gradient(180deg,_#8f00ff,_#168594)] shadow-[0px_4px_77px_rgba(0,_0,_0,_0.44)] w-[395px] h-[481px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[68px] left-[1px] rounded-3xs w-[394px] h-[232px] overflow-hidden object-cover"
              alt=""
              src="/frame-493@2x.png"
            />
            <div className="absolute top-[307px] left-[30px] font-medium inline-block w-[335px] h-9 [text-shadow:0px_4px_4px_#000]">
              Built with Next.js, JavaScript and Tailwind CSS
            </div>
            <div className="absolute top-[10px] left-[88px] font-black inline-block w-[220px] h-[51px] [text-shadow:0px_4px_4px_#000]">
              CryptoSpin Casino
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[13px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.66)] w-[116px] h-[25px] overflow-hidden"
              onClick={onFrameButton10Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[84px] h-[31px]">
                Web Link
              </b>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[241px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.5)] w-[133px] h-[25px] overflow-hidden"
              onClick={onFrameButton11Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[113px] h-[31px]">
                Github Link
              </b>
            </button>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[5824px] left-[0px] w-[842px] flex flex-row items-start justify-end gap-[486px] z-[12] text-left text-black font-inter lg:w-[750px] lg:gap-[0px] md:w-[355px] md:pt-[3200px] md:box-border">
        <div className="relative w-[27px] h-6 overflow-hidden shrink-0" />
        <div
          className="relative font-black [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.5)] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          Let's Connect!
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2222px] left-[824px] w-[904px] flex flex-row items-center justify-start gap-[300px] z-[13] text-xl font-inknut-antiqua lg:w-0 lg:gap-[300px] lg:items-center lg:justify-center lg:pl-0 lg:pr-0 lg:box-border md:w-0 md:gap-[1608px] md:pt-[2940px] md:box-border">
        <div className="relative w-[396px] h-[2829px]">
          <div
            className="absolute top-[0px] left-[0px] w-[395px] h-[481px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#8f00ff,_#168594)] shadow-[0px_4px_77px_rgba(0,_0,_0,_0.44)] w-[395px] h-[481px] overflow-hidden">
              <div className="absolute top-[12px] left-[55px] font-black [text-shadow:0px_4px_4px_#000]">
                Demetazon NFT Market
              </div>
              <div className="absolute top-[311px] left-[21px] font-medium inline-block w-[353px] [text-shadow:0px_4px_4px_#000]">
                Built with Next.js, JavaScript and Tailwind CSS
              </div>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[432px] left-[15px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.5)] w-[116px] h-[25px] overflow-hidden"
                onClick={onFrameButton12Click}
              >
                <b className="absolute top-[0px] left-[17px] text-lg font-inika text-white text-center">
                  Web Link
                </b>
              </button>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[432px] left-[242px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.5)] w-[133px] h-[25px] overflow-hidden"
                onClick={onFrameButton13Click}
              >
                <b className="absolute top-[0px] left-[18px] text-lg font-inika text-white text-center">
                  Github Link
                </b>
              </button>
            </div>
            <img
              className="absolute top-[68px] left-[1px] rounded-xl w-[394px] h-[232px] overflow-hidden object-cover"
              alt=""
              src="/frame-1111@2x.png"
            />
          </div>
          <div
            className="absolute top-[587px] left-[0.5px] rounded-xl [background:linear-gradient(180deg,_#8f00ff,_#168594)] shadow-[0px_4px_77px_rgba(0,_0,_0,_0.44)] w-[395px] h-[481px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[68px] left-[1px] rounded-3xs w-[394px] h-[232px] overflow-hidden object-cover"
              alt=""
              src="/frame-494@2x.png"
            />
            <div className="absolute top-[307px] left-[30px] font-medium inline-block w-[335px] h-9 [text-shadow:0px_4px_4px_#000]">
              Built with Next.js, JavaScript and Tailwind CSS
            </div>
            <div className="absolute top-[10px] left-[88px] font-black inline-block w-[220px] h-[51px] [text-shadow:0px_4px_4px_#000]">
              DogeMeme
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[13px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.66)] w-[116px] h-[25px] overflow-hidden"
              onClick={onFrameButton14Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[84px] h-[31px]">
                Web Link
              </b>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[241px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.5)] w-[133px] h-[25px] overflow-hidden"
              onClick={onFrameButton15Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[113px] h-[31px]">
                Github Link
              </b>
            </button>
          </div>
          <div
            className="absolute top-[1174px] left-[0.5px] rounded-xl [background:linear-gradient(180deg,_#8f00ff,_#168594)] shadow-[0px_4px_77px_rgba(0,_0,_0,_0.44)] w-[395px] h-[481px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[68px] left-[1px] rounded-3xs w-[394px] h-[232px] overflow-hidden object-cover"
              alt=""
              src="/frame-495@2x.png"
            />
            <div className="absolute top-[307px] left-[30px] font-medium inline-block w-[335px] h-9 [text-shadow:0px_4px_4px_#000]">
              Built with Next.js, JavaScript and Tailwind CSS
            </div>
            <div className="absolute top-[10px] left-[80px] font-black inline-block w-[235px] h-[51px] [text-shadow:0px_4px_4px_#000]">
              Demetazon Staking
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[13px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.66)] w-[116px] h-[25px] overflow-hidden"
              onClick={onFrameButton16Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[84px] h-[31px]">
                Web Link
              </b>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[241px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.5)] w-[133px] h-[25px] overflow-hidden"
              onClick={onFrameButton17Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[113px] h-[31px]">
                Github Link
              </b>
            </button>
          </div>
          <div
            className="absolute top-[1761px] left-[0.5px] rounded-xl [background:linear-gradient(180deg,_#8f00ff,_#168594)] shadow-[0px_4px_77px_rgba(0,_0,_0,_0.44)] w-[395px] h-[481px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[68px] left-[1px] rounded-3xs w-[394px] h-[232px] overflow-hidden object-cover"
              alt=""
              src="/frame-496@2x.png"
            />
            <div className="absolute top-[307px] left-[30px] font-medium inline-block w-[335px] h-9 [text-shadow:0px_4px_4px_#000]">
              Built with Next.js, JavaScript and Tailwind CSS
            </div>
            <div className="absolute top-[10px] left-[79.5px] font-black inline-block w-[241px] h-[51px] [text-shadow:0px_4px_4px_#000]">
              Crypto Tracker Bot
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[13px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.66)] w-[116px] h-[25px] overflow-hidden"
              onClick={onFrameButton18Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[84px] h-[31px]">
                Web Link
              </b>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[241px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.5)] w-[133px] h-[25px] overflow-hidden"
              onClick={onFrameButton19Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[113px] h-[31px]">
                Github Link
              </b>
            </button>
          </div>
          <div
            className="absolute top-[2348px] left-[1px] rounded-xl [background:linear-gradient(180deg,_#8f00ff,_#168594)] shadow-[0px_4px_77px_rgba(0,_0,_0,_0.44)] w-[395px] h-[481px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[68px] left-[1px] rounded-3xs w-[394px] h-[232px] overflow-hidden object-cover"
              alt=""
              src="/frame-497@2x.png"
            />
            <div className="absolute top-[307px] left-[30px] font-medium inline-block w-[335px] h-9 [text-shadow:0px_4px_4px_#000]">
              Built with Next.js, JavaScript and Tailwind CSS
            </div>
            <div className="absolute top-[10px] left-[80px] font-black inline-block w-[235px] h-[51px] [text-shadow:0px_4px_4px_#000]">
              MemeVibes
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[13px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.66)] w-[116px] h-[25px] overflow-hidden"
              onClick={onFrameButton20Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[84px] h-[31px]">
                Web Link
              </b>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[433px] left-[241px] rounded-3xs [background:linear-gradient(180deg,_#101027,_#000)] shadow-[2px_4px_10px_3px_rgba(0,_0,_0,_0.5)] w-[133px] h-[25px] overflow-hidden"
              onClick={onFrameButton21Click}
            >
              <b className="absolute top-[0px] left-[10px] text-lg inline-block font-inika text-white text-center w-[113px] h-[31px]">
                Github Link
              </b>
            </button>
          </div>
        </div>
        <div className="relative w-2.5 h-[2141px] overflow-hidden shrink-0" />
      </div>
      <Header />
    </div>
  );
};

export default JeffSpace;

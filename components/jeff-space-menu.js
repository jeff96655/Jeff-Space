import { useCallback, useEffect } from "react";

const JeffSpaceMenu = ({ onClose }) => {
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
    window.open("https://t.me/jeff787898");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.location.href = "mailto:jeff649346@gmail.com?subject=Hello there!";
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open("https://github.com/jeff96655");
  }, []);

  return (
    <div
      className="rounded-t-none rounded-br-3xs rounded-bl-none bg-gray [backdrop-filter:blur(30px)] w-[270px] h-[313px] overflow-hidden [&.animate]:animate-[2s_ease_0s_1_alternate_forwards_slide-in-left] opacity-[0] max-w-full max-h-full"
      data-animate-on-scroll
    >
      <div
        className="absolute top-[12px] left-[225px] w-[32.6px] h-7 cursor-pointer"
        onClick={onClose}
      >
        <div className="absolute top-[25.7px] left-[0px] rounded-8xs bg-black w-10 h-[5px] overflow-hidden [transform:_rotate(-40deg)] [transform-origin:0_0]" />
        <div className="absolute top-[0px] left-[1.9px] rounded-8xs bg-black w-10 h-[5px] overflow-hidden [transform:_rotate(40deg)] [transform-origin:0_0]" />
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[74px] left-[110px] w-[50px] h-[50px] overflow-hidden bg-[url('/frame-103@3x.png')] bg-cover bg-no-repeat bg-[top] [&.animate]:animate-[1s_ease_0s_infinite_normal_forwards_pulsate] opacity-[1]"
        onClick={onFrameButtonClick}
        data-animate-on-scroll
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[156px] left-[110px] w-[50px] h-[50px] overflow-hidden bg-[url('/frame-1031@3x.png')] bg-cover bg-no-repeat bg-[top] [&.animate]:animate-[1s_ease_0s_infinite_normal_forwards_pulsate] opacity-[1]"
        onClick={onFrameButton1Click}
        data-animate-on-scroll
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[238px] left-[110px] w-[50px] h-[50px] overflow-hidden bg-[url('/frame-104@3x.png')] bg-cover bg-no-repeat bg-[top] [&.animate]:animate-[1s_ease_0s_infinite_normal_forwards_pulsate] opacity-[1]"
        onClick={onFrameButton2Click}
        data-animate-on-scroll
      />
    </div>
  );
};

export default JeffSpaceMenu;

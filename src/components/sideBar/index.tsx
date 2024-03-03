import { useEffect, useState } from "react";
import { ESection } from "../../interfaces";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";

interface ISideBar {
  isShow?: boolean;
}

const SideBar = ({ isShow }: ISideBar) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState<ESection>(
    ESection.About
  );
  const handleOnClickSideBar = (section: ESection) => () => {
    setCurrentSection(section);
    navigate(`#${section}`);
  };

  useEffect(() => {
    console.log(
      decodeURI(location.hash).replace("#", "") === ESection.MyProject
    );
  }, [location]);

  return (
    <div
      className={clsx(
        "xl:w-52 absolute left-10 flex flex-col gap-8 side-bar",
        isShow && "side-bar--active"
      )}
    >
      <button
        className={clsx(
          "text-white font-semibold text-lg text-left normal-case",
          currentSection === ESection.About &&
            "side-bar__btn side-bar__btn--active"
        )}
        onClick={handleOnClickSideBar(ESection.About)}
      >
        {ESection.About}
      </button>
      <button
        className={clsx(
          "text-white font-semibold text-lg text-left normal-case",
          currentSection === ESection.MyProject &&
            "side-bar__btn side-bar__btn--active"
        )}
        onClick={handleOnClickSideBar(ESection.MyProject)}
      >
        {ESection.MyProject}
      </button>
      <button
        className={clsx(
          "text-white font-semibold text-lg text-left normal-case",
          currentSection === ESection.Contact &&
            "side-bar__btn side-bar__btn--active"
        )}
        onClick={handleOnClickSideBar(ESection.Contact)}
      >
        {ESection.Contact}
      </button>
    </div>
  );
};

export default SideBar;

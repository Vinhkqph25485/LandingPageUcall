import { useMediaQuery } from "react-responsive";
import Ulead_Mobile from "./sodocallbotdoc.svg";
import Ulead_Desktop from "./sodocallbot.svg";
export const ProductDiagram = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const diagram = {
    mobile: Ulead_Mobile,
    desktop: Ulead_Desktop,
  };
  return (
    <div>
      <div
        className="w-full flex flex-col items-center justify-center"
        style={{ marginTop: "-128px", alignSelf: "center" }}
      >
        <div className="w-[1200px] w-100">
          {isMobile && <img src={diagram.mobile} width="100%" />}
          {!isMobile && <img src={diagram.desktop} width="100%" />}
        </div>
      </div>
    </div>
  );
};

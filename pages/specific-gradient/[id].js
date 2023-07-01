import { useEffect, useState, useRef } from "react";

import s from "./SpecificGradient.module.css";
import { Button } from "../../components/commons";
import { SPECIFIC_GRADIENT_CONST } from "../../constants";
import utils from "../../utils/utils";

const Specific = ({ params }) => {
  const ref = useRef();
  const [colorSet, setColorSet] = useState([]);
  const { convertColorsToStr, _export } = utils;
  const { gradients } = SPECIFIC_GRADIENT_CONST;
  const { id } = params;

  useEffect(() => {
    const selectedArray = gradients.find((item) =>
      item.find((elem) => elem.id == id)
    );
    if (selectedArray) setColorSet(selectedArray[0].colors);
  }, [id]);

  return (
    <>
      <div
        ref={ref}
        className={s.specificCard}
        style={{
          backgroundImage: convertColorsToStr(colorSet),
          backgroundColor: colorSet[0]?.mainColor,
        }}
      ></div>
      <Button
        title="Download"
        className={s.downloadBtn}
        onClick={() => _export(ref, "img", "my-gradient")}
      />
    </>
  );
};

export default Specific;

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}

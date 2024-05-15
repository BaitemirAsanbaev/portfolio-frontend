import CertificatesSlider from "../Slider/CertificatesSlider";
import SliderComp from "../Slider/Slider";
import classes from "./Certificates.module.scss";
import cert from "./cert.png";
import diploma from "./diploma.png";
export default function Certificates() {
  const vertical = [diploma, diploma, diploma, diploma, diploma];
  const horizontal = [cert, cert, cert, cert, cert, cert, cert, cert];

  return <div className={classes.Certificates}>
    <CertificatesSlider data={vertical}/>
    <CertificatesSlider data={horizontal}/>
  </div>;
}

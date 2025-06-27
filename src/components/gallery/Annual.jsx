import AnnualDay from './AnnualDay.jsx';
import TopFix from '../top/TopFixed.jsx'
import bannerBg from "../../assets/RS_SCHOOL.jpg";
function Annual() {
  return (
    <>
    <TopFix 
    bgImage={bannerBg}
    title={"ANNUAL DAY"}
    content={"Annual Day"}/>
    <AnnualDay />
      
    </>
  );
}

export default Annual;
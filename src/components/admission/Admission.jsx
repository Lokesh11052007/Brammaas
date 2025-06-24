import Form from './Form.jsx';
import Banners from'./banners.jsx';
import adminImage from '../../assets/admin.jpg';
import TopFixed from '../top/TopFixed.jsx';
function Admission() {
  return (
    <>
      <TopFixed
      bgImage={adminImage}
      title={"ADMISSION ENQUIRY"}
      content={"Admission Enquiry"}
      />
      <Form/>
      <Banners/>
      
    </>
  );
}

export default Admission;

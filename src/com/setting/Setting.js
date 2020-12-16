import { Calendar } from 'antd';

function onPanelChange(value, mode) {
    console.log(value.format('YYYY-MM-DD'), mode);
  }

const Calendarr =()=>{

    return(
    
    <Calendar onPanelChange={onPanelChange} />
    )

}

export default Calendarr


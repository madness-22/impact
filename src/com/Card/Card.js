import "./Mycard.css";
import { Card } from 'antd';
import { Row, Col } from 'antd';

const Mycard=() =>{
    return(
    <div className="site-card-wrapper">
        <Row justify="center" gutter={16}>
            <Col span={8}>
            <Card title="Bio card" >
                <p>Name: VaLaK</p>
                <p>Contry: Libya</p>
                <p>City: Tripoli</p>
                </Card> 
            </Col>
            <Col span={8} >
            <Card title="Bio card"  >
                <p>Name: VaLaK</p>
                <p>Contry: Libya</p>
                <p>City: Tripoli</p>
                </Card> 
            </Col>
            <Col span={8}>
            <Card title="Bio card"  >
                <p>Name: VaLaK</p>
                <p>Contry: Libya</p>
                <p>City: Tripoli</p>
                </Card> 
            </Col>
        </Row>,
    </div>
    )};


export default Mycard


 
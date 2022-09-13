import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default (props) => (
	<Row className="align-items-center" style={{minHeight:'100vh'}}>
		<Col>
			{props.children}
		</Col>
	</Row>
);
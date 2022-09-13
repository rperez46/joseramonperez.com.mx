import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomLink from 'components/CustomLink';
import Image from 'next/image'
import reactjsLogo from '../public/reactjs.png'
import netcoreLogo from '../public/netcore.png'
import VerticalCenterFullScreen from 'components/VerticalCenterFullScreen';


export default () => {
	return (
		<Container>
			<VerticalCenterFullScreen>
				<Row className="justify-content-center">
					<Col className="col-4 col-md-3 col-lg-2">
						<Image
							src={netcoreLogo}
						/>
					</Col>
					<Col className="col-4 col-md-3 col-lg-2">
						<Image
							src={reactjsLogo}
						/>
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<h1>José Ramón Pérez Herrera</h1>
						<h2>Desarrollador .NET / ReactJS</h2>
						<p>
							<CustomLink
								icon="github"
								href="https://github.com/rperez46"
							>rperez46</CustomLink>

							<CustomLink
								icon="linkedin"
								href="https://www.linkedin.com/in/jose-ramon-perez"
							>Ramón Pérez</CustomLink>
						</p>
					</Col>
				</Row>
			</VerticalCenterFullScreen>
		</Container>
	);
}
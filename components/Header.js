import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomLink from 'components/CustomLink';

export default () => {
	return (
		<Container>
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
		</Container>
	);
}
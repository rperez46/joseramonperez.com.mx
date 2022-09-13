import Icon from 'components/Icon';
const linkStyle = {
	margin: '5px'
};
export default (props) => (
	<a style={linkStyle} href={props.href}>
		<Icon icon={props.icon} /> {props.children}
	</a>
);
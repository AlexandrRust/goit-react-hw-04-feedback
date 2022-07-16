import PropTypes from 'prop-types';
import { Title } from './Title.styled';



export const FeedbackTitle = ({ children }) => {
    return <Title>{children}</Title>
}


Title.propTypes = {
    children: PropTypes.string.isRequired
}
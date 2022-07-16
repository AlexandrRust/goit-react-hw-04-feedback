import PropTypes from 'prop-types';

import { NotificationText } from 'components/Notification/NotificationText.styled'

export const Notification = ({ message }) => {
    return <NotificationText key={message}>{message}</NotificationText>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}
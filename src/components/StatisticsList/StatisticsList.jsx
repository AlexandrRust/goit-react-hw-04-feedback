import PropTypes from 'prop-types';

import { List, Item } from "./StatisticsList.styled"

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    const array = Object.entries({ good, neutral, bad, total, positivePercentage })
    return (
        <List>
            {array.map(([key, value]) => (key==="positivePercentage" ?  <Item key={key}>{key}: {value} %</Item> : <Item key={key}>{key}: {value}</Item>))}
        </List>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
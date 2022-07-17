import PropTypes from 'prop-types';

import { List, Button } from 'components/FeedbackOptions/List.styled';

export const FeedbackOptions = ({ buttonNames, onLeaveFeedback }) => {
  // const names = Object.keys(options);
  return (
    <List>
      {buttonNames.map(
        name =>
          name !== 'total' &&
          name !== 'positivePercentage' && (
            <Button
              key={name}
              name={name}
              onClick={() => onLeaveFeedback(name)}
            >
              {name}
            </Button>
          )
      )}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
};

import { useState, useEffect } from 'react';
import { Box } from 'components/Box/Box.styled';
import { FeedbackTitle } from 'components/Title/Title';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { FeedbackSection } from 'components/FeedbackSection/FeedbackSection.styled';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/StatisticsList/StatisticsList';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);
  const options = { good, neutral, bad };
  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good => good + 1);

        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
    setTotal(total => total + 1);
  };

  useEffect(() => {
    if (total === 0) {
      return;
    }
    setPositivePercentage(Math.trunc((good / total) * 100));
  }, [good, total, positivePercentage]);
  return (
    <Box>
      <FeedbackSection title={'Please leave feedback'}>
        <FeedbackTitle>Please leave feedback</FeedbackTitle>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </FeedbackSection>

      <FeedbackSection title={'Statistics'}>
        <FeedbackTitle>Statistics</FeedbackTitle>
        {total < 1 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </FeedbackSection>
    </Box>
  );
}

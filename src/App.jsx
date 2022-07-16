
import { Component } from "react";
import { Box } from 'components/Box/Box.styled';
import { FeedbackTitle } from 'components/Title/Title';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { FeedbackSection } from 'components/FeedbackSection/FeedbackSection.styled';
import { Notification } from "components/Notification/Notification";
import { Statistics } from "components/StatisticsList/StatisticsList";

export class App extends Component  {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positivePercentage: 0,
    }
  
  onLeaveFeedback = (name) => {
    this.setState(() => { 
      return { [name]: this.state[name] + 1 }
    })
    this.countTotalFeedback()
    this.countpositivePercentage(name)
  };

  countTotalFeedback = () => {
    this.setState({ total: this.state.total + 1 })
  };
  
  countpositivePercentage = (name) => {
    this.setState(name === "good" ? { positivePercentage: Math.trunc(((this.state.good + 1) / (this.state.total + 1) * 100))  } : { positivePercentage: Math.trunc(((this.state.good) / (this.state.total + 1) * 100)) })
  }

  render() {
    return (
      <Box>
        <FeedbackSection title={'Please leave feedback'}>
            <FeedbackTitle>Please leave feedback</FeedbackTitle>
            <FeedbackOptions
            options={this.state}
            good={this.state.good}
            total={this.state.total}
            onLeaveFeedback={this.onLeaveFeedback}
            />
        </FeedbackSection>

        

        <FeedbackSection title={'Statistics'}>
          <FeedbackTitle>Statistics</FeedbackTitle>
          {this.state.total < 1 ? <Notification message={'There is no feedback'}/> : 
          <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positivePercentage}
          />}
          
        </FeedbackSection>
      </Box>
    );
  }
}

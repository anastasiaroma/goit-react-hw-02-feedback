// import "./App.css";
import { Component } from "react";
import { Statistics } from "./components/Statistics/Statistics";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Section } from "./components/Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    //console.log('good +')
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleIncrementNeutral = () => {
    //console.log("neutral +");
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleIncrementBad = () => {
    //console.log("bad +");
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { handleIncrementGood, handleIncrementNeutral, handleIncrementBad } =
      this;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100
    );
    //console.log(countPositiveFeedbackPercentage)

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          handleIncrementGood={handleIncrementGood}
          handleIncrementNeutral={handleIncrementNeutral}
          handleIncrementBad={handleIncrementBad}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    );
  }
}
export default App;
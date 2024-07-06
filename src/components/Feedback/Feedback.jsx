function Feedback({ feedback, totalFeedback, positiveFeedbackPercentage }) {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedbackPercentage}%</p>
    </div>
  );
}
export default Feedback;

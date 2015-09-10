var Button = React.createClass({
getInitialState: function() {
  return {counter: 0};
}
render: function() {
  return (
  <buton>Go</button>
  )
 }
});
React.render(<Button />, document.getElementById("root"));

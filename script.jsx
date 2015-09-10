var Button = React.createClass({
getInitialState: function() {
  return {counter: 0};
},
render: function() {
  return (
  <button>Go</button>
  )
 }
});
React.render(<Button />, document.getElementById("root"));

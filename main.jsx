/** @jsx React.DOM */

var InputDemo = React.createClass({
  getInitialState: function() {
    return {
      hasContent: false,
      content: ''
    }
  },

  changeHandler: function(e) {
    this.setState({content: e.target.value});
    this.setState({hasContent: this.state.content !== ''});
  },

  render: function() {
    return <div className={this.state.hasContent ? 'active input-wrap' : 'inactive input-wrap'}>
      <input className="input" type="text" onChange={this.changeHandler} />
      <ContentArea content={this.state.content} />
    </div>;
  }
});

var ContentArea = React.createClass({
  render: function() {
    return <div className="output">
      <p>{this.props.content}</p>
    </div>
  }
});

React.render(<InputDemo className="demo" />, document.body);

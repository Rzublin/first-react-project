//Component to be nested. It displays some H! and Paragraph.
var GreeterMessage = React.createClass ({
    render : function(){
        return (
          <div>
            <h1>Hello {this.props.name}!</h1>
            <p>{this.props.message}</p>
          </div>
        )
    }
});

//Component to be nested. It displays a form, validates it
//and call handler to set state.name
var GreeterForm = React.createClass ({
    onFormSubmit : function(e){
        e.preventDefault();
        var name = this.refs.name.value;
        if (name.length > 0){
          this.refs.name.value = '';
          this.props.onNewName(name);
        }
    },

    render : function (){
        return (
          <div>
              <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name"/>
                <button>Set Button</button>
              </form>
          </div>
        )
    }
});



//Main component. Takes the input from a form and updates the text on the main H1.
var Greeter = React.createClass({
    getDefaultProps : function(){
      return {
        name:'React',
        message: 'This is the default message'
      }
    },
    getInitialState : function(){
      return {
        name: this.props.name
      };
    },
    //Sets the "User Name" and validates the input.
    handleNewName : function(name){
      this.setState({
        name : name
      });
    },
    render : function () {
      var name = this.state.name;
      var message = this.props.message;
      return (
        <div>
          {/* nested component*/}
          <GreeterMessage name={name} message={message}/>
          {/* nested component*/ }
          <GreeterForm onNewName={this.handleNewName}/>
        </div>
      );
    }
});

var firstName = "Raphael";
var msg = "Seja bem-vindo!";

ReactDOM.render(
    <Greeter name={firstName} message={msg}/>,
    document.getElementById('app')
);

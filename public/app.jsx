//Presentational component that displays the state.name and welcome message.
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

//Presentational component that displays a form, validates it
//and call handler to set state.name
var GreeterForm = React.createClass ({
    onFormSubmit : function(e){
        e.preventDefault();
        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        if (name.length > 0){
          this.refs.name.value = '';
          updates.name = name;
        }
        if (message.length > 0){
          this.refs.message.value = '';
          updates.message = message;
        }
        this.props.onNewData(updates);
    },

    render : function (){
        return (
          <div>
              <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name" placeholder="Enter Name"/> <br />
                <textarea ref="message" placeholder="Enter Message"></textarea> <br />
                <button>Submit</button>
              </form>
          </div>
        )
    }
});



//Container component that maintains state for the application
//Takes the input from a form and updates the text of state.name.
var Greeter = React.createClass({
    getDefaultProps : function(){
      return {
        name:'React',
        message: 'This is the default message'
      }
    },
    getInitialState : function(){
      return {
        name: this.props.name,
        message: this.props.message
      };
    },
    //Sets the "User Name" and validates the input.
    handleNewData : function(updates){
      this.setState(updates);
    },
    render : function () {
      var name = this.state.name;
      var message = this.state.message;
      return (
        <div>
          {/* nested component*/}
          <GreeterMessage name={name} message={message}/>
          {/* nested component*/ }
          <GreeterForm onNewData={this.handleNewData}/>
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

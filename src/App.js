const Pizza = (props) =>{
    return React.createElement("div", {},[
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.description),
    ]);
};

const App = () => {
    return React.createElement("div",
        {}, [
            React.createElement("h1", {}, "Welcome to Pizza Hub!"),
            React.createElement(Pizza, { name: "The Pepperoni Pizza", description: "A delicious pepperoni pizza with mozzarella cheese and tomato sauce." }),
            React.createElement(Pizza, { name: "The Veggie Pizza", description: "A healthy veggie pizza with fresh vegetables and hummus." }),
            React.createElement(Pizza, { name: "The Margherita Pizza", description: "A classic margherita pizza with fresh mozzarella, basil, and tomato sauce." }),
            React.createElement(Pizza),
            React.createElement(Pizza),

        ]
       
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
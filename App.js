const heading = React.createElement("h1", {id: "heading"}, "hello world from React!!!");
// console.log(heading);


{/* <div id="parent">
    <div id="child">
        <h1>This is a h1 tag</h1>
        <h2>This is a h2 tag</h2>
    </div>
</div> */}

//if children are static we can add them as comma separated values. 
//But if the children are dynamic, wrap them inside an array and each element in the array shpuld have a key property.
const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"},
       React.createElement("h1", {}, "This is a h1 tag"),
        React.createElement("h2", {}, "This is a h2 tag")
    )
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// Create a parent div element with nested children
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {
            id: "heading_1"
        }, "Heading 1"),
        React.createElement("h2", {
            id: "heading_2"
        }, "Heading 2")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: "heading_1"
        }, "Heading 1"),
        React.createElement("h2", {
            id: "heading_2"
        }, "Heading 2")
    ])
]);
// Create a root and render the parent element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map

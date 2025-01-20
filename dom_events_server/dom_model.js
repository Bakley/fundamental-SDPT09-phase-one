// Document Object Model

// It's a programming interface for HTML and XML documents
// The document is the webpage, every piece of the webpage/element are treated as objects
// it represent the structure of a document as a tree-like, 
// where each node in the tree corresponds to a part of the document

// The DOM is organized in a hierarchical tree where the document it the root
// Each HTML tag is a node with its own children, siblings, and parent

// => Traversal and manipulation
// 1. Accessing nodes
    // => document.getElementById(id)
        // Select an element by its unique id attribute
        // return a single element object and null if not found
    // => document.getElementByClassName(class)
        // Select all elements with the given class name
        // returns a htmlcollection
        // use it when selecting multiple elements
    // => document.getElementByTagName(Tag)
        // Select all elements with the given tag name
        // return a htmlcollection

    // => document.querySelector(selector)
        // Select the first element that matches a given CSS Selector
    // => document.querySelectorAll()
        // Select all the elements thats match a given CSS Selector
        // A NodeList

    // Best Practices
        // 1. Fastest and most direct access when you know the id 
        // 2. Complex CSS Seletors
        // 3. You need a live collection

// 2. Modify Nodes
    // => createElement()
    // => appendChild()
    // => removeChild()
    // => setAttribute()
    // => remove()
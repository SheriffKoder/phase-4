

# Phase 4
This repo contains my notes and code progress for the following courses:

- Next.js 14 & React
- Algorithms and Data Structures Masterclass

## **Next.js 14 & React**

**`introduction`**
- server side rendering vs. client side rendering 
- App router vs. Pages router

## **`react refresher`**
>**section1-react-part 1**
- project setup
- using components
- using css files file.module.css
- states and passing/lifting state up
######
- Show/Hide the NewPost form
- show by clicking on the new post button in the header
- hide by clicking on the cancel button in the form
- wrap components using the 'children' prop name
- show/hide components dynamically using states and functions
- pass states and functions across multiple levels of components
######
> **section1-react-part2**
-  change: moving states to the newPost component
- formSubmit function updates postData and sends the input values to parent state with a passed function from the parent
- if there are posts display the Post component
- if there are no posts display "no posts"
- sending/storing postData to a backend-server (dummy-backend folder)
- retrieving postData from a backend-server (dummy-backend folder)
- handle fetching delays with an alternative UI using isFetching
> **section1-react-part3**
- routing
- routing: Layouts
- Navigating using: Link, useNavigate, redirect
- routing: Layouts: using loader/action properties to handle GET/POST requests instead of using a useEffect

## **`Foodies project`** 
 >**section3-njs-foodies-starting-project-part1**
- **Action: Work on the root page, layout header, nested route pages**
- Dynamic pages: create meals/share, community routes
- Style the nav and nav background
- Work on the root page.js
- Nested layouts & the children prop
- Import Images as variables
- Styling using the module.css files
- Link and Image Next.js elements
- **Action: Work on the image-slideshow, community, meals components**
- @components/images/image-slideshow component add code
- @app/community page add content
- @app/meals page add content
- React server and client components
- Use the code that uses client side code into separate components
- Use usePathname hook to determine current urls to activate buttons
- **Action: Create/fetch from a sql-lite database**
- Work with sql-lite database from 'initdb.js' to create a database file 'meals.db'
- Fetch data using @lib/meals.js using async on the @app/meals page
- Loading.js UI and Suspense

## **Algorithms and Data Structures**


- Introduction 

`Big O Notation`
- comparing code with speed of execution
- measuring time complexity
- measuring space complexity (auxiliary)
- Logarithms

`Built-in Data-structures`
- Objects
- Arrays

`Algorithms and Problem Solving Patterns`
- What is an algorithm and how to improve at solving algorithm
- **Problem solving strategies**
- (1) Understanding the problem
- (2) exploring concrete examples
- (3) Break it down
- (4) Solve/Simplify
- (5) look back and refactor
- **Master common problem solving patterns**
- Example: Frequency counter / Same
- Example: Frequency counter / Anagram



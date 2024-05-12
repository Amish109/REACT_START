## benifit of bundlers or parcel
    - Hot Reloading  or HRM(Hot Replacing Module)
    - Caching
    - Development server & Production builds
    - Image optimisation
    - Differential bundling project should run on different browsers/version

## BrowsersList dev
    - This gives us the diffrential bundling and according to our need we can choose our target customers and the versions of browsers they use

## What is JSX
    - A html like syntax that gives a piece of html 

## How is JSX converted to browser understanding code
    - JSX is first converted to React Element by help of babel        
    - from that its is converted to browser understanding html and js by render function

## Types of components
    - Class Based components    - old way
    - Functional components     - recent way

## Types of functional components

    - 1 Arror function without return
    - 2 Arrow function with return
    - 3 Normal function

## 1 Arrorw function without return
    - const Component1 = ()=><div>This is Component1</div>

calling : - <Component1/> or <Component1><Component1/> or Component1()
## 2 Arrorw function with return
    - const Component2 = ()=>{
        return(
            <div>This is Component2</div>
        )
    }
calling : - <Component2/> or <Component2><Component2/> or Component2()

## 3 Normal function
    - function Component3(){
        return(
            <div>This is Component3</div>
        )
    }
calling : - <Component3/> or <Component3><Component3/> or Component3()



### Rules for writing JSX
    - Components should start with Capital letters  ~ preferred
    - Every tag should be closed
    - camelCase for attributes
    - Js should be written in {console.log("Hello world!)}  curley braces
    - Attributes like css should be written in double curly braces {{backgroundColor:"red"}}  ~1st{} for js and 2{ } for object
    - Component should return one parent tag if there're many html elements
    #We can even use <></> if we dont want to increase dom size
    it can also be written as <React.Fragment></React.Fragment>
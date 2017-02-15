# react-demo
##demo app implement details

- Since there are three views need to use this JSON data, the basic idea is to have one place to load and process the data. Then pass the data to different components through props. 

- Only user view need to modified the data, so I choose pass setState function as props from layout component to user component. That way when user add additional tag, the change can be viewed by whole application. Maybe using flux/redux is better choice when application become complicated.

- I setup react route to achieve navigation. Then I change history from browserHistory to hashHistory based on the instruction on create-react-app github page.

- In this app, I use vanilla js to manipulate arrays and objects. Maybe underscore and lodash have more elegent solutions.

- Using a little bit bootstrap to improve style.

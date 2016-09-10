import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import reducers from "./reducers";

//Components
import App from "./components/app";
import AboutMe from "./components/aboutMe";
import Introduction from "./components/introduction";
import Contact from "./components/contact";
import FormSubmit from "./components/formsubmit";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
        {/*<Router history={browserHistory}>*/}
            {/*<Route path="/" component={App}>*/}
                {/*<IndexRoute component={Introduction}/>*/}
                {/*<Route path="about" component={AboutMe}/>*/}
                {/*<Route path="contact" component={Contact}/>*/}
                {/*<Route path="foobar" component={FormSubmit}/>*/}
            {/*</Route>*/}
        {/*</Router>*/}
    </Provider>
    , document.querySelector('.main'));

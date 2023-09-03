import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import AppLayout from "./AppLayout";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <AppLayout />
            </Router>
        </Provider>
    );
}
export default App
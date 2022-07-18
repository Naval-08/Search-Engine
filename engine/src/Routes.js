import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import App from "./App";
import News from './news';
import Mails from './Mails';

const Navigation = () => {
    return (
        <div>
            <Router>
                <App />
                <Routes>
                    <Route path="/news" element={<News />} />
                    <Route path="/mails" element={<Mails />} />
                    {/* <Route path="*" element={<Error />} /> */}
                </Routes>
            </Router>
        </div>
    );
};

export default Navigation;

import Search from './Search';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Search />
        <Link to={"/mails"} style={{ paddingTop: '30px', marginLeft: '10%', cursor: 'pointer' }}>< EmailOutlinedIcon /></Link>
        <Link to={"/news"} style={{ paddingTop: '30px', marginLeft: '3%', cursor: 'pointer' }}> <NewspaperOutlinedIcon /></Link>
        {/* <Link style={{ paddingTop: '30px', marginLeft: '3%', cursor: 'pointer' }}> < SettingsOutlinedIcon /></Link> */}
      </div>
      <div style={{ background: 'red' }}>

      </div>
    </div>
  );
}

export default App;

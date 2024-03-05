
import './Search.css';
import CloseIcon from '@mui/icons-material/Close';

const Search = ({ setShowSearch }) => {

    return (
        <div className="search-modal">
            <div className="form-field">
                <input type="text"
                    autoFocus
                    placeholder="Search here..."
                />
                <div className="cler-btn">

                    <CloseIcon onClick={() => setShowSearch(false)} />
                </div>
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={"https://i.imgur.com/wcPjjkL.png"} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">Corn Atta</span>
                            <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eius!</span>
                        </div>
                    </div>
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={"https://i.imgur.com/wcPjjkL.png"} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">Corn Atta</span>
                            <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eius!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;

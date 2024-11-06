import './Main.css'
import {assets} from "../assets/assets";
import {useContext} from "react";
import {Context} from "../context/Context.jsx";

const Main = () => {
    const {onSent, recentPrompt, showResult, loading, resultData, setInput,input} = useContext(Context)

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = () => {
        onSent()
    }

    return (
        <div className="main">
            <div className="nav">
                <p>AuraChat</p>
                <img src={assets.user_icon} alt="user_icon"/>
            </div>
            <div className="main-container">
                {!showResult ? <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                    </>:
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="user_icon" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.logo} alt=""/>
                            {loading ?
                                <div className="loader">
                                    <hr/>
                                    <hr/>
                                    <hr/>
                                </div>
                                : <p dangerouslySetInnerHTML={{__html:resultData}}></p>}

                        </div>
                    </div>}


                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Enter a prompt here" value={input} onChange={handleChange} />
                        <div>
                            {input?<img onClick={handleSubmit} src={assets.send_icon} alt=""/>:null}
                        </div>

                    </div>
                    <p className="bottom-info">
                        AuraChat may make mistakes. Consider checking important information.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
import {useHistory} from 'react-router-dom'
import {Div} from './styles.js'
const FirstTimeHomePage = ({setIsFirstTime}) =>{
    const history = useHistory()

    return (
        <Div>
            <div className="div-logo">
                <img src="./imgs/logo.png" alt="logo" className="logo-img"/>
            </div>
            <div className="div-text-description">
                <h2>Create a ToDo list to make your day better</h2>
                <h3>Start now for free.</h3>
            </div>
            <div className="div-btn-get-started">
                <button className="btn-get-started" onClick={() =>{
                    localStorage.setItem("firstTime", false);
                    setIsFirstTime(false);
                    history.push("/")
                }}>Get Started</button>
            </div>
        </Div>
    )
}

export default FirstTimeHomePage;

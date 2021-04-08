import {useState, useEffect} from 'react'
import FirstTimeHomePage from '../../components/FirstTimeHomePage'
import NormalHomePage from '../../components/NormalHomePage'

const HomePage = () => {
    const [isFirstTime, setIsFirstTime] = useState(true);

    useEffect(() =>{
        if(localStorage.getItem('firstTime') !== null){
            setIsFirstTime(false);
        }
    }, [isFirstTime])

    return (
        <>
            {isFirstTime ? 
            <FirstTimeHomePage setIsFirstTime={setIsFirstTime}/> 
            : 
            <NormalHomePage />}
        </>
    )
}

export default HomePage;
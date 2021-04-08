import styled from 'styled-components'

const darkGray = "#202020"

export const Div = styled.div`
    width: 100%;
    height: 100vh;

    @media (max-width: 768px){
        background-color: ${darkGray};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .div-logo{
            padding: 1rem;
            .logo-img{
                width: 200px;
            }
        }

        .div-text-description{
            padding: 1rem;
            text-align: center;
            color: #ddd;

            h3{
                font-weight: normal;
            }
        }

        .div-btn-get-started{
            margin-top: 2rem;

            .btn-get-started{
                background-image: linear-gradient(to bottom right, #FFE53B, #FF2525);
                border: none;
                border-radius: 15px;
                padding: 1rem 4rem;
                font-size: 20px;
                font-weight: bold;
                color: #fff;
                outline: none;
                
            }
        }
    }
`
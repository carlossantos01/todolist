import styled from 'styled-components'

const darkGray = "#202020"

export const Div = styled.div`
    width: 100%;
    margin: auto;
    background-color: ${darkGray};

    .div-all-todos{
        height: 100%;
        padding-top: 1rem;
        padding-bottom: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .div-todo{
            width: 80%;
            max-width: 700px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #fff;
            box-shadow: 0 5px 10px #000;
            //background-image: linear-gradient(#ddd, #fff);
            padding: 1rem;
            border-radius: 25px;
            margin-top: 15px;
            border: 2px solid #000;
            position: relative;

            .btn-delete-todo{
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                background: red;
                color: white;
                top: -8px;
                left: -8px;
                border: none;
                border-radius: 50%;
                outline: none;
            }

            .g{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: green;
            }
            .y{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: yellow;
            }
            .o{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: orange;
            }
            .r{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: red;
            }

            .todo-checked{
                text-decoration: line-through;
            }
            .chk-todo{
                height: 25px;
                width: 25px;
            }
        }
    }

    .footer{
        width: 100%;
        height: 80px;
        padding-bottom: 20px;
        display: flex;
        justify-content: center;
        position: fixed;
        bottom: 0;
        background-image: linear-gradient(transparent, #202020);

        .btn-new-todo{
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            font-size: 35px;
            background-image: linear-gradient(to bottom right, #FFE53B, #FF2525);
            color: #fff;
        }
        
    }

    
`
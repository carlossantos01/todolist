import styled from 'styled-components'

const darkGray = "#202020"

export const Div = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${darkGray}; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    .header{
        width: 100%;
        height: 80px;
        padding-bottom: 20px;
        display: flex;
        position: fixed;
        top: 0;
        background-image: linear-gradient(transparent, #202020);

        .btn-back-to-homepage{
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            font-size: 35px;
            background-image: linear-gradient(to bottom right, #FFE53B, #FF2525);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            outline: none;
            margin: 1rem;
            .img-btn-back-to-homepage{
                width: 20px;
            }
        }
        .btn-save-todo:disabled{
            background-image: linear-gradient(to bottom right, #ddd, #444);
        }
        
    }
    .div-txt-title-todo{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .txt-title-todo{
            width: 80%;
            max-width: 700px;
            background-color: #fff;
            box-shadow: 0 5px 10px #000;
            padding: 1rem;
            border-radius: 25px;
            margin-top: 15px;
            margin-bottom: 15px;
            border: 2px solid #000;
            outline: none;
        }
    }
    .div-rd-todo-color{
        display: flex;
        align-items: center;
        .rd-todo-color{
            width: 25px;
            height: 25px;
        }
        .rd-color-item-green{
            width: 25px;
            height: 25px;
            background-color: #4ab130;
            border-radius: 3px;
        }
        .rd-color-item-yellow{
            width: 25px;
            height: 25px;
            background-color: #ffe000;
            border-radius: 3px;
        }
        .rd-color-item-orange{
            width: 25px;
            height: 25px;
            background-color: #ff9900;
            border-radius: 3px;
        }
        .rd-color-item-red{
            width: 25px;
            height: 25px;
            background-color: #ff2300;
            border-radius: 3px;
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

        .btn-save-todo{
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            font-size: 35px;
            background-image: linear-gradient(to bottom right, #FFE53B, #FF2525);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            outline: none;

            .img-btn-save-todo{
                width: 30px;
            }
        }
        .btn-save-todo:disabled{
            background-image: linear-gradient(to bottom right, #ddd, #444);
        }
        
    }
`;
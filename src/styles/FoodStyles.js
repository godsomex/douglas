import styled from '@emotion/styled';

export const FoodStyles = styled.div`
    .main-area {
        margin: auto;
        max-width: 900px;
    }
    img {
        display: block;
        border: 0;
        width: 100%;
        height: auto;
    }

    .card {
        background: white;
        margin-bottom: 2em;
        box-shadow: black 0 5px 10px;
    }

    .card a {
        color: black;
        text-decoration: none;
    }

    .card a:hover {
        box-shadow: 3px 3px 8px hsl(0, 0%, 80%);
    }

    .card-content {
        padding: 1.4em;
    }

    .card-content h3 {
        margin-top: 0;
        margin-bottom: 0.5em;
        font-weight: bold;
    }

    .card-content p {
        font-size: 80%;
    }

    .card-content span {
        float: right;
        background: orange;
        border-radius: 30%;
        padding: 3px;
    }

    @media screen and (min-width: 40em) {
        .cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .card {
            flex: 0 1 calc(50% - 1em);
        }
    }

    @media screen and (min-width: 60em) {
        .card {
            flex: 0 1 calc(25% - 1em);
        }
    }
`;

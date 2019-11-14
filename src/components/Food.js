import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import data from '../../data.json';
import { FoodStyles } from '../styles/FoodStyles';
function Food() {
    const [data, setData] = useState({ food: [] });
    const [url, setUrl] = useState('../../data.json');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [fruit, setFruit] = useState(false);
    const [vegetable, setVegetable] = useState(false);
    const [meat, setMeat] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios(url);
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [url]);

    function handleVeg() {
        setVegetable(!vegetable);
    }

    function handleFruit() {
        setFruit(!fruit);
    }

    function handleMeat() {
        setMeat(!meat);
    }

    const showVeg = data.food
        .filter(item => item.type === 'gemuse')
        .map(item => (
            <article class="card">
                <a href="#">
                    <picture className="thumbnail">
                        <img
                            src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg"
                            alt="A banana that looks like a bird"
                        />
                    </picture>
                    <div className="card-content">
                        <h3>
                            {item.name} <span>{item.type}</span>{' '}
                        </h3>
                        <p>{item.details}</p>
                        <p>> more</p>
                    </div>
                </a>
            </article>
        ));

    const showFruit = data.food
        .filter(item => item.type === 'fruit')
        .map(item => (
            <article className="card">
                <a href="#">
                    <picture className="thumbnail">
                        <img
                            src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg"
                            alt="douglas"
                        />
                    </picture>
                    <div className="card-content">
                        <h3>
                            {item.name}
                            <span>{item.type}</span>
                        </h3>
                        <p>{item.details}</p>
                        <p>> more</p>
                    </div>
                </a>
            </article>
        ));

    const showMeat = data.food
        .filter(item => item.type === 'meat')
        .map(item => (
            <article className="card">
                <a href="#">
                    <picture className="thumbnail">
                        <img
                            src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg"
                            alt="i love food"
                        />
                    </picture>
                    <div className="card-content">
                        <h3>
                            {item.name}
                            <span>{item.type}</span>
                        </h3>
                        <p>{item.details}</p>
                        <p>> more</p>
                    </div>
                </a>
            </article>
        ));

    return (
        <FoodStyles>
            <Filter1Styles>
                <CheckBoxStyles background="red">
                    <input
                        type="checkbox"
                        name="vegetable"
                        onChange={handleVeg}
                    />
                    <label htmlFor="veg">Vegetable</label>
                </CheckBoxStyles>
                <CheckBoxStyles
                    style={{ background: 'green', borderRadius: '25%' }}
                >
                    <input type="checkbox" name="meat" onChange={handleMeat} />
                    <label htmlFor="meat">Meat</label>
                </CheckBoxStyles>
                <CheckBoxStyles
                    style={{ background: 'orange', borderRadius: '25%' }}
                >
                    <input
                        type="checkbox"
                        name="fruit"
                        onChange={handleFruit}
                    />
                    <label htmlFor="fruit">Fruit</label>
                </CheckBoxStyles>
            </Filter1Styles>

            <FilterStyles>
                <div className="contain">
                    <ul className="responsive-table">
                        <li className="table-row">
                            <div className="cols cols-2">Filter</div>
                            <div className="cols cols-2" data-label="Vegetable">
                                <input
                                    type="checkbox"
                                    name="vegetable"
                                    onChange={handleVeg}
                                />
                            </div>
                            <div className="cols cols-2" data-label="Meat">
                                <input
                                    type="checkbox"
                                    name="meat"
                                    onChange={handleMeat}
                                />
                            </div>
                            <div className="cols cols-2" data-label="Fruit">
                                <input
                                    type="checkbox"
                                    name="fruit"
                                    onChange={handleFruit}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </FilterStyles>

            <main class="main-area">
                <div class="centered">
                    <section class="cards">
                        {isError && <div>Something went wrong ...</div>}
                        {isLoading && <div>Loading ...</div>}

                        {vegetable && showVeg}
                        {fruit && showFruit}
                        {meat && showMeat}
                    </section>
                </div>
            </main>
        </FoodStyles>
    );
}
export default Food;

const FilterStyles = styled.div`
    .contain {
        max-width: 1500px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 10px;
        padding-right: 10px;
    }
    h2 {
        font-size: 26px;
        margin: 20px 0;
        text-align: center;
        small {
            font-size: 0.5em;
        }
    }
    .responsive-table {
        li {
            border-radius: 3px;
            padding: 25px 30px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 25px;
        }
        .table-header {
            background-color: grey;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.03em;
        }
        .table-row {
            background-color: #ffffff;
            box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
        }
        .cols-1 {
            flex-basis: 10%;
        }
        .cols-2 {
            flex-basis: 40%;
        }
        .cols-3 {
            flex-basis: 25%;
        }
        .cols-4 {
            flex-basis: 25%;
        }
        @media all and (max-width: 767px) {
            .table-header {
                display: none;
            }
            .table-row {
            }
            li {
                display: block;
            }
            .cols {
                flex-basis: 100%;
            }
            .cols {
                display: flex;
                padding: 10px 0;
                &:before {
                    color: #6c7a89;
                    padding-right: 10px;
                    content: attr(data-label);
                    flex-basis: 50%;
                    text-align: right;
                }
            }
        }
    }
`;

const Filter1Styles = styled.div`
    max-width: 250px;
    justify-content: space-around;
    margin-left: 75px;
    display: flex;
`;

const CheckBoxStyles = styled.h5({ borderRadius: '25%' }, props => ({
    background: props.background,
}));

const SpanStyles = styled.span({ fontSize: 12 }, props => ({
    background: props.background,
}));

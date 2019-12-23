import React, { useState } from 'react';
import styled from '@emotion/styled';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

function Signin() {
    const [values, setValues] = useState({ email: '', password: '' });

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
        setValues({ email: '', password: '' });
    };

    const handleChange = e => {
        const { name, value } = e.target;

        setValues(values => ({ ...values, [name]: value }));
    };
    return (
        <SigninStyle>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    label="email"
                />
                <FormInput
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    label="password"
                />

                <CustomButton type="submit"> Login </CustomButton>
            </form>
        </SigninStyle>
    );
}

export default Signin;

const SigninStyle = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;

    .title {
        margin: 10px 0;
    }
`;

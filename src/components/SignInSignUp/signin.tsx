import React, { useState } from 'react';

function signin() {
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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <input
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                />

                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default signin;

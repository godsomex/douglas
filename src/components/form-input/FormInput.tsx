import React from 'react';
import styled from '@emotion/styled';

function FormInput({ onChange, label, ...otherProps }) {
    return (
        <FormStyles>
            <input className="form-input" onChange={onChange} {...otherProps} />
            {label ? (
                <label
                    className={`${
                        otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </FormStyles>
    );
}

export default FormInput;

const FormStyles = styled.div`
    $sub-color: grey;
    $main-color: black;

    @mixin shrinkLabel {
        top: -14px;
        font-size: 12px;
        color: $main-color;
    }

    .group {
        position: relative;
        margin: 45px 0;

        .form-input {
            background: none;
            background-color: white;
            color: $sub-color;
            font-size: 18px;
            padding: 10px 10px 10px 5px;
            display: block;
            width: 100%;
            border: none;
            border-radius: 0;
            border-bottom: 1px solid $sub-color;
            margin: 25px 0;

            &:focus {
                outline: none;
            }

            &:focus ~ .form-input-label {
                @include shrinkLabel();
            }
        }

        input[type='password'] {
            letter-spacing: 0.3em;
        }

        .form-input-label {
            color: $sub-color;
            font-size: 16px;
            font-weight: normal;
            position: absolute;
            pointer-events: none;
            left: 5px;
            top: 10px;
            transition: 300ms ease all;

            &.shrink {
                @include shrinkLabel();
            }
        }
    }
`;

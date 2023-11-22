import React from 'react';

function LoginForm({inputs, handleChange, onSubmit, submitType}) {

    return (
        <div onSubmit={onSubmit}>
            <form action="">
                {inputs && Object.entries(inputs).map(([name, value], index) => (
                    <li className="item-form" key={index}>
                        <h2>{name} </h2>
                        <input
                            type="text"
                            name={name}
                            value={value}
                            placeholder={name}
                            onChange={handleChange}/>
                    </li>
                ))
                }

            </form>
            <button type={"submit"} onClick={onSubmit}>{submitType}</button>
        </div>
    );
}

export default LoginForm;
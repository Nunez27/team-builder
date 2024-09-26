import React from 'react'

function Form (props) {
    const {list, update, submit} = props;

    const onChange = ev => {
        const {name, value} = ev.target;
        update(name, value);
    }

    const onSubmit = ev => {
        ev.preventDefault();
        submit();
    }

    return (
        <form className='container' onSubmit={onSubmit}>
            <div className='inputs'>
                <label>Name
                <input
                    name='name'
                    type='text'
                    value={list.name}
                    placeholder='Name'
                    onChange={onChange}
                    />
                </label>
                <br/>

                <label>Email
                <input
                    name='email'
                    type='email'
                    value={list.email}
                    placeholder='Email'
                    onChange={onChange}
                    />
                </label>
                <br/>

                <label>role
                    <select
                        name='role'
                        value={list.role}
                        onChange={onChange}>
                            <option value=''>Who would you like to become?</option>
                            <option value='Spiderman'>Spiderman</option>
                            <option value='iron-man'>iron-man</option>
                            <option value='Thor'>Thor</option>
                    </select>
                </label>

            <div className='submit'>
                <button>submit</button>
            </div>
        </div>
    </form>
    )
}

export default Form;
import React, { Component } from 'react';
export default class Form extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        console.log({
                name: this.nameTextField.value,
                surname: this.nameTextField2.value,
                description: this.nameTextField3.value
        });

        event.preventDefault();
    }

    render() {
        return (
            <>
                <div className='form-holder'>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label htmlFor='exampleFormControlInput1'>
                                Имя
                            </label>
                            <input
                                ref={el => (this.nameTextField = el)}
                                className='form-control'
                                id='exampleFormControlInput1'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='exampleFormControlInput1'>
                                Фамилия
                            </label>
                            <input
                                ref={el => (this.nameTextField2 = el)}
                                className='form-control'
                                id='exampleFormControlInput1'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='exampleFormControlTextarea1'>
                                Description
                            </label>
                            <textarea
                                ref={el => (this.nameTextField3 = el)}
                                className='form-control'
                                id='exampleFormControlTextarea1'
                                rows='3'
                            />
                        </div>
                        <div className='form-check form-check-inline'>
                            <input
                                className='form-check-input'
                                type='radio'
                                name='inlineRadioOptions'
                                id='inlineRadio1'
                                value='option1'
                            />
                            <label
                                className='form-check-label'
                                htmlFor='inlineRadio1'
                            >
                                Мужской
                            </label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input
                                className='form-check-input'
                                type='radio'
                                name='inlineRadioOptions'
                                id='inlineRadio2'
                                value='option2'
                            />
                            <label
                                className='form-check-label'
                                htmlFor='inlineRadio2'
                            >
                                Женский
                            </label>
                        </div>

                      <button
                          type='button submit'
                          className='btn btn-primary'
                          value='Submit'
                      >
                          Создать
                      </button>
                    </form>
                </div>
            </>
        );
    }
}

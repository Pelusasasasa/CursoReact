import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('pruebas en el componente',()=>{

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })
    test('debe de mostrarse Correctamente', () => {

        expect(wrapper).toMatchSnapshot();  
    })

    test('debe de Cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = "Hola mundo";
        input.simulate('change',{
            target: {
                value:value
            }
          })

          expect(wrapper.find('p').text().trim()).toBe(value)
    })

    test('No debe de postear la informacion onSubmit', () => {

        wrapper.find('form').simulate('submit',{preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();

    })

    test('Debe de  llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        input.simulate('change',{
            target:{
                value:"Hola mindo"
            }
        })
        const submit = wrapper.find('form');
        submit.simulate('submit',{preventDefault(){}})

        expect(setCategories).toHaveBeenCalled();

        expect(input.prop('value')).toBe("")
    })
    
    
    
    

})
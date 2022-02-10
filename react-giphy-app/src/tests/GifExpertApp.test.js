import { shallow } from 'enzyme'
import React from 'react'
import {GifExpertApp} from '../GifExpertApp'

describe("Pruebas sobre el componente <GifExpertApp/>",()=>{


    test('Hacer snapchot', () => {
        const wrapper = shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe de mostrar una lista de categorias', () => {
        
        const categories = ["One Punch", "Hulk"]
        const wrapper = shallow(<GifExpertApp  defaultCategories={categories}/>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    

})
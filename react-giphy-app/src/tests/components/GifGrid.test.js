import { shallow } from "enzyme"
import React from 'react'
import {GifGrid} from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"
jest.mock('../../hooks/useFetchGifs')

describe("Pruebas en <GifGrid/>",()=>{

    const category = "Boca"


    test('hacer match con el snapchot ', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>)

        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de mostrat items cunado se carga imagenes useFetchGifs', () => {

        const gifs = [{
            id:"ABC",
            url:"https://localhost/cualquier/cosa.jpg",
            title:"Cualquier Cosa"
        }]
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category}/>)

        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
    
    
})
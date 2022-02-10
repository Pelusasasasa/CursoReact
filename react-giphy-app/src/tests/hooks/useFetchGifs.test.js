import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks"

describe('Pruebas en el hook useFetchGifs',()=>{

    test('Debe de retornar el estado inicial',async() => {
        
        const {result,waitForNextUpdate} = renderHook(()=> useFetchGifs( "hulk" ))
        const {data,loading} = result.current;
        await waitForNextUpdate();
        expect( data).toEqual([])
        expect(loading).toBe(true)

    })

    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
        const {result,waitForNextUpdate} = renderHook(()=> useFetchGifs( "hulk" ))

        await waitForNextUpdate();

        const {data,loading} = result.current;
        expect( data.length).toEqual(10)
        expect(loading).toBe(true)
    })
    
    
})
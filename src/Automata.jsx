import React, { useState } from 'react'
import { recorrerAutomata } from './Automata/Automata';

export const Automata = () => {

    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('');
    const [counterOfTypes, setCounterOfTypes] = useState({});

    const onHandleFile = (e) => {

        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {

            const contents = e.target.result;
            setFile(contents);
            setFileName(file.name);

        };

        reader.readAsText(file);

    }

    const onHandleTextWritting = (e) => {

        setFile(e.target.value);

    }

    const onSaveChanges = () => {

        if(fileName && file) {

            const blob = new Blob([file], {type: 'text/plain'});
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;

            link.click();

        } else {

            console.error('El archivo no se encuentra, o el nombre no es válido');

        }

    }

    const onHandleAutomata = (e) => {

        e.preventDefault();
        setCounterOfTypes({});
        const objectResultant = recorrerAutomata(file);
        setCounterOfTypes(objectResultant);

    }
    

  return (
    <>
    
    <div className='container-fluid mt-3' style={{marginRight: "3px", marginLeft: "3px"}}>

        <div className='row gap-3 justify-content-center'>

                <form className='form-group p-3 border d-flex flex-column col-lg-7 col-xl-8 sticky-top' style={{ height: "95vh" }} onSubmit={(e) => onHandleAutomata(e)}>
                    <legend className='h1'>Evaluar texto con automata</legend>
                    <hr />
                    <label htmlFor='textForAutomata' className='h5'>
                    Ingresa el archivo de texto
                    </label>
                    <input type='file' id='textForAutomata' className='form-control' onChange={(e) => onHandleFile(e)}/>

                    <div className='d-flex justify-content-center mt-2 gap-3 mb-2'>

                        <input type="button" className='btn btn-primary' value={"Guardar cambios"} onClick={onSaveChanges}/>
                        <input type="submit" className='btn btn-warning' value={"Iniciar automata"}/>
                        
                    </div>

                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                    <textarea className='form-control' style={{ flex: '1', resize: 'none' }} onChange={(e) => onHandleTextWritting(e)} value={file}/>
                    </div>
                </form>
            

            <div className='col-lg-4 col-xl-3'>

                <form className='form-group p-3 border d-flex flex-column col-12 mb-3'>
                    <legend className='h1'>Resultado del automata</legend>
                    <hr />
                        <ul className='list-group'>

                        {

                            Object.keys(counterOfTypes).map((keyName, index) => (

                                <li key={index} className={`list-group-item`}>{keyName}: {counterOfTypes[keyName]["num"]} <br/> <span>Posiciones: </span>{ counterOfTypes[keyName]["pos"].map((position, i) => ( <span key={i}>{position} </span> ))} <br/> <span>Palabras: </span> { counterOfTypes[keyName]["word"].map((word, i) => ( <span key={i} className={`token-item-${index + 1}`}>{word}<span style={{backgroundColor: "white", color: 'black'}}>, </span></span> ))}</li>


                            ))

                        }
                        </ul>
                </form>

            </div>

        </div>

    </div>
    
    </>
  )
}

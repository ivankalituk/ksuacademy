import './development.scss'

function Development(props){

    // props.mode chapter/theme


    return(
        <div className="development">
            <div className="development_heading">{(props.mode === 'chapter')? 'Створення розділу' : 'Створення теми'}</div>

            <div className="development_createGroup">
                <input type="text" placeholder={(props.mode === 'chapter')? 'Назва розділу' : 'Назва теми'}/>
                <button>{(props.mode === 'chapter')? '+ Створити розділ' : '+ Створити тему'}</button>
            </div>
        </div>
    )
}

export default Development
import React, {  useState } from 'react'
import styles from './EventPage2.module.css'

function EventPage2(props) {
    const [themes,setThemes]=useState('theme-1')
    const [color,setColor]=useState('gray')
    const themeHandler=(theme)=>{
    setThemes(theme)
    let themes;
    if(theme==='theme-1'){
        themes="skyblue"
    }else if(theme==='theme-2'){
        themes="lightgreen"
    }else if(theme==='theme-3'){
        themes="orange"
    }else if(theme==='theme-4'){
        themes="yellow"
    }

    props.themesHandler(themes);
    }
    const colorChange=(e)=>{
        setColor(e.target.value);
        props.colorHandler(e.target.value)
    }

    const fontChange=(e)=>{
         props.fontFamilyHandler(e.target.value)
    }
  return (
    <div className={styles.event2_container}>
        <div className={`${styles.theme_container} ${styles[`${themes}`]}`}>
            <h1>YoU ARe InivIted</h1>
        </div>
        <div className={styles.theme_lists}>
            <section className={styles['theme-1']} onClick={()=>themeHandler('theme-1')}>Theme1</section>
            <section className={styles['theme-2']} onClick={()=>themeHandler('theme-2')}>Theme2</section>
            <section className={styles['theme-3']} onClick={()=>themeHandler('theme-3')}>Theme3</section>
            <section className={styles['theme-4']} onClick={()=>themeHandler('theme-4')}>Theme4</section>
        </div>
        <div className={styles.color_family}>
            <div className={styles.color_lists}>
                <section><span className={`${styles.colors_div} ${styles[`${color}`]}`}></span>color</section>
                <section> <select onChange={colorChange}>
                    <option value="gray">Gray</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    </select> </section>
            </div>
            <div className={styles.color_lists}>
                <section>Font Family </section>
                <section> 
                <select onChange={fontChange}>
                    <option value="Gill Sans MT">Gill Sans MT</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="cursive">cursive</option>
                    <option value="fantasy">fantasy</option>
                    </select> </section>
                     
            </div>
        </div>
    </div>
  )
}

export default EventPage2
import React from 'react'
import * as styles from "../styles/tech-stack-list.module.css";

export default function TechStackList({stack, justify}) {

    const justification = {
        justifyContent: justify
    }
    const stackList = stack.map(tech => (
        <div className={styles.stackItem}>
            <img
                src={`svg/${tech}.svg`}
                alt={`Logo ${tech}`}
            />
            <p>{tech}</p>
        </div>
    ))
    return (
        <div className={styles.stackList} style={justification}>
            {stackList}
        </div>
    )
}


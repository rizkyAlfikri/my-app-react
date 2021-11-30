import * as React from 'react'

const ContentArticle = ({ children, dataLogin }) => {
    return <div style={{ textAlign: 'justify' }}>
        <p style={{ color: 'blue' }}>{dataLogin}</p>
        {children

        }</div>
}

export default ContentArticle
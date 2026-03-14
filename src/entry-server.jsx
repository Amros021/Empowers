import React from 'react'
import { renderToString } from 'react-dom/server'
// Fix: React Router v7 removed react-router-dom/server, we must use react-router for StaticRouter.
// If we use react-router-dom/server here it will throw a build error, so we use react-router.
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

export function render(url) {
    const helmetContext = {}

    const html = renderToString(
        <HelmetProvider context={helmetContext}>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </HelmetProvider>
    )

    return {
        html,
        helmet: helmetContext.helmet
    }
}

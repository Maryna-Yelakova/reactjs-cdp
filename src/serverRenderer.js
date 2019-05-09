
import React from 'react';
import { renderToString }  from 'react-dom/router';
import { StaticRouter } from 'react-router-dom';
import {  AppComponent } from './app.component';

function renderHtml()

export default function serverRenderer(){
  return (req, res) =>{
    const context = {};
    const root = (
      <Root
      context = {context}
      location =  {req.url}
      Router = {StaticRouter}
      />
    );

    const htmlString = renderTostring(root);

    if(context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }
    )
  }
}

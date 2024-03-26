import { useState } from "react";
import React from "react";
import { ReactDOM } from "react";
import './card.css'
import Edittext from "./editabletext";
import FormEnterRule from "./formEnterRule";

export default function Card({ cardAdd, informations }) {


              const [h3state, setH3state] = useState(informations.h3)
              const [pstate, setPstate] = useState(informations.p1)
              const [h1state, setH1state] = useState(informations.h1)
              const [p2state, setP2state] = useState(informations.p2)
              const [imgState, setImg] = useState(informations.imgURL)

              const [typing, setTyping] = useState(false)
              const [focusElement, setFocusElement] = useState(null)
              const [alert, setAlert] = useState(null)
              const [appear, setAppear] = useState(false)


              // Editabletext komponent'ine yollanan fonksiyonlar 
              function changeText(e, tag, setState) {
                            if (tag === 'h' && e.target.value.length < 15) {
                                          setState(e.target.value)
                            } else if (tag === 'p' && e.target.value.length < 60) {
                                          setState(e.target.value)


                            } else {
                                          alert('input should be less than 10 char')
                            }


              }

              function changeActived(evt) {

                            setAlert(null)
                            if (evt.key === 'Enter') {

                                          setTyping(false)
                                          setAlert('hide')


                            }
              }
              function appearLink() {
                            setAppear(true)
              }
              function disappear() {

                            setAppear(false)

              }


              // image'ın fotosunu değiştirmek için , link vererek yapılır,

              function getNewLink() {
                            const newURL = prompt("Eklemek istediğiniz img url'ini girin : ")
                            const IsCom = newURL.includes('.com') ? true : false
                            if (IsCom) {
                                          setImg(newURL)
                            }
              }
              return (
                            <div className="card">
                                          <div>
                                                        <div className="image">
                                                                      <img className="header-image" src={imgState} onMouseOver={appearLink} onMouseLeave={disappear} onClick={getNewLink} alt="" />
                                                                      {appear ? <img src="public/img/link.png" className='link-area' alt="" /> : null}
                                                        </div>
                                                        <div className="text-area">

                                                                      <h3 className="tag" onDoubleClick={(ev) => IsTyping(ev, 'h3')}>
                                                                                    {typing && (focusElement === 'h3') ?
                                                                                                  <>
                                                                                                                <Edittext value={h3state} onChange={(e) => changeText(e, 'h', setH3state)} onKeyUp={(evt) => changeActived(evt)} />
                                                                                                                <FormEnterRule className={`form-Enter-rule ${alert} `} />
                                                                                                  </> :
                                                                                                  <span>{h3state}</span>
                                                                                    }
                                                                      </h3>
                                                                      <p className="short" onDoubleClick={(ev) => IsTyping(ev, 'p1')}>
                                                                                    {typing && (focusElement === 'p1') ?
                                                                                                  <>
                                                                                                                <Edittext value={pstate} onChange={(e) => changeText(e, 'p', setPstate)} onKeyUp={(evt) => changeActived(evt)} /> :
                                                                                                                <FormEnterRule className={`form-Enter-rule ${alert} `} />

                                                                                                  </> :
                                                                                                  <span>{pstate}</span>
                                                                                    }

                                                                      </p>
                                                                      <h1 className="header" onDoubleClick={(ev) => IsTyping(ev, 'h1')}>
                                                                                    {typing && (focusElement === 'h1') ?
                                                                                                  <>
                                                                                                                <Edittext value={h1state} onChange={(e) => changeText(e, 'h', setH1state)} onKeyUp={(evt) => changeActived(evt)} />
                                                                                                                <FormEnterRule className={`form-Enter-rule ${alert} `} />

                                                                                                  </> :
                                                                                                  <span>{h1state}</span>
                                                                                    }

                                                                      </h1>
                                                                      <p className="long" onDoubleClick={(ev) => IsTyping(ev, 'p2')}>
                                                                                    {typing && (focusElement === 'p2') ?
                                                                                                  <>
                                                                                                                <Edittext value={p2state} onChange={(e) => changeText(e, 'p', setP2state)} onKeyUp={(evt) => changeActived(evt)} />
                                                                                                                <FormEnterRule className={`form-Enter-rule ${alert} `} />
                                                                                                  </> :
                                                                                                  <span>{p2state} </span>
                                                                                    }

                                                                      </p>
                                                        </div>
                                          </div>
                                          <button className="button" onClick={cardAdd}>Add New</button>


                            </div>
              )




}
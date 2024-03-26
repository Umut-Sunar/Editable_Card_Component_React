import React, { useState } from "react";
import Card from "./components/card";

export default function App() {


              function typing(ev, tagName) {
                            setTyping(true);
                            setFocusElement(tagName)

              }

              const [input, setInput] = useState([{

                            imgURL : "public/img/cardDefault.png",
                            h3 : "Enteresan",
                            p1 : "React ile yapabileceklerini hayal et",
                            h1: "React",
                            p2 : "React oldukça karışık, yakın zamanda kodlama bakış açımız mutlaka değişip adapte olacağız",
                            key: 1
                            
                            }])
         

              function add() {
                            const newInputElement = {

                                          imgURL : "public/img/cardDefault.png",
                                          h3 : `Enteresan ${input.length+1}`,
                                          p1 : `${input.length+1} React ile yapabileceklerini hayal et`,
                                          h1: `React ${input.length+1}`,
                                          p2 : "React oldukça karışık, yakın zamanda kodlama bakış açımız mutlaka değişip adapte olacağız",
                                          key: input.length+1

                            }
                            setInput([...input,newInputElement])
                           
              };
              return (

                            <>
                                          {input.map((id) =>
                                                        <Card
                                                                      key={id.key}
                                                                      informations= {id}
                                                                      cardAdd={()=> add()}
                                                                      IsTyping= {()=> typing()}
                                                        >
                                                        </Card>
                                          )}

                            </>

              )

}

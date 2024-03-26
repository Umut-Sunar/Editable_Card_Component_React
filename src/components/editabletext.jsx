
import React, { useState } from "react";


export default function Edittext({value, onChange,onKeyUp}) {

              return (

                            <>
                                          <input
                                                        type="text"
                                                        className="form"
                                                        value={value}
                                                        onChange={onChange}
                                                        onKeyUp={onKeyUp}

                                          />
                            </>

              )
}
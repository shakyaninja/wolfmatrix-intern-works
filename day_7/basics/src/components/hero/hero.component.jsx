import React from 'react';
import { useEffect,useState } from 'react';
import './hero.css';
import typer from 'typer-js'

function Hero(props) {

    var [name,setName] = useState(props.name);
    var toggle = true;

    const changeName = () => {
      if(toggle){
        setName("Lasata Shakya");
        toggle = false;
      }else{
        setName("Luja Shakya");
        toggle = true;
      }
    }

    // typer('.type')
    //   .line('I love JavaScript.')
    //   .pause(1000)
    //   .back('all')
    //   .repeat(Infinity)

  return (
    <div className='container-fluid hero'>
        <h1 className='display-1' >Hello ! {name}</h1>
        <span className="type"></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi in architecto tempore est ex cum laboriosam, veniam eos voluptate ducimus molestias quos recusandae! Nulla laudantium beatae distinctio cumque asperiores!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rem aspernatur omnis quae hic voluptatibus aliquid quaerat commodi voluptas maxime temporibus, tempora nam corrupti vitae? Eum dolorem molestiae soluta tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rem aspernatur omnis quae hic voluptatibus aliquid quaerat commodi voluptas maxime temporibus, tempora nam corrupti vitae? Eum dolorem molestiae soluta tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rem aspernatur omnis quae hic voluptatibus aliquid quaerat commodi voluptas maxime temporibus, tempora nam corrupti vitae? Eum dolorem molestiae soluta tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rem aspernatur omnis quae hic voluptatibus aliquid quaerat commodi voluptas maxime temporibus, tempora nam corrupti vitae? Eum dolorem molestiae soluta tempora!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi in architecto tempore est ex cum laboriosam, veniam eos voluptate ducimus molestias quos recusandae! Nulla laudantium beatae distinctio cumque asperiores!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rem aspernatur omnis quae hic voluptatibus aliquid quaerat commodi voluptas maxime temporibus, tempora nam corrupti vitae? Eum dolorem molestiae soluta tempora!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi in architecto tempore est ex cum laboriosam, veniam eos voluptate ducimus molestias quos recusandae! Nulla laudantium beatae distinctio cumque asperiores!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rem aspernatur omnis quae hic voluptatibus aliquid quaerat commodi voluptas maxime temporibus, tempora nam corrupti vitae? Eum dolorem molestiae soluta tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi in architecto tempore est ex cum laboriosam, veniam eos voluptate ducimus molestias quos recusandae! Nulla laudantium beatae distinctio cumque asperiores!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rem aspernatur omnis quae hic voluptatibus aliquid quaerat commodi voluptas maxime temporibus, tempora nam corrupti vitae? Eum dolorem molestiae soluta tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi in architecto tempore est ex cum laboriosam, veniam eos voluptate ducimus molestias quos recusandae! Nulla laudantium beatae distinctio cumque asperiores!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rem aspernatur omnis quae hic voluptatibus aliquid quaerat commodi voluptas maxime temporibus, tempora nam corrupti vitae? Eum dolorem molestiae soluta tempora!</p>
        <div className="btn btn-primary" onClick={changeName}>Click me</div>
    </div>
  );
}

export default Hero;
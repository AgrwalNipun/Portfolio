import { useEffect, useState } from "react";





export const StarBackGround = ()=>{

    const [stars,setStars] = useState([]);

    useEffect(
        ()=>{
            genStars();
            genMeteors();

            window.addEventListener('resize',handleResize());

            return window.removeEventListener('resize',handleResize);
        },
        
        []
    );
    const handleResize=()=>{
        genMeteors();
        genStars();
    }



    const genStars =()=>{
    
    const noOfStars = Math.floor(
        (window.innerWidth*window.innerHeight)/10000
    );

    const newStars  = [];


    for(let i =0;i<noOfStars;i++){
        newStars.push(
             {
            id:i,
            size : Math.random()*3+1,
            x:Math.random()*100,
            y:Math.random()*100,
            opacity : Math.random()*0.5+0.5,
            animmationDuration : Math.random()*2+2,

                });
    }





    setStars(newStars);

    }




    const [meteors,setMeteors] = useState([]);

       const genMeteors =()=>{
    
    const noOfMeteors= 6;

    const newMeteors  = [];


    for(let i =0;i<noOfMeteors;i++){
        newMeteors.push(
             {
            id:i,
            size : Math.random()*2+1,
            x:Math.random()*10,
            y:Math.random()*20,
            delay : Math.random()*15,
            animmationDuration : Math.random()*3+3,

                });
    }


    


    setMeteors(newMeteors);

    }





    return <div className=" fixed inset-0 overflow-hidden pointer-events-none z-0">
        {
            stars.map( 
                (star)=>
                    {
                        return <div key={star.id} className = 'star animate-pulse-subtle' 

                        style= {
                            {
                                width :star.size+"px",
                                height :star.size+"px",
                                left :star.x+"%",
                                top :star.y+"%",
                                opacity :star.opacity,
                                animationDuration :star.animationDuration+'s',
                            }
                        }
                     />;
                    }
            )
        }
         {
            meteors.map( 
                (meteor)=>
                    {
                        return <div
  key={meteor.id}
  className="meteor animate-meteor"
  style={{
    width: meteor.size + "px",
    height: meteor.size * 30 + "px",
    left: meteor.x *10+ "%",
    top: meteor.y*5 + "%",
    animationDelay: meteor.delay + "ms",
    animationDuration: meteor.animationDuration + "s",
  }}
/>;
                    }
            )
        }
    </div>;
}
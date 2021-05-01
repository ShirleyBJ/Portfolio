window.onload = ( )=> {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');
    setTimeout(()=> {
    transition_el.classList.remove('is-active');
    },500);

    for (let i= 0 ; i< anchors.length;i++){
        const anchor = anchors[i];

        anchor.addEventListener('click',e =>{
            e.preventDefault();
            let target = e.target.href;
            //console.log(target);

            transition_el.classList.add('is-active');

            setTimeout(() =>{
                window.location.href = target;
            },500)
        });
    }
}

/**Image sliders effect**/

var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1 ;
    }
},5000);
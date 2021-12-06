window.onload= ()=>{
    let $= (algo)=>{
        return document.querySelector(algo)
    }

    let funcValidate = (obj)=>{
        let arr=Object.values(validate)
        if (!arr.includes(false)){
            button.disabled = false
            button.classList.remove("bttn-invalid")
        } else{
            button.disabled = true
            button.classList.add("bttn-invalid")
        }
    }

    let button = $("button.botonAgregar")

    let title = $("#title")
    let smallTitle = $(".title")

    let form = $("form")
    
    let awards = $("#awards")
    let smallAw = $(".awards")
    
    let rating = $("#rating")
    let smallRating= $(".rating")

    let length = $("#length")
    let smallLength= $(".length")

    let genre = $("#genre_id")
    let smallGenre = $(".genre_id")

    let date = $("#date")
    let smallDate = $(".date")

    title.focus()

    let validate = {
        title: false,
        awards: false,
        rating: false,
        length: false,
        genre:false,
        date:false
    }   

    button.disabled=true
    button.classList.add("bttn-invalid")


    let inputs = document.querySelectorAll("input")
    let smalls = document.querySelectorAll("small")
    let select = $("select")

    title.addEventListener("input",(e)=>{
        if(e.target.value.length<3){
            title.classList.remove("is-valid")
            title.classList.add("is-invalid")
            smallTitle.innerHTML= "El titulo debe tener mas de 2 caracteres"
            smallTitle.classList.add("is-invalid")
            validate.title=false

        } else{
            title.classList.remove("is-invalid")
            title.classList.add("is-valid")
            smallTitle.innerHTML= ""
            smallTitle.classList.remove("is-invalid")
            validate.title=true
        }

        funcValidate(validate)
    })


    rating.addEventListener("input",(e)=>{
        if(e.target.value<0||e.target.value>10){
            rating.classList.remove("is-valid")
            rating.classList.add("is-invalid")
            smallRating.innerHTML="El rating debe estar entre 0 y 10"
            smallRating.classList.add("is-invalid")
            validate.rating=false

        } else{
            rating.classList.remove("is-invalid")
            rating.classList.add("is-valid")
            smallRating.innerHTML=""
            smallRating.classList.remove("is-invalid")
            validate.rating=true
        }

        funcValidate(validate)
    })

    awards.addEventListener("input",(e)=>{
        if(e.target.value <0 || e.target.value >10){
            awards.classList.remove("is-valid")
            awards.classList.add("is-invalid")
            smallAw.innerHTML = "el numero de premido debe ser entre 0 y 10"
            smallAw.classList.add("is-invalid")
            validate.awards=false
        } else{
            awards.classList.remove("is-invalid")
            awards.classList.add("is-valid")
            smallAw.innerHTML= ""
            smallAw.classList.remove("is-invalid")
            validate.awards=true
        }

        funcValidate(validate)
    })

    length.addEventListener("input",(e)=>{
        if(e.target.value<60 || e.target.value>360){
            length.classList.remove("is-valid")
            length.classList.add("is-invalid")
            smallLength.innerHTML = "La duracion debe ser entre 60(min) y 360(min)"
            smallLength.classList.add("is-invalid")
            validate.length=false
        }else{
            length.classList.remove("is-invalid")
            length.classList.add("is-valid")
            smallLength.innerHTML=""
            smallLength.classList.remove("is-invalid")
            validate.length=true
        }
        
        funcValidate(validate)

        
        
    })

    genre.addEventListener("input",(e)=>{
        if(e.target.value<1 || e.target.value>12){
            genre.classList.remove("is-valid")
            genre.classList.add("is-invalid")
            smallGenre.innerHTML= "Debes elegir una opcion"
            smallGenre.classList.add("is-invalid")
            validate.genre=false
        }else{
            genre.classList.remove("is-invalid")
            genre.classList.add("is-valid")
            smallGenre.innerHTML=""
            smallGenre.classList.remove("is-invalid")
            validate.genre=true
        }

        funcValidate(validate)

    })

    date.addEventListener("input",(e)=>{
        const now = new Date() 
        let dateMovie = Date.parse(e.target.value)
        let actual = Date.parse(now)

       
        if (actual<dateMovie){
            date.classList.remove("is-valid")
            date.classList.add("is-invalid")
            smallDate.innerHTML= "La fecha de tiene que ser anterio a la actual"
            smallDate.classList.add("is-invalid")
            validate.date=false
        }else{
            date.classList.remove("is-invalid")
            date.classList.add("is-valid")
            smallDate.innerHTML=""
            smallDate.classList.remove("is-invalid")
            validate.date=true
        }
        funcValidate(validate)
    })





    form.addEventListener("submit",(event)=>{
        
        for(let i= 0;i<inputs.length;i++){
            if(inputs[i].value ===""){
                event.preventDefault()
               inputs[i].classList.add("is-invalid")
               smalls[i].innerHTML="Este campo no debe estar vacio"
               smalls[i].classList.add("is-invalid")
               button.disabled = true 

            }else if(inputs[i].classList.contains("is-invalid")){
                inputs[i].classList.remove("is-invalid")
                smalls[i].innerHTML=""
                smalls[i].classList.remove("is-invalid")
                button.disabled = false
                button.classList.remove("bttn-invalid")
            }
        }

        if (awards.value>10 || awards.value<0){
            event.preventDefault()
            smallAw.innerHTML = "Los premios deben estar entre 0 y 10"
            awards.classList.add("is-invalid")
            smallAw.classList.add("is-invalid")
        }

        
        if (rating.value>10 || rating.value<0){
            event.preventDefault()
            smallRating.innerHTML = "El rating de estar entre 0 y 10"
            rating.classList.add("is-invalid")
            smallRating.classList.add("is-invalid")
        }

        if (length.value<60|| length.value>360){
            event.preventDefault()
            smallLength.innerHTML = "La duracion debe ser entre 60(min) y 360(min)"
            length.classList.add("is-invalid")
            smallLength.classList.add("is-invalid")
        }

        if (select.value===""){
            event.preventDefault()
            select.classList.add("is-invalid")
            smalls[5].innerHTML="Este campo no debe estar vacio"
            smalls[5].classList.add("is-invalid") 

        }else if (select.classList.contains("is-invalid")){
            select.classList.remove("is-invalid")
            smalls[5].innerHTML=""
            smalls[5].classList.remove("is-invalid") 
        }



    })




}
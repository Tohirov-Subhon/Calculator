let img = document.querySelector('.img1')
let fi = document.querySelector('.fi')
let first = document.querySelector('.first')
let img2 = document.querySelector('.img2')


img.onclick = () => {
    fi.style.display = 'block'
    first.style.display = 'none'
}


img2.onclick = () => {
    fi.style.display = 'none'
    first.style.display = 'block'
}


let cnt = 0
let cnt2 = 0

function insert (num){
    document.form.textView.value = 
    document.form.textView.value + num

    cnt = 0
    
}

function clean () {
    document.form.textView.value = ' '
    document.form2.textView2.value = ' '

     document.form.textView.style.color = "white"

}

function back () {
    let exp = document.form.textView.value
    document.form.textView.value = exp.substring(0, exp.length - 1)
}



function equal () {
    exp = document.form.textView.value

    if (exp){

        document.form2.textView2.value = eval(exp)
        document.form.textView.style.color = "gray" 
    }

    cnt = 0
}



function bluuee (num) {
    cnt ++
    if (cnt <= 1){
    document.form.textView.value = 
    document.form.textView.value + num
    }

    
 
}



function insert1 (num){

    cnt2 ++

    if (cnt2 <= 1){
    document.form.textView.value = 
    document.form.textView.value + "("
    }

    else if (cnt2 <= 2){
        document.form.textView.value = 
    document.form.textView.value + ")"
    cnt2 = 0
    }
    
}


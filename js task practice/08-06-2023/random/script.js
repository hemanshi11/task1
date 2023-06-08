

const getcolor =()=>{
        const rendomnumber = Math.floor(Math.random() * 16777215);
        // console.log(rendomcolor);
        const rendomcolor = '#'+ rendomnumber.toString(16)
        // console.log(rendomnumber, rendomcolor)
        document.body.style.backgroundColor = rendomcolor;
        document.getElementById('color').innerText = rendomcolor;

}



// const btn = document.querySelector('.btn');
document.getElementById('btn').addEventListener('click', getcolor)


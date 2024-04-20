function qr(){
    let container=document.getElementById("container") ;
    let imgBox=document.getElementById("imgBox") ;
    let qrText=document.getElementById("qrText") ;
    let qrImg=document.getElementById("qrImg") ;
    let qrPath="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" ;
    
    if(qrText.value==""){
        document.querySelector("small").hidden=false ;
        qrText.classList.add("error");
    }
    else{
    qrImg.src=qrPath+qrText.value ;
    imgBox.classList.add("show-img") ;
    container.classList.add("show-img") ;
    document.querySelector("small").hidden=true;
    }
}

function qrDownload(){
    if(qrText.value==""){
        document.querySelector("small").hidden=false ;
        qrText.classList.add("error");
    }
    else{
    let qrPath="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" ;
    let qrText=document.getElementById("qrText") ;
    qrFullPath=qrPath+qrText.value ;
    qrName=qrText.value ;
    saveAs(qrFullPath,qrName) ;
    document.querySelector("small").hidden=true;
    }
}
const imgage_input=document.querySelector("#imgage_input");
var uploaded_image="";

imgage_input.addEventListener("change"),function(){
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    
    });
    reader.readAsDataURL(this.files[0]);
}
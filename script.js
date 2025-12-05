document.addEventListener("DOMContentLoaded",function(){

    var endpoint= "https://formspree.io/f/xjknowgk";

    var form = document.getElementById("enquiryForm");

    if(form){
        form.addEventListener("submit",function(event){
            event.preventDefault();

            var name= form.name.value.trim();
            var email= form.email.value.trim();
            var phone= form.phone.value.trim();
            var message= form.message.value.trim();
            var subject= "";
            if(form.subject){
                subject = form.subject.value.trim();
                
            }

            if(!name||!email||!phone||!message){
                alert("Please fill the required fields!")
                return;
            }
            if (!email.includes("@") || !email.includes(".")){
                alert("Enter a valid email!")
                return;
            }
            
            var formData={
                name:name,
                email:email,
                phone:phone,
                subject:subject,
                message:message
            };

            fetch(endpoint,{
                method:"POST",
                headers:{
                    "content-Type":"application/json",
                    "Accept":"application/json"
                },
                body:JSON.stringify(formData)
            })
            .then(function(response){
                if(response.ok){
                    alert("Your enquiry has been sent.");
                    form.reset();
                }
                else{
                    alert("Error. Please try again.")
                }
            })
            .catch(function(error){
                alert("Network error. Please try again.")
                console.log(error)
            }
        )
        })
    }
})
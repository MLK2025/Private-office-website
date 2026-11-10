"use strict";
document.addEventListener("DOMContentLoaded",function(){
  var form=document.querySelector(".enquiry-form");
  if(!form)return;
  var requested=new URLSearchParams(window.location.search).get("service");
  var serviceSelect=form.querySelector('select[name="service"]');
  if(requested&&serviceSelect&&Array.from(serviceSelect.options).some(function(option){return option.value===requested;}))serviceSelect.value=requested;
  form.addEventListener("submit",function(event){
    event.preventDefault();
    var data=Object.fromEntries(new FormData(form).entries());
    if(String(data.companyFax||"").trim()){
      form.reset();
      return;
    }
    var subject="Website enquiry: "+(data.service||"General enquiry")+" — "+(data.organisation||data.fullName||"Website visitor");
    var body=[
      "Full name: "+(data.fullName||""),
      "Position or title: "+(data.position||""),
      "Organisation: "+(data.organisation||""),
      "Country: "+(data.country||""),
      "Official email: "+(data.email||""),
      "Telephone: "+(data.telephone||""),
      "Website: "+(data.website||""),
      "Service required: "+(data.service||""),
      "Preferred period: "+(data.preferredPeriod||""),
      "Participants: "+(data.participants||""),
      "",
      "Purpose of enquiry:",
      data.purpose||""
    ].join("\n");
    window.location.assign("mailto:info@privateofficeofdon.com?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body));
    var message=form.querySelector(".form-message");
    if(!message){message=document.createElement("p");message.className="form-message success";message.setAttribute("role","status");form.appendChild(message);}
    message.textContent="Your email application is opening with the enquiry addressed to info@privateofficeofdon.com. Please review it and press Send.";
  });
});

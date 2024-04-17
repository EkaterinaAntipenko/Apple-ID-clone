
window.onload = function() {
    var birthday = document.getElementById("birthday");
    var dateInputMask = function dateInputMask(elm) {
        elm.addEventListener('keypress', function(e) {
            if(e.keyCode < 47 || e.keyCode > 57) {
                e.preventDefault();
              }

              var len = elm.value.length;

              if(len !== 1 || len !== 3) {

                if(e.keyCode == 47) {
                  e.preventDefault();
                }
            }

            if(len === 2) {
                elm.value += '.';
              }

            if(len === 5) {
                elm.value += '.';
            }

            if(len > 10) {
                elm.value.split().pop();
            }

        })
    }

    dateInputMask(birthday);
    const count = {"name": 0, "surname": "0", "country": "Russia",
    "birthday": 0, "email": 0, "password": "0",
    "phone": 0, "verify": "txt", "announcments": true, 
    "musicTVMore": true, "news": true, "capcha": 0
 };

    const formElement = document.getElementById("inputs");
    let securityButton = document.getElementById("securityButton");
    formElement.addEventListener("submit", (e) => {

        e.preventDefault();
        const formData = new FormData(formElement);
        if (formData.get("nameInput") != "") {
            console.log("имя: " + formData.get("nameInput"))
            count["name"] = formData.get("nameInput"); 
            document.getElementById("nameInput").style.border="0.15vw #d6d6d6 solid";
        } else {
            document.getElementById("nameInput").style.border="0.15vw red solid";
        }

        if (formData.get("SurNameInput") != "") {
            console.log("фамилия: " + formData.get("SurNameInput"))
            count["surname"] = formData.get("SurNameInput"); 
            document.getElementById("surNameInput").style.border="0.15vw #d6d6d6 solid";
        } else {
            document.getElementById("surNameInput").style.border="0.15vw red solid";
        } 

        console.log("страна: " + formData.get("country"))
        count["country"] = formData.get("country"); 

        if (formData.get("birthday") != "") {
            if (formData.get("birthday").length == 10) {
                if (formData.get("birthday").split(".")[0] <= 31 && formData.get("birthday").split(".")[0] > 0) {
                    if (formData.get("birthday").split(".")[1] <= 12 && formData.get("birthday").split(".")[1] > 0) {
                        if (formData.get("birthday").split(".")[2] <= 2024 && formData.get("birthday").split(".")[2] > 1900) {
                            console.log("день рождения: " + formData.get("birthday"))
                            count["birthday"] = formData.get("birthday"); 
                            document.getElementById("birthday").style.border="0.15vw #d6d6d6 solid";
                    
                        } else {
                             document.getElementById("birthday").style.border="0.15vw red solid";
                        }
                    } else {
                        document.getElementById("birthday").style.border="0.15vw red solid";
                   }
                } else {
                    document.getElementById("birthday").style.border="0.15vw red solid";
               }
            } else {
                document.getElementById("birthday").style.border="0.15vw red solid";
           }
            console.log("день рождения: " + formData.get("birthday"))
            count["birthday"] = formData.get("birthday"); 
        } else {
            document.getElementById("birthday").style.border="0.15vw red solid";
       }

        if (formData.get("email") != "") {
            if (formData.get("email").split("").includes("@")) {
                if ((formData.get("email").split("").includes("."))) {
                    count["email"] = formData.get("email"); 
                    document.getElementById("email").style.border="0.15vw #d6d6d6 solid";
                } else {
                    document.getElementById("email").style.border="0.15vw red solid";
                }

            } else {
                document.getElementById("email").style.border="0.15vw red solid";
            } 
        } else {
            document.getElementById("email").style.border="0.15vw red solid";
        }


        if (formData.get("password") != "") {
            if (formData.get("password") == formData.get("confPassword")) {
                console.log("пароль: " + formData.get("password"))
                console.log("подтверждение пароль: " + formData.get("confPassword"))
                count["password"] = formData.get("password"); 
                document.getElementById("password").style.border="0.15vw #d6d6d6 solid";
                document.getElementById("confPassword").style.border="0.15vw #d6d6d6 solid";
            } else {
                document.getElementById("password").style.border="0.15vw red solid";
                document.getElementById("confPassword").style.border="0.15vw red solid";
            }
        } else {
            document.getElementById("password").style.border="0.15vw red solid";
            document.getElementById("confPassword").style.border="0.15vw red solid";
        }

        if (formData.get("phone") != "") {
            console.log("код страны: " + formData.get("phoneCode"))
            console.log("номер: " + formData.get("phone"))
            count["phone"] = formData.get("phoneCode") + formData.get("phone"); 
            document.getElementById("phoneNum").style.border="0.15vw #d6d6d6 solid";
        } else {
            document.getElementById("phoneNum").style.border="0.15vw red solid";
        }

        console.log("подтверждение: " + formData.get("messageOrPhone"))
        count["verify"] = formData.get("messageOrPhone");

        console.log("анонсы: " + formData.get("announcements"))
        count["announcements"] = formData.get("announcements");

        console.log("музыкаТВиДругое: " + formData.get("musicTVMore"))
        count["musicTVMore"] = formData.get("musicTVMore");

        console.log("музыкаТВиДругое: " + formData.get("news"))
        count["news"] = formData.get("news");
        
        if (formData.get("capcha")!= "") {
            console.log("капча: " + formData.get("capcha"))
            count["capcha"] = formData.get("capcha"); 
            document.getElementById("capchaInput").style.border="0.15vw #d6d6d6 solid";
        } else {
            document.getElementById("capchaInput").style.border="0.15vw red solid";
        }

        console.log(count)
        
    })


}
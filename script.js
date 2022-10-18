let imgs= [ "abdulfattah.jpg","baris.jpg", "fatih.jpg", "julia.jpg","sadettin.jpg", "sevim.jpg", "ali.jpg", "bilal.jpg", "hasan.jpg", "murat.jpg", "samil.jpg", "tuba.jpg", "ari.jpg","emin.jpg", "ismet.jpg", "oguz.jpg", "senay.jpg", "yusuf.jpg", "arwa.jpg", "enes.jpg", "jothi.jpg","olena.jpg", "serkan.jpg"]

let container = document.getElementById("container");

// function createImageNode(imgSrc) {
//     let img = document.createElement('img');
//     img.src = imgSrc;
//     img.width = "200";
//     img.style.margin= "10px";
//     img.style.padding="0.5em";
//     img.style.border = "2px solid #1a2e45";
//     return img;
// }

// imgs.forEach(img => { 
//     container.appendChild(createImageNode(img));
// })


    let members = [{fname: "Abdul Fatah SHIERYAR", 
                    country:"AFGHANISTAN", 
                    canton: "Zurich", 
                    email: "abdulfatah.shieryar@powercoders.org", 
                    intro: "ICT Engineer with 9+ years of experience in IT and Telecommunication field. Obtained appreciation award in 4G/LTE project. Seeking to leverage solid technical skills and abilities to advance my career."}, 
                {         
                    fname: "Baris DURUCAN", 
                    country:"TURKEY", 
                    canton: "Vaud", 
                    email: "baris.durucan@powercoders.org", 
                    intro:""
                },
                {
                    fname: "Fatih YAVUZ",
                    country:"TURKEY", 
                    canton: "Valais", 
                    email: "fatih.yavuz@powercoders.org", 
                    intro:""
                },
                {
                    fname: "Yuliia KUTS",
                    country:"UKRAINE", 
                    canton: "Vaud", 
                    email: "fatih.yavuz@powercoders.org", 
                    intro:""
                },
                {
                    fname: "Sadettin KARATAS",
                    country:"TURKEY", 
                    canton: "Geneva", 
                    email: "sadettin.karatas@powercoders.org", 
                    intro:""
                },
                {
                    fname:"Sevim GOKTURK",
                    country:"TURKEY", 
                    canton: "Lausanne", 
                    email: "sevim.gokturk@powercoders.org", 
                    intro:""
                },
                {
                    fname:"Ali GOCMEN",
                    country:"TURKEY", 
                    canton: "Bern", 
                    email: "ali.gocmen@powercoders.org", 
                    intro:""
                },
                {
                    fname:"Muhammad Bilal SULAIMANKHIL",
                    country:"AFGHANISTAN", 
                    canton: "Bern", 
                    email: "bilal.sulaimankhil@powercoders.org", 
                    intro:""
                },
                {
                    fname:"Hasan DANACI",
                    country:"TURKEY", 
                    canton: "Bern", 
                    email: "hasan.danaci@powercoders.org", 
                    intro:""
                },
                {
                    fname: "Murat GULDIBI",
                    country:"TURKEY", 
                    canton: "Zurich", 
                    email: "murat.guldibi@powercoders.org", 
                    intro:""
                },
                {
                    fname: "Shamil IDRISOV",
                    country:"RUSSIA", 
                    canton: "Bern", 
                    email: "shamil.idrisov@powercoders.org", 
                    intro:""

                },
                {
                    fname: "Kadriye Tuba TURKCAN KARACA",
                    country:"TURKEY", 
                    canton: "Schwyz", 
                    email: "tuba.turkcankaraca@powercoders.org", 
                    intro:""
                },
                {
                    fname: "Ni Luh ARIANI",
                    country:"INDONESIA", 
                    canton: "Aargau", 
                    email: "ariani.niluh@powercoders.org", 
                    intro:""
                },
                {
                    fname: "Emin Samed YILMAZ",
                    country:"TURKEY", 
                    canton: "Luzern", 
                    email: "emin.yilmaz@powercoders.org", 
                    intro:""
                },
                {
                    fname: "Ismet BAKAY",
                    country:"TURKEY", 
                    canton: "Luzern", 
                    email: "emin.yilmaz@powercoders.org", 
                    intro: "I worked as a geological engineer in Turkey.After coming to Switzerland, I planned a new career and completed my IT education last year. I am currently volunteering as a mentor and looking forward to a job position where I can demonstrate my IT skills. I believe that I am an ideal candidate, especially for positions that require being a team player. I am a positive,cheerful and friendly person.",
                },
                {
                    fname: "Oguz YILDIZ",
                    country:"TURKEY", 
                    canton: "Aargau", 
                    email: "oguz.yildiz@powercoders.org", 
                    intro: "Software Developer with 8 years of experience. Passionate about developing and collaborating. Well-organized and self-motivated. Seeking to be in a position to use my skills and always eager to learn new technologies. I’m ready to be a member of your team."
                },
                {
                    fname: "Senay ATLI",
                    country:"TURKEY", 
                    canton: "Vallais", 
                    email: "senay.atli@powercoders.org", 
                    intro: "As a holder of a bachelor in Mathematical Engineering and 2 years of front-end developer experience, I am looking forward to a challenging position to make the best use of my experience and my various IT skills."
                },
                {
                    fname: "Yusuf ILHAN",
                    country:"TURKEY", 
                    canton: "Bern", 
                    email: "yusuf.ilhan@powercoders.org", 
                    intro: "Certified Cyber Security Analyst with hands-on experience in the SOCenvironment using Splunk SIEM, IBM QRadar,Crowdstrike, and SentinelOne. 7 years experience in Management, Coordination and Organization.Detail-oriented, cross-functional team member with strong problem solving and communication skills."

                },
                {
                    fname: "Arwa ALHUSSEIN",
                    country:"SYRIA", 
                    canton: "Valais", 
                    email: "arwa.alhussein@powercoders.org", 
                    intro: "Highly numerate individual with strong communication, business, and computer skills.Bachelor’s degree in Law, HND in Meteorology and more than 15 years in the workforce. A true team player with strong collaboration skills and a mindset that always strives to find best practice development, now seeking a career switch position in the IT area."

                },
                {
                    fname: "Enes BORA",
                    country:"TURKEY", 
                    canton: "Luzern", 
                    email: "enes.bora@powercoders.org", 
                    intro: "Passionate, enthusiastic and self-motivated CompTIA Security+ certified Cyber Security Analyst with 13 years of professional experience in Journalism and Math teaching. A true team player with strong collaboration skills and a mindset that always strives to find best practice development, now seeking a career switch position in the field of cybersecurity."

                },
                {
                    fname: "Jyothi JOGIN",
                    country:"INDIA", 
                    canton: "Aargau", 
                    email: "jyothi.jogin@powercoders.org", 
                    intro: "A Bachelor of Technology in Computer Science & Engineering, highly motivated, enthusiastic and passionate about programming, seeking an opportunity to restart a career in the IT field."
                },
                {
                    fname: "Olena SMETIUK",
                    country:"UKRANIA", 
                    canton: "Bern", 
                    email: "olena.smetiukl@powercoders.org", 
                    intro: "I am a person with a methodological mindset and with extensive experience in self-development. Being a good team player, I get along with new people easily and work for the team goals. I have a PhD in Medicine and over 11 years of experience in science and teaching. Currently I switched from medical sciences to IT, where I see opportunities for my further development and application of my abilities."
                },
                {
                    fname: "Serkan TASGIN",
                    country:"TURKEY", 
                    canton: "Bern", 
                    email: "serkan.tasgin@powercoders.org", 
                    intro: "Cybersecurity enthusiast with 17 years of professional experience in public security, personnel management and crisis management. High problem solving skills, strong communication and analytic skills, intercultural competence, flexibility, åindependent and responsible way of working."
                }

                 ] 


function flip_fade(imgElement) {
    console.log(imgElement);
    imgElement.style.transform = "rotateY(0.5turn)";
    // console.log(imgElement.parentElement.getElementsByClassName('info'));
    console.log(imgElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);
    imgElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.visibility = "visible";
    imgElement.style.opacity = "0.5";
    let profile_button = document.getElementsByClassName("back_visible");
    profile_button.style.visibility = "visible";
    // let btn = document.createElement("BUTTON");
    // btn.innerHTML = "Profile";
    // imgElement.nextSibling.nextSibling.nextSibling.nextSibling.insertAdjacentHTML("beforeend",btn);
    // 
    // imgElement.appenChild(btn);
    // btn.style.fontSize = "14px";
    // btn.style.backgroundColor = "pink";
    // btn.style.bottom = "0";

    // imgElement.style.visibility = "hidden";
    // imgElement.style.filter = "blur(15.rem)";
    // imgElement.style.visibility = "hidden";
    // imgElement.nextSibling = `
    // <li>
    // <div class="name">
    //     <p>
    //         Merhaba
    //     </p>

    // </div>

    // </li>
    //  `
}

//function flip_show(textElement){
    // textElement.style.transform = "rotateY(0.5turn)";
    //textElement.previousSibling.previousSibling.previousSibling.previousSibling.style.visibility = "visible";
    // textElement.style.visibility = "hidden";
    
//}

function flip_show(imgElement) {
    imgElement.style.transform = "rotateY(0.5turn)";
    imgElement.nextSibling.nextSibling.nextSibling.nextSibling.style.visibility = "hidden";
}

//onclick = "flip_show(this)"
function button(button){
    console.log(button.nextSibling.nextSibling.nextSibling.nextSibling);
    button.nextSibling.nextSibling.nextSibling.nextSibling.style.visibility="visible";

}


let str = "";
str += "<ul>";
for (let i=0; i< members.length; i++) {
    let person = members[i];
    let name = person.fname;
    let image = imgs[i];
    let intro = person.intro;
    let country = person.country;
    let canton = person.canton;
    let email = person.email;

    
    str+= `<li  >
                <div class= "name" >
                    <img src=${image} onclick = "flip_fade(this) " >  
                    <p> ${name}  </p> 
                    <button class = "back_visible" onclick= "button(this)"> Profile</button>
                    <div class= "info"  > 
                        Country: ${country} <br>
                        Canton: ${canton}<br>
                        Email: ${email}
                    </div>
                    <div class= "profile">
                        ${intro}
                    </div>
                </div>
            </li> 
            `;

            console.log(10);
    
    
}
str+= "</ul>";
container.insertAdjacentHTML("beforeend",str) ;



//  function hovername(member) {


//  }












// let paragraphs = Array.from(document.getElementsByTagName("p"));


// paragraphs.forEach(element => { element.style.backgroundImage = "url('images/)"
    
// });
 
// for (let i=0; i<imgs.length; i++ ) {
//     //This code creates a new <p> element:
//     let para = document.createElement("p");
//     //To add text to the <p> element, you must create a text node first. This code creates a text node:
//     let node = document.createTextNode("");
//     //Finally you must append the new element to an existing element.
//     //This code finds an existing element:
//     para.appendChild(node);
//     para.style.backgroundImage = "url('images/${imgs[i]}')"
//     const cont = document.getElementById("container");
//     //This code appends the new element to the existing element:
//     cont.appendChild(para);
// }

// document.getElementsByTagName("p").style.backgroundImage = "url('images/bilal.jpg')";
// para.appendChild(node);











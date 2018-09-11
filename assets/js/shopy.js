var deployMore = document.querySelector("#deployMore");
var more = document.querySelector('#more');
var saleSlider = document.querySelector('#saleSlider');
var iconSearch = document.querySelector('#icon-search');
var fund = document.querySelector('#fund');

// ==================================================
                // deplymore
// =================================================//
deployMore.addEventListener('click',function(){
    more.classList.toggle('desapear');
}); 

// ==================================================
                // input search
// =================================================//
iconSearch.addEventListener('click',function(){
    fund.classList.toggle('desapear');
});


// ==================================================
                // saleSlider
// =================================================//
$(function(){
    $("#saleSlider").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:400,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        center:true,
        dots:false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


let men = document.getElementById("man");
let women = document.getElementById("women");
let childrens = document.getElementById("childrens");
let hot = document.getElementById("hot");
let sm = document.getElementById("sm");
let md = document.getElementById("md");
let lg = document.getElementById("lg");
let xl = document.getElementById("xl");
let rebook = document.getElementById("rebook");
let addidas = document.getElementById("addidas");
let nike = document.getElementById("nike");
let active = document.getElementById("active");
let template = document.getElementById('template');
let obj = {
    "status" : "ok",
    "results": [
        {
            "cat" : "women",
            "price" : "120",
            "title":"Reebok Track Jacket",
            "size" : ["md","lg","xl"],
            "brand" : "nike",
            "color" : ["color-1","color-4","color-2","color-3"],
            "mediaURL": "https://home.ripley.cl/store/Attachment/WOP/D317/2000357423895/2000357423895_2.jpg"
        },
        {
            "cat" : "childrens",
            "price" : "150",
            "title":"Reebok Track Jacket",
            "size" : ["lg","xl"],
            "brand" : "addidas",
            "color" : ["color-4","color-2","color-1"],
            "mediaURL": "https://ae01.alicdn.com/kf/HTB15R2HJVXXXXX4XFXXq6xXFXXXt/Men-Military-Army-jackets-plus-size-6XL-Brand-2016-Hot-cost-outerwear-embroidery-mens-jacket-for.jpg_640x640.jpg"
        },
        {
            "cat" : "man",
            "price" : "230",
            "title":"Reebok Track Jacket",
            "size" : ["sm"],
            "brand" : "nike",
            "color" : ["color-1","color-4","color-2"],
            "mediaURL": "https://www.ripley.com.pe/wcsstore/ripleype_CAT_AS/Attachment/WOP_4/2025201654225/2025201654225_2.jpg"
        },
        {
            "cat" : "man",
            "price" : "260",
            "title":"Reebok Track Jacket",
            "size" : ["md","lg"],
            "brand" : "nike",
            "color" : ["color-4","color-2","color-3"],
            "mediaURL": "https://home.ripley.cl/store/Attachment/WOP/D317/2000357423895/2000357423895_2.jpg"
        },
        {
            "cat" : "childrens",
            "price" : "290",
            "title":"Reebok Track Jacket",
            "size" : ["sm","lg"],
            "brand" : "addidas",
            "color" : ["color-4","color-2"],
            "mediaURL": "https://home.ripley.cl/store/Attachment/WOP/D317/2000357423895/2000357423895_2.jpg"
        },
        {
            "cat" : "hot",
            "price" : "350",
            "title":"Reebok Track Jacket",
            "size" : ["md"],
            "brand" : "rebook",
            "color" : ["color-1","color-4","color-2"],
            "mediaURL": "https://home.ripley.cl/store/Attachment/WOP/D317/2000357423895/2000357423895_2.jpg"
        },
        {
            "cat" : "women",
            "price" : "360",
            "title":"Reebok Track Jacket",
            "size" : ["sm","xl"],
            "brand" : "nike",
            "color" : ["color-1","color-4","color-2","color-3"],
            "mediaURL": "https://home.ripley.cl/store/Attachment/WOP/D317/2000357423895/2000357423895_2.jpg"
        },
        {
            "cat" : "man",
            "price" : "110",
            "title":"Reebok Track Jacket",
            "size" : ["lg"],
            "brand" : "active",
            "color" : ["color-2","color-3"],
            "mediaURL": "https://home.ripley.cl/store/Attachment/WOP/D317/2000357423895/2000357423895_2.jpg"
        },
        {
            "cat" : "hot",
            "price" : "220",
            "title":"Reebok Track Jacket",
            "size" : ["md"],
            "brand" : "addidas",
            "color" : ["color-1","color-4"],
            "mediaURL": "https://home.ripley.cl/store/Attachment/WOP/D317/2000357423895/2000357423895_2.jpg"
        }
    ]
};

var saveMark = "";
for(x=0 ; x<obj.results.length ; x++){
    var markup=
        `<div class="col-md-4 padd-bot">
            <div class="jacket  text-center" id="idd1">
                <div class="jack-img">
                    <img class="img-fluid" src="${obj.results[x].mediaURL}" alt="red jacket">
                </div>
                <p>${obj.results[x].title}</p>
                <span>${obj.results[x].price}</span>
                <div class="home-overlay">
                    <div class="img-hover-size">
                        <img src="${obj.results[x].mediaURL}" alt="red jacket">
                    </div>
                    <h4>${obj.results[x].title}</h4>
                    <p>Sizes : ${obj.results[x].size.map(siz =>`${siz}`).join(' - ')}</p>
                    <ul class="colors">
                        ${obj.results[x].color.map(colo => `<li class="${colo}"></li>`).join(' ')}
                    </ul>
                    <hr>
                    <div class="icons-overlay">
                        <i class="fa fa-globe"></i>
                        <i class="fa fa-shopping-basket"></i>
                        <i class="fa fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>`
    ;
    saveMark=saveMark + markup;
}
template.innerHTML=saveMark;

// console.log(Object.values(shop_arr.results));

function searchBy(shop_arr, id, item) {
    let result = [];
    
    Object.keys(shop_arr.results).map(function(key) {

        let obj = shop_arr.results[key]; 

        if (obj[id] == item) result.push(obj);

        if (Array.isArray(obj[id])) {
            for (let i = 0; i < obj[id].length; i++) {
                if (obj[id][i] == item) result.push(obj);
            }
        }
    });

    return result;
}

men.addEventListener("click",function(){
    var saveMark2 = "";
    for(con=0 ; con<searchBy(obj, "cat",men.id).length ; con++){
        var markup2=
        `<div class="col-md-4 padd-bot">
            <div class="jacket  text-center" id="idd1">
                <img class="img-fluid" src="${searchBy(obj, "cat",men.id)[con].mediaURL}" alt="red jacket">
                <p>${searchBy(obj, "cat",men.id)[con].title}</p>
                <span>${searchBy(obj, "cat",men.id)[con].price}</span>
                <div class="home-overlay">
                    <div class="img-hover-size">
                        <img src="${searchBy(obj, "cat",men.id)[con].mediaURL}" alt="red jacket">
                    </div>
                    <h4>${searchBy(obj, "cat",men.id)[con].title}</h4>
                    <p>Sizes : ${searchBy(obj, "cat",men.id)[con].size.map(siz =>`${siz}`).join(' - ')}</p>
                    <ul class="colors">
                        ${searchBy(obj, "cat",men.id)[con].color.map(colo => `<li class="${colo}"></li>`).join(' ')}
                    </ul>
                    <hr>
                    <div class="icons-overlay">
                        <i class="fa fa-globe"></i>
                        <i class="fa fa-shopping-basket"></i>
                        <i class="fa fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>`
    ;
    saveMark2=saveMark2 + markup2;
    }
    template.innerHTML=saveMark2;
})
women.addEventListener("click",function(){
    var saveMark3 = "";
    for(con=0 ; con<searchBy(obj, "cat",women.id).length ; con++){
        var markup3=`
        <div class="col-md-4 padd-bot">
            <div class="jacket  text-center" id="idd1">
                <img class="img-fluid" src="${searchBy(obj, "cat",women.id)[con].mediaURL}" alt="red jacket">
                <p>${searchBy(obj, "cat",women.id)[con].title}</p>
                <span>${searchBy(obj, "cat",women.id)[con].price}</span>
                <div class="home-overlay">
                    <div class="img-hover-size">
                        <img src="${searchBy(obj, "cat",women.id)[con].mediaURL}" alt="red jacket">
                    </div>
                    <h4>${searchBy(obj, "cat",women.id)[con].title}</h4>
                    <p>Sizes : ${searchBy(obj, "cat",women.id)[con].size.map(siz =>`${siz}`).join(' - ')}</p>
                    <ul class="colors">
                        ${searchBy(obj, "cat",women.id)[con].color.map(colo => `<li class="${colo}"></li>`).join(' ')}
                    </ul>
                    <hr>
                    <div class="icons-overlay">
                        <i class="fa fa-globe"></i>
                        <i class="fa fa-shopping-basket"></i>
                        <i class="fa fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    saveMark3=saveMark3 + markup3;
    }
    template.innerHTML=saveMark3;
})
childrens.addEventListener("click",function(){
    var saveMark4 = "";
    for(con=0 ; con<searchBy(obj, "cat",childrens.id).length ; con++){
        var markup4=`
        <div class="col-md-4 padd-bot">
            <div class="jacket  text-center" id="idd1">
                <img class="img-fluid" src="${searchBy(obj, "cat",childrens.id)[con].mediaURL}" alt="red jacket">
                <p>${searchBy(obj, "cat",childrens.id)[con].title}</p>
                <span>${searchBy(obj, "cat",childrens.id)[con].price}</span>
                <div class="home-overlay">
                    <div class="img-hover-size">
                        <img src="${searchBy(obj, "cat",childrens.id)[con].mediaURL}" alt="red jacket">
                    </div>
                    <h4>${searchBy(obj, "cat",childrens.id)[con].title}</h4>
                    <p>Sizes : ${searchBy(obj, "cat",childrens.id)[con].size.map(siz =>`${siz}`).join(' - ')}</p>
                    <ul class="colors">
                        ${searchBy(obj, "cat",childrens.id)[con].color.map(colo => `<li class="${colo}"></li>`).join(' ')}
                    </ul>
                    <hr>
                    <div class="icons-overlay">
                        <i class="fa fa-globe"></i>
                        <i class="fa fa-shopping-basket"></i>
                        <i class="fa fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    saveMark4=saveMark4 + markup4;
    }
    template.innerHTML=saveMark4;
})
hot.addEventListener("click",function(){
    var saveMark5 = "";
    for(con=0 ; con<searchBy(obj, "cat",hot.id).length ; con++){
        var markup5=`
        <div class="col-md-4 padd-bot">
            <div class="jacket  text-center" id="idd1">
                <img class="img-fluid" src="${searchBy(obj, "cat",hot.id)[con].mediaURL}" alt="red jacket">
                <p>${searchBy(obj, "cat",hot.id)[con].title}</p>
                <span>${searchBy(obj, "cat",hot.id)[con].price}</span>
                <div class="home-overlay">
                    <div class="img-hover-size">
                        <img src="${searchBy(obj, "cat",hot.id)[con].mediaURL}" alt="red jacket">
                    </div>
                    <h4>${searchBy(obj, "cat",hot.id)[con].title}</h4>
                    <p>Sizes : ${searchBy(obj, "cat",hot.id)[con].size.map(siz =>`${siz}`).join(' - ')}</p>
                    <ul class="colors">
                        ${searchBy(obj, "cat",hot.id)[con].color.map(colo => `<li class="${colo}"></li>`).join(' ')}
                    </ul>
                    <hr>
                    <div class="icons-overlay">
                        <i class="fa fa-globe"></i>
                        <i class="fa fa-shopping-basket"></i>
                        <i class="fa fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    saveMark5=saveMark5 + markup5;
    }
    template.innerHTML=saveMark5;
})

sm.addEventListener("change",function(){
    var saveMark6 = "";
    for(con=0 ; con<searchBy(obj, "size",sm.id).length ; con++){
        var markup6=`
        <div class="col-md-4 padd-bot">
            <div class="jacket  text-center" id="idd1">
                <img class="img-fluid" src="${searchBy(obj, "size",sm.id)[con].mediaURL}" alt="red jacket">
                <p>${searchBy(obj, "size",sm.id)[con].title}</p>
                <span>${searchBy(obj, "size",sm.id)[con].price}</span>
                <div class="home-overlay">
                    <div class="img-hover-size">
                        <img src="${searchBy(obj, "size",sm.id)[con].mediaURL}" alt="red jacket">
                    </div>
                    <h4>${searchBy(obj, "size",sm.id)[con].title}</h4>
                    <p>Sizes : ${searchBy(obj, "size",sm.id)[con].size.map(siz =>`${siz}`).join(' - ')}</p>
                    <ul class="colors">
                        ${searchBy(obj, "size",sm.id)[con].color.map(colo => `<li class="${colo}"></li>`).join(' ')}
                    </ul>
                    <hr>
                    <div class="icons-overlay">
                        <i class="fa fa-globe"></i>
                        <i class="fa fa-shopping-basket"></i>
                        <i class="fa fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    saveMark6=saveMark6 + markup6;
    }
    if(sm.checked==true){
        template.innerHTML=saveMark6;
    }else if(sm.checked==false){
        template.innerHTML=saveMark;
    }
});
md.addEventListener("change",function(){
    var saveMark7 = "";
    for(con=0 ; con<searchBy(obj, "size",md.id).length ; con++){
        var markup7=`
        <div class="col-md-4 padd-bot">
            <div class="jacket  text-center" id="idd1">
                <img class="img-fluid" src="${searchBy(obj, "size",md.id)[con].mediaURL}" alt="red jacket">
                <p>${searchBy(obj, "size",md.id)[con].title}</p>
                <span>${searchBy(obj, "size",md.id)[con].price}</span>
                <div class="home-overlay">
                    <div class="img-hover-size">
                        <img src="${searchBy(obj, "size",md.id)[con].mediaURL}" alt="red jacket">
                    </div>
                    <h4>${searchBy(obj, "size",md.id)[con].title}</h4>
                    <p>Sizes : ${searchBy(obj, "size",md.id)[con].size.map(siz =>`${siz}`).join(' - ')}</p>
                    <ul class="colors">
                        ${searchBy(obj, "size",md.id)[con].color.map(colo => `<li class="${colo}"></li>`).join(' ')}
                    </ul>
                    <hr>
                    <div class="icons-overlay">
                        <i class="fa fa-globe"></i>
                        <i class="fa fa-shopping-basket"></i>
                        <i class="fa fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    saveMark7=saveMark7 + markup7;
    }
    if(md.checked==true){
        template.innerHTML=saveMark7;
    }else if(md.checked==false){
        template.innerHTML=saveMark;
    }
});
lg.addEventListener("change",function(){
    var saveMark8 = "";
    for(con=0 ; con<searchBy(obj, "size",lg.id).length ; con++){
        var markup8=`
        <div class="col-md-4 padd-bot">
            <div class="jacket  text-center" id="idd1">
                <img class="img-fluid" src="${searchBy(obj, "size",lg.id)[con].mediaURL}" alt="red jacket">
                <p>${searchBy(obj, "size",lg.id)[con].title}</p>
                <span>${searchBy(obj, "size",lg.id)[con].price}</span>
                <div class="home-overlay">
                    <div class="img-hover-size">
                        <img src="${searchBy(obj, "size",lg.id)[con].mediaURL}" alt="red jacket">
                    </div>
                    <h4>${searchBy(obj, "size",lg.id)[con].title}</h4>
                    <p>Sizes : ${searchBy(obj, "size",lg.id)[con].size.map(siz =>`${siz}`).join(' - ')}</p>
                    <ul class="colors">
                        ${searchBy(obj, "size",lg.id)[con].color.map(colo => `<li class="${colo}"></li>`).join(' ')}
                    </ul>
                    <hr>
                    <div class="icons-overlay">
                        <i class="fa fa-globe"></i>
                        <i class="fa fa-shopping-basket"></i>
                        <i class="fa fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    saveMark8=saveMark8 + markup8;
    }
    if(lg.checked==true){
        template.innerHTML=saveMark8;
    }else if(lg.checked==false){
        template.innerHTML=saveMark;
    }
});
xl.addEventListener("change",function(){
    var saveMark9 = "";
    for(con=0 ; con<searchBy(obj, "size",xl.id).length ; con++){
        var markup9=`
        <div class="col-md-4 padd-bot">
            <div class="jacket  text-center" id="idd1">
                <img class="img-fluid" src="${searchBy(obj, "size",xl.id)[con].mediaURL}" alt="red jacket">
                <p>${searchBy(obj, "size",xl.id)[con].title}</p>
                <span>${searchBy(obj, "size",xl.id)[con].price}</span>
                <div class="home-overlay">
                    <div class="img-hover-size">
                        <img src="${searchBy(obj, "size",xl.id)[con].mediaURL}" alt="red jacket">
                    </div>
                    <h4>${searchBy(obj, "size",xl.id)[con].title}</h4>
                    <p>Sizes : ${searchBy(obj, "size",xl.id)[con].size.map(siz =>`${siz}`).join(' - ')}</p>
                    <ul class="colors">
                        ${searchBy(obj, "size",xl.id)[con].color.map(colo => `<li class="${colo}"></li>`).join(' ')}
                    </ul>
                    <hr>
                    <div class="icons-overlay">
                        <i class="fa fa-globe"></i>
                        <i class="fa fa-shopping-basket"></i>
                        <i class="fa fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    saveMark9=saveMark9 + markup9;
    }
    if(xl.checked==true){
        template.innerHTML=saveMark9;
    }else if(xl.checked==false){
        template.innerHTML=saveMark;
    }
});

rebook.addEventListener("change",function(){
    var saveMark10 = "";
    for(con=0 ; con<searchBy(obj, "brand",rebook.id).length ; con++){
        var markup10=`
        <div class="col-md-4 padd-bot">
            <div class="jacket  text-center" id="idd1">
                <img class="img-fluid" src="${searchBy(obj, "brand",rebook.id)[con].mediaURL}" alt="red jacket">
                <p>${searchBy(obj, "brand",rebook.id)[con].title}</p>
                <span>${searchBy(obj, "brand",rebook.id)[con].price}</span>
                <div class="home-overlay">
                    <div class="img-hover-size">
                        <img src="${searchBy(obj, "brand",rebook.id)[con].mediaURL}" alt="red jacket">
                    </div>
                    <h4>${searchBy(obj, "brand",rebook.id)[con].title}</h4>
                    <p>Sizes : ${searchBy(obj, "brand",rebook.id)[con].size.map(siz =>`${siz}`).join(' - ')}</p>
                    <ul class="colors">
                        ${searchBy(obj, "brand",rebook.id)[con].color.map(colo => `<li class="${colo}"></li>`).join(' ')}
                    </ul>
                    <hr>
                    <div class="icons-overlay">
                        <i class="fa fa-globe"></i>
                        <i class="fa fa-shopping-basket"></i>
                        <i class="fa fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    saveMark10=saveMark10 + markup10;
    }
    if(rebook.checked==true){
        template.innerHTML=saveMark10;
    }else if(rebook.checked==false){
        template.innerHTML=saveMark;
    }
});
addidas.addEventListener("change",function(){
    var saveMark11 = "";
    for(con=0 ; con<searchBy(obj, "brand",addidas.id).length ; con++){
        var markup11=`
        <div class="col-md-4 padd-bot">
            <div class="jacket  text-center" id="idd1">
                <img class="img-fluid" src="${searchBy(obj, "brand",addidas.id)[con].mediaURL}" alt="red jacket">
                <p>${searchBy(obj, "brand",addidas.id)[con].title}</p>
                <span>${searchBy(obj, "brand",addidas.id)[con].price}</span>
                <div class="home-overlay">
                    <div class="img-hover-size">
                        <img src="${searchBy(obj, "brand",addidas.id)[con].mediaURL}" alt="red jacket">
                    </div>
                    <h4>${searchBy(obj, "brand",addidas.id)[con].title}</h4>
                    <p>Sizes : ${searchBy(obj, "brand",addidas.id)[con].size.map(siz =>`${siz}`).join(' - ')}</p>
                    <ul class="colors">
                        ${searchBy(obj, "brand",addidas.id)[con].color.map(colo => `<li class="${colo}"></li>`).join(' ')}
                    </ul>
                    <hr>
                    <div class="icons-overlay">
                        <i class="fa fa-globe"></i>
                        <i class="fa fa-shopping-basket"></i>
                        <i class="fa fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    saveMark11=saveMark11 + markup11;
    }
    if(addidas.checked==true){
        template.innerHTML=saveMark11;
    }else if(addidas.checked==false){
        template.innerHTML=saveMark;
    }
});
nike.addEventListener("change",function(){
    var saveMark12 = "";
    for(con=0 ; con<searchBy(obj, "brand",nike.id).length ; con++){
        var markup12=`
        <div class="col-md-4 padd-bot">
            <div class="jacket  text-center" id="idd1">
                <img class="img-fluid" src="${searchBy(obj, "brand",nike.id)[con].mediaURL}" alt="red jacket">
                <p>${searchBy(obj, "brand",nike.id)[con].title}</p>
                <span>${searchBy(obj, "brand",nike.id)[con].price}</span>
                <div class="home-overlay">
                    <div class="img-hover-size">
                        <img src="${searchBy(obj, "brand",nike.id)[con].mediaURL}" alt="red jacket">
                    </div>
                    <h4>${searchBy(obj, "brand",nike.id)[con].title}</h4>
                    <p>Sizes : ${searchBy(obj, "brand",nike.id)[con].size.map(siz =>`${siz}`).join(' - ')}</p>
                    <ul class="colors">
                        ${searchBy(obj, "brand",nike.id)[con].color.map(colo => `<li class="${colo}"></li>`).join(' ')}
                    </ul>
                    <hr>
                    <div class="icons-overlay">
                        <i class="fa fa-globe"></i>
                        <i class="fa fa-shopping-basket"></i>
                        <i class="fa fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    saveMark12=saveMark12 + markup12;
    }
    if(nike.checked==true){
        template.innerHTML=saveMark12;
    }else if(nike.checked==false){
        template.innerHTML=saveMark;
    }
});
active.addEventListener("change",function(){
    var saveMark13 = "";
    for(con=0 ; con<searchBy(obj, "brand",active.id).length ; con++){
        var markup13=`
        <div class="col-md-4 padd-bot">
            <div class="jacket  text-center" id="idd1">
                <img class="img-fluid" src="${searchBy(obj, "brand",active.id)[con].mediaURL}" alt="red jacket">
                <p>${searchBy(obj, "brand",active.id)[con].title}</p>
                <span>${searchBy(obj, "brand",active.id)[con].price}</span>
                <div class="home-overlay">
                    <div class="img-hover-size">
                        <img src="${searchBy(obj, "brand",active.id)[con].mediaURL}" alt="red jacket">
                    </div>
                    <h4>${searchBy(obj, "brand",active.id)[con].title}</h4>
                    <p>Sizes : ${searchBy(obj, "brand",active.id)[con].size.map(siz =>`${siz}`).join(' - ')}</p>
                    <ul class="colors">
                        ${searchBy(obj, "brand",active.id)[con].color.map(colo => `<li class="${colo}"></li>`).join(' ')}
                    </ul>
                    <hr>
                    <div class="icons-overlay">
                        <i class="fa fa-globe"></i>
                        <i class="fa fa-shopping-basket"></i>
                        <i class="fa fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    saveMark13=saveMark13 + markup13;
    }
    if(active.checked==true){
        template.innerHTML=saveMark13;
    }else if(active.checked==false){
        template.innerHTML=saveMark;
    }
});



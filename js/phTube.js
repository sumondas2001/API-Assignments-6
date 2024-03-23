const phTubeLoad = async () => {
     const resp = await fetch(' https://openapi.programming-hero.com/api/videos/categories')

     const data = await resp.json();
     //     console.log(data.data);
     const categoryName = document.getElementById('category-name');
     data.data.forEach((element) => {
          // console.log(element)
          const div = document.createElement("div");
          div.innerHTML = `
               <a onclick="content('${element.category_id}')" role="tab" class="tab  bg-slate-500 mx-3 px-4 text-white rounded-lg">${element.category}</a>
          
          `;
          categoryName.appendChild(div);
     });

     // console.log(data.data)
};
var data = null ;
const content = async (id) => {
     const resp = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
      data = await resp.json();
     // console.log(data);
     const cardContinner = document.getElementById('card-continner');
     cardContinner.innerHTML ='';
     // console.log(data.data.length)
    if(data.data.length > 0){
     data?.data.forEach((category) => {
          // console.log(category);
          const div = document.createElement('div');
          div.innerHTML = `
          <div class="card card-compact bg-base-100 shadow-xl ">
                <div class="card-body flex">
                          <img class="rounded-md w-96" src=${category.thumbnail} alt="" srcset="">

                          <div class="flex gap-4 mt-3">
                          <img class="w-8 rounded-xl" src=${category.authors[0].profile_picture} alt="" srcset="">
                          <h2 class="card-title font-bold">${category.title}</h2>
                          </div>
                          <div class="flex gap-3">
                          <h2 class="font-smibold">${category.authors[0].profile_name}</h2>
                          <h2>${category.authors[0].verified ? '' : '<i class="fa-solid fa-circle-check"></i>'}</h2>

                          </div>
                          <h2 class="">${category.others.views} Views</h2>

                          
                    </div>
                  </div>
          `;
          cardContinner.appendChild(div)
     });
    }else{
          const drawingContinner = document.getElementById('drawing-continner');
          drawingContinner.innerHTML = '';
          
          const div = document.createElement('div');
          div.innerHTML = `
         <div>
         <img class="ml-auto mr-auto mb-10 mt-8" src="${`icon/Icon.png`}" alt="" srcset="">
         </div>
          
          <h2 class="font-bold text-4xl">Oops!! Sorry, There is no 
          <br> content here</h2>
          
          
          `;
          drawingContinner.appendChild(div)

    }
};

const sortByView =()=>{ 
     const sortData = [...data.data];
     sortData.sort((a,b)=> {
          let x = a.others.views.replace('K','');
          let y = b.others.views.replace('k','');
          
          // console.log(x)
          
          // console.log(a,b)
          return parseFloat(x)-parseFloat(y);
     }).reverse();
     const cardContinner = document.getElementById('card-continner');
     cardContinner.innerHTML = '';
     sortData.forEach((category) => {
          // console.log(category);
          const div = document.createElement('div');
          div.innerHTML = `
          <div class="card card-compact bg-base-100 shadow-xl ">
                <div class="card-body flex">
                          <img class="rounded-md w-96" src=${category.thumbnail} alt="" srcset="">

                          <div class="flex gap-4 mt-3">
                          <img class="w-8 rounded-xl" src=${category.authors[0].profile_picture} alt="" srcset="">
                          <h2 class="card-title font-bold">${category.title}</h2>
                          </div>
                          <div class="flex gap-3">
                          <h2 class="font-smibold">${category.authors[0].profile_name}</h2>
                          <h2>${category.authors[0].verified ? '' : '<i class="fa-solid fa-circle-check"></i>'}</h2>

                          </div>
                          <h2 class="">${category.others.views} Views</h2>

                          
                    </div>
                  </div>
          `;
          cardContinner.appendChild(div);
     });
     // console.log(data);



}


phTubeLoad()
content('1000');



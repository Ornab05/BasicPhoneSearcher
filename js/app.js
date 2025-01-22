const loadPhones= async(searchText)=>{
    const url= `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res= await fetch(url);
    const data= await res.json();
      displayPhones(data.data)
}

const displayPhones=(phones)=>{
    const PhonesContainer= document.getElementById('phone-container');
    PhonesContainer.innerHTML='';

    phones.forEach(phone=>{
        const Phonediv= document.createElement('div');
        Phonediv.innerHTML= `
        <div class="col">
        <div class="card">
          <img src="${phone.image}" class="card-img-top p-5" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone. phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>`
      PhonesContainer.appendChild(Phonediv)
      console.log(phone)
    })
}

document.getElementById('id-button').addEventListener('click', function(){
    const input_field= document.getElementById('id-search')
    const text=input_field.value;
    loadPhones(text)
    text.innerTEXT='';
})

loadPhones()
function myFunct() {
    var x = document.getElementById("contents");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

var Modal = document.getElementById("myModal1");
// Get the button that opens the modal
var btn = document.getElementById("createbtn");
var vbtn = document.getElementById("viewbtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  Modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  Modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == Modal) {
    modal.style.display = "none";
  }
}
const BASE_URL ='https://notes-web-app-by-sadhana.herokuapp.com/posts';
//const allnotes = res.data;


const getallNotes = async (res,data)=> {
  try {
    const res = await axios.get(`${BASE_URL}`);
    const allposts = res.data;
    const description=res.data.description;
    const title=res.data.title;
    console.log(`this is title`,title);
    console.log(`GET: Here's the list of posts`, allposts);
    var l=allposts.length;
    console.log(l);
    for (var i=0;i<l;i++){

      var a=allposts[i]["title"];
      var b=allposts[i]["description"];
      var c =allposts[i]["_id"];

      var newNode = document.createElement('div');
        newNode.className = 'container-card';
        newNode.id=c;
        document.querySelector('#getsnotes').appendChild(newNode);
      var x = document.createElement("div");
        x.className='content-post';
        x.id=c;
        document.querySelector('.container-card').appendChild(x);
        //document.querySelector('#getsnotes').appendChild(x);
        newNode.appendChild(x);
      var newH = document.createElement("h5");
        newH.className='card-title-';
        newH.innerHTML=`Title:${a}`;
        newH.id=c;
        document.querySelector('.content-post').appendChild(newH);
        //document.querySelector('#getsnotes').appendChild(newH);
        x.appendChild(newH);

      var newPara = document.createElement("p");
        newPara.className='card-text-';
        newPara.innerHTML=`Description:${b}`+` `+`${c}`;
        //newNode.innerHTML = 'this created div contains a class while created!!!';
        newPara.id=c;
        document.querySelector('.content-post').appendChild(newPara);
        //document.querySelector('#getsnotes').appendChild(newPara);
        x.appendChild(newPara);
      var trashButton = document.createElement("button")
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        trashButton.id=c;
        x.appendChild(trashButton);
        trashButton.onclick = genFunc(c)
        
      var editButton = document.createElement("button")
        // editButton.innerHTML = '<i class="fas fa-pencil "></i>';
        editButton.innerHTML = '<span>Edit</span>';
        editButton.classList.add("edit-btn");
        editButton.id=c;
        editButton.className='btn btn-primary EditIcon';
        x.appendChild(editButton);
        $(document).ready(function(){
          console.log('in it');
          $(".EditIcon").click(function(){
            $("#exampleModal").modal();
          });
        });
        editButton.onclick = genFun(c);
       //editButton.onclick =updateallNotes();
      var newPa = document.createElement("p");
        newPa.innerHTML=``;
        document.querySelector('#getsnotes').appendChild(newPa);
    
    console.log(allposts[i]["_id"],allposts[i]["description"]);
    }
  } catch (e) {
    console.error(e);
  }
};

function genFunc(c) {
  return function()
  {
  deleteNotes(c);
  alert(c,"deleted successfully");
  }
  }
  var dn;
  const deleteNotes = ( dn) => {
   // const obj_id=document.querySelector('#objectId').value
   try {
     axios.delete(`${BASE_URL}/${dn}`);
     console.log(`Deleted Note ID: `, dn);
   } catch (e) {
     console.error(e);
   }
  };

  const postallNotes=() =>{
    const n_title = document.querySelector('#new_title').value;
    const n_description = document.querySelector('#new_description').value;
    var frm = document.getElementsByName('Noteform')[0]
    console.log(n_title);
    console.log(n_description);
    axios.post(`${BASE_URL}`, {
    title: n_title,
    description: n_description
   })
    alert("Clicked Save");
    // document.frm.reset();
    document.querySelector('#new_title').value="";
    document.querySelector('#new_description').value="";
     };

     
    
function genFun(c) {
  return function(){
  console.log('ID',c);
  axios.get(`${BASE_URL}/${c}`).then(resp => {
    console.log(resp.data);
    const particularpost=resp.data    ;
  // console.log(particularpost);
  console.log(particularpost["title"],particularpost["description"]);  
  // console.log(typeof(particularpost))  
   const un_title =document.querySelector('#recipient-name');
         un_title.value=particularpost["title"];
   const un_description = document.querySelector('#message-text');
         un_description.value=particularpost["description"];
   console.log(`fetched prev val: `, c,un_title,un_description);
  
});
  // const res= axios.get(`${BASE_URL}/${c}`); 
  // const particularpost=res.data    ;
  // console.log(particularpost);
  //,particularpost[0]["title"],particularpost[0]["description"]);  
  // console.log(typeof(particularpost))  
  // const un_title = $('#recipient-name');
  //       un_title.value=particularpost["title"];
  // const un_description = $('#message-text');
  //       un_description.value=particularpost["description"];
  // console.log(`fetched prev val: `, c,un_title,un_description);
  //alert(c)  
  // fetchprevNotes(c);
  // fpu();
  //console.log('trying fetchprevvv');
  //alert(c,"to be updated.Just fetched!!");  
  updatebtn=document.getElementById('upbtn');
  updatebtn.onclick=function(){
    UpallNotes(c);
    console.log('updating ');
  }
  }  }
  
  var un;
  

  const fetchprevNotes =async ( un)=> {
    console.log('in fetchprev function')
    //const B_url='http://localhost:3000/posts/'+un;
    //const fpu =async (res,data)=> {    
    // const obj_id=document.querySelector('#objectId').value
    try {
      //const res= await axios.get(`${BASE_URL}/${un}`);
      axios.get(`${BASE_URL}/${un}`).then(resp => {

    console.log(resp.data);
}); 
      const particularpost=res.data    ;
      console.log(particularpost);//,particularpost[0]["title"],particularpost[0]["description"]);  
      console.log(typeof(particularpost))  
      const un_title = document.querySelector('#new_titleU');
            un_title.value=particularpost["title"];
      const un_description = document.querySelector('#new_descriptionU');
            un_description.value=particularpost["description"];
      console.log(`fetched prev val: `, un);
    } catch (e) {
      console.error(e);
    }
    //fpu();
  // };
  };
  
  const UpallNotes=(un) =>{
    const Up_title = document.querySelector('#recipient-name').value;
    const Up_description = document.querySelector('#message-text').value;
    console.log(Up_title);
    console.log(Up_description);
    axios.patch(`${BASE_URL}/${un}`, {
       title: Up_title,
       description: Up_description
     })
     console.log('updated just a few seconds ago')
   };
 
// $('EditIcon').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var recipient = 'hello'//button.data('whatever') // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   var modal = $(this)
//   modal.find('.modal-title').text('New message to ' + recipient)
//   modal.find('.modal-body input').val(recipient)
//   })
//   $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })


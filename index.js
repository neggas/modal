let modalAtive = false;
const ombre =  document.getElementById("ombre");
const body = document.body;
const modal = document.getElementById("modal");
const btn = document.getElementById("btn");
const form = document.getElementById("form");


modal.hidden = true;

btn.addEventListener("click",()=>{
	modal.hidden = false;
	ombre.style.backgroundColor = "rgba(0,0,0,0.4)";
	ombre.style.position = 'absolute';
	ombre.style.top="0";
	ombre.style.bottom = "0";
	ombre.style.left="0";
	ombre.style.right = "0";
	ombre.style.display = 'block';	
	btn.style = "display:none";

})

body.addEventListener('click',(e)=>{

		if(e.target.id != form.id && e.target.id != btn.id){
			ombre.style.display = 'none';
			btn.style = "display:block!important";

		}


		

		if(modal.hidden === false){
			if(e.target.childElementCount === 4)
			{
				modal.hidden = true;
				
				body.style.backgroundColor = "";
				body.appendChild(btn);
			}
		}
		

	},false)



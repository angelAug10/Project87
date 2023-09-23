
// Create canvas variable
 block_y=1;
 block_x=1;
 var canvas=new fabric.Canvas('myCanvas');

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
}
function  new_image(get_image){
	fabric.Image.fromUR(get_image,function(Img){
		block_image_object=Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_height.scaleToHeight(block_image_height);
		block_image_object.set({
		top:block_x,
		left:block_x{);

		}
		canvas.add(block_image_object);
	}
}
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	// upload red ranger
	new_image('rr1.png');
		console.log("r");
	{
	
	}

	if(keyPressed == '71')
	{
		new_image('rr1.png');
		console.log("r");
		block_x = 200;
		// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	}
	
}


#pragma strict
var skin: SpriteRenderer;
var anim: Animator;
var player: Rigidbody2D;
private var right = false;
private var left = false;
function Start () 
{
}

function Update () {

	if((Input.GetAxis("Vertical")).ToString() == (0).ToString()||right==true)
	{
		player.AddForce(Vector2.right*125*Input.GetAxis("Horizontal"));
		right = true;
		if(left === true)
		{
			left = false;
		}
	}
	if((Input.GetAxis("Horizontal")).ToString() == (0).ToString())
	{
		right = false;
	}
	if((Input.GetAxis("Horizontal")).ToString() == (0).ToString()||left==true)
	{
		player.AddForce(Vector2.up*125*Input.GetAxis("Vertical"));
		left = true;
		if(left === true)
		{
			left = false;
		}
	}		
	if((Input.GetAxis("Vertical")).ToString() == (0).ToString())
	{
		left = false;
	}
	anim.SetFloat("speed", Input.GetAxis("Horizontal"));
	anim.SetFloat("f_speed", Input.GetAxis("Vertical"));

}
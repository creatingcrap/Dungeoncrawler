#pragma strict
public var collider: BoxCollider2D;
function Start () {

}

function Update () {
	if(Input.GetMouseButtonUp(0))
	{
		var ray : Ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		//Debug.DrawRay (ray.origin, ray.direction * 10, Color.yellow);
		if (Physics.Raycast(ray)) {
			Debug.Log("Clicked");
		}
	}
}